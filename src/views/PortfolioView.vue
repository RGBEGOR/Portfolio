<script setup>
import IconLink from '@/components/icons/IconLink.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import { usePortfolioStore } from '@/stores/portfolio';
import { storeToRefs } from 'pinia';
import TabsComponent from '@/components/TabsComponent.vue';

const { tabs } = storeToRefs(usePortfolioStore());
</script>

<template>
  <section class="portfolio">
    <div class="container portfolio__container">
      <h1 class="section-title portfolio__title typewriter">Портфолио</h1>

      <TabsComponent :tabs="tabs">
        <TransitionGroup name="cards">
          <div class="portfolio__content" v-show="tab.isActive" v-for="tab in tabs" :key="tab.id">
            <article class="portfolio__item card" v-for="project in tab.content" :key="project.id"
              @click="project.isOpen = !project.isOpen">
              <div class="card__front" :class="{ 'card__front--open': project.isOpen }">
                <picture class="card__img">
                  <source :srcset="project.imgMobile" media="(max-width: 767px)" width="290" height="193" />

                  <img :src="project.imgDesktop" :alt="project.title" width="350" height="233" />
                </picture>
              </div>

              <div class="card__back" :class="{ 'card__back--open': project.isOpen }">
                <div class="card__content">
                  <h2 class="card__title">{{ project.title }}</h2>

                  <p class="card__desc" v-html="project.description"></p>

                  <div class="card__icons">
                    <IconLink :title="project.title" :href="project.link" v-if="project.link" />
                    <IconGitHub :title="project.title" :href="project.github" v-if="project.github" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </TransitionGroup>
      </TabsComponent>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/portfolio-view.scss';
</style>
