<script setup>
import { useCommonStore } from '@/stores/common';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const TABLET_BREAK_POINT = 768;
const commonStore = useCommonStore();
const { menu } = storeToRefs(commonStore);

const isMobileDevice = () => window.innerWidth < TABLET_BREAK_POINT;

let isOpenMenu = ref(true);
if (isMobileDevice()) {
  isOpenMenu.value = false;
}

function openMenu() {
  if (isMobileDevice()) {
    isOpenMenu.value = !isOpenMenu.value;
  }
}
</script>

<template>
  <header class="header section-offset">
    <div class="container header__container">
      <div class="burger-wrap">
        <button
          class="btn-reset burger"
          :class="{ 'open-menu': isOpenMenu }"
          aria-label="Открыть меню"
          @click="openMenu"
        >
          <span
            class="burger__line"
            :class="{ 'open-menu': isOpenMenu }"
          ></span>
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <nav
          class="nav"
          title="Главное меню"
          v-if="isOpenMenu"
          @click="openMenu"
        >
          <button
            class="btn-reset nav__close"
            aria-label="Закрыть меню"
          ></button>

          <ul class="list-reset nav__list">
            <li class="nav__item" v-for="item in menu" :key="item.route">
              <router-link
                href="#"
                class="nav__link gradient-text uppercase link"
                :to="{ name: item.route }"
              >
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/header-component.scss';
</style>
