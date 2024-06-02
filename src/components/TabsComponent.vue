<script setup>
import { ref } from 'vue';

const { tabs } = defineProps({
  tabs: Array,
});

const selectedIndex = ref(0);

function selectTab(tabId) {
  selectedIndex.value = tabId;

  tabs.map((tab) => {
    tab.isActive = tab.id === tabId;
  });
}
</script>

<template>
  <ul class="portfolio__tabs tabs">
    <li
      class="btn-reset btn tabs__btn"
      :class="{ 'btn-active': tab.isActive }"
      v-for="tab in tabs"
      :key="tab.id"
      @click="selectTab(tab.id)"
    >
      <component :is="tab.icon"></component>
      <span class="tabs__title">{{ tab.title }}</span> ({{
        tab.content.length
      }})
    </li>
  </ul>
  <slot></slot>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/tabs-component.scss';
</style>
