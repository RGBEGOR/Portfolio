<script setup>
import { useHomeStore } from '@/stores/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore();
const { table, frontEndSkills, backEndSkills } = storeToRefs(homeStore);
</script>

<template>
  <section class="home section-offset">
    <div class="container home__container">
      <h1 lang="en" class="home__title gradient-text uppercase">
        УЧИТЕЛЬ ИСТОРИИ И ВОСПИТАНИЯ
      </h1>
      <p lang="en" class="home__sub-title gradient-text uppercase typewriter">
        МОЕ ПОРТФОЛИО
      </p>

    <div class="about-offset">
        <img src="../assets/images/Dream.jpg" class="Imegor" />
      <div class="home__table table">
        <div
          class="home__text gradient-text table__row"
          v-for="item in table"
          :key="item.col1"
        >
          <div class="table__col table__col--1" v-html="item.col1"></div>
          <div class="table__col table__col--2" v-html="item.col2"></div>
        </div>
      </div>
    </div>


    </div>
  </section>

  <section class="skills">
    <div class="container skills__container">
      <h2 class="section-title skills__title">Мои приложения для работы</h2>
      <ul class="list-reset skills__list">
        <li
          class="skills__item"
          v-for="skill in frontEndSkills"
          :key="skill.label"
        >
          <component :is="skill.icon"></component>
          <div class="skills__label gradient-text">{{ skill.label }}</div>
        </li>
      </ul>

      <ul class="list-reset skills__list">
        <li
          class="skills__item"
          v-for="skill in backEndSkills"
          :key="skill.label"
        >
          <component :is="skill.icon"></component>
          <div class="skills__label gradient-text">{{ skill.label }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/home-view.scss';
</style>
