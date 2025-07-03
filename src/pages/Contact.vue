<template>
  <section aria-labelledby="contact-info-heading" class="contact-page">
    <div class="contact-page__container">
      <div class="contact-page__header">
        <h2 id="contact-info-heading" class="app--type-heading-02">{{ $t('contact.title') }}</h2>
        <p class="app--type-body-long-01">{{ $t('contact.subtitle') }}</p>
      </div>

      <address class="contact-info">
        <ul class="contact-info__list">
          <li class="contact-info__item">
            <span class="contact-info__label">{{ $t('contact.email.label') }}</span>
            <a :href="'mailto:' + $t('contact.email.value')" class="app--link">{{
              $t('contact.email.value')
            }}</a>
          </li>
          <li class="contact-info__item">
            <span class="contact-info__label">{{ $t('contact.phone.label') }}</span>
            <a :href="'tel:' + $t('contact.phone.value')" class="app--link">{{
              $t('contact.phone.value')
            }}</a>
          </li>
          <li class="contact-info__item">
            <span class="contact-info__label">{{ $t('contact.address.label') }}</span>
            <span class="contact-info__value">{{ $t('contact.address.value') }}</span>
          </li>
        </ul>
      </address>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/styles/px-to-rem' as func;
@use "sass:math";

// Carbon Design System Tokens
$spacing-05: func.px-to-rem(16);
$spacing-06: func.px-to-rem(24);
$spacing-07: func.px-to-rem(32);
$spacing-08: func.px-to-rem(48);

$text-01: var(--text-color);
$text-02: var(--text-color-secondary);

// Page layout
.contact-page {
  padding-block: $spacing-08;
}

.contact-page__container {
  max-width: func.px-to-rem(960);
  padding-inline: $spacing-05;
}

.contact-page__header {
  margin-bottom: $spacing-07;

  .app--type-heading-02 {
    margin-bottom: $spacing-05;
  }
}

.contact-info {
  font-style: normal;
}

.contact-info__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $spacing-06;
}

.contact-info__item {
  display: flex;
  flex-direction: column;
}

.contact-info__label {
  font-weight: 600;
  font-size: func.px-to-rem(14);
  line-height: 1.4;
  margin-bottom: math.div($spacing-05, 4);
  color: $text-02;
}

.contact-info__value,
.app--link {
  font-size: func.px-to-rem(16);
  line-height: 1.5;
  color: $text-01;
  text-decoration: none;

  &.app--link:hover {
    text-decoration: underline;
  }
}

// Responsive grid for contact items
@media (min-width: 768px) {
  .contact-info__list {
    grid-template-columns: repeat(auto-fit, minmax(func.px-to-rem(200), 1fr));
  }
}
</style>