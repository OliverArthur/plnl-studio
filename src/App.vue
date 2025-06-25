<template>
  <component :is="layout ?? 'div'">
        <router-view v-slot=" { Component, route }">
          <transition name="slide-page" mode="out-in">
            <component :is="Component" :key="route.name"/>
          </transition>
        </router-view>
  </component>
</template>
<script setup lang="ts">

import layouts from '@/components/layout'
import { provide, shallowRef, type Component } from 'vue'
import router from '@/router'

const typedLayouts: Record<string, Component> = layouts

const layout = shallowRef<Component>(typedLayouts['AppLayout'])

router.afterEach((to: RouteLocationNormalizedGeneric) => {
  if (to.meta && typeof to.meta.layout === 'string' && to.meta.layout in layouts) {
    layout.value = typedLayouts[to.meta.layout] ?? typedLayouts['AppLayout']
  }
})

provide('app:layout', layout)
</script>

<style>
.slide-page-enter-active, .slide-page-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
  position: absolute;
  width: 100%;
}

.slide-page-enter-from {
  transform: translateX(40px);
  opacity: 0;
}
.slide-page-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-page-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-page-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>