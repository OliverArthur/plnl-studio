<template>
  <AppHeader>
    <template #action>
      <div class="language-switcher">
        <Button
            class="language-toggle"
            :label="selected"
            @click="isOpen = !isOpen"
            aria-haspopup="true"
            :aria-expanded="isOpen"
            v-tooltip.left="$t('navigation.language_switcher')"
        >
          {{ selected }}
        </Button>
        <ul class="language-list" :class="{ 'language-list--visible': isOpen }" aria-label="Language switcher">
          <li class="language-list__item" v-for="lang in Language" :key="lang">
            <Button
                class="language-option"
                v-if="lang != selected"
                :class="{ 'language-option--active': selected === lang }"
                :label="lang"
                @click="changeLanguage(lang)"
            />
          </li>
        </ul>
      </div>
    </template>
  </AppHeader>

    <main class="app-content">
        <slot />
    </main>
</template>

<script setup lang="ts">
import {ref, computed, watch} from 'vue'
import {useI18n} from 'vue-i18n'
import AppHeader from '@/components/header/AppHeader.vue'
import Button from 'primevue/button'

enum Language {
  EN = 'EN',
  NL = 'NL'
}

const {locale} = useI18n()

const getUserLanguage = (): Language => {
  if (typeof navigator === 'undefined') return Language.EN
  const lang = navigator.language.split('-')[0].toUpperCase()
  return lang === 'EN' ? Language.EN : Language.NL
}

const selectedLanguage = ref<Language>(getUserLanguage())
const isOpen = ref(false)
const selected = computed<string>(() => selectedLanguage.value.toUpperCase())

function changeLanguage(lang: Language) {
  selectedLanguage.value = Language[lang] ?? Language.EN
  isOpen.value = false
}

watch(selectedLanguage, (newLocale: Language) => locale.value = newLocale.toLowerCase())

</script>

<style lang="scss" scoped>
@use '@/styles/px-to-rem' as func;
.app-content {
    flex: 1;
    margin: 0 auto;
    max-width: func.px-to-rem(2560);
    padding: func.px-to-rem(32);
    width: 100%;
}

.language-switcher {
  position: relative;
  display: inline-block;
}

.language-toggle {
  display: flex;
  color: var(--text-color);
  background-color: transparent;
  border: none;

  &.p-button:hover,
  &.p-button:focus,
  &.p-button:active {
    background-color: transparent;
    border: none;
    font-weight: 600;
    color: var(--p-neutral-900);
  }
}

.language-list {
  position: absolute;
  top: 100%;
  right: func.px-to-rem(-4);
  margin-top: func.px-to-rem(8);
  list-style: none;
  padding: func.px-to-rem(4);
  display: none;
  z-index: 1000;

  &--visible {
    display: block;
  }
}

.language-option {
  width: 100%;
  text-align: left;
  //padding: func.px-to-rem(8) func.px-to-rem(16);
  color: var(--text-color);
  font-weight: 200;
  background-color: transparent;
  border: none;

  &:hover {
    background-color: var(--surface-100);
  }

  &.p-button:hover,
  &.p-button:focus,
  &.p-button:active {
    background-color: transparent;
    font-weight: 600;
    border: none;
    color: var(--p-neutral-900);
  }

  &--active {
    background-color: var(--primary-50);
    font-weight: 600;
  }
}
</style>