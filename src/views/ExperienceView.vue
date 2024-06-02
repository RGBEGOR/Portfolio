<script setup>
import { useExperienceStore } from '@/stores/experience';
import { storeToRefs } from 'pinia';

const experienceStore = useExperienceStore();
const { works } = storeToRefs(experienceStore);

function toggleWork(work) {
  experienceStore.toggleWork(work);
}
</script>

<template>
  <section class="experience">
    <div class="container experience__container">
      <h1 class="section-title experience__title typewriter">
        Опыт/Образование
      </h1>

      <div class="timeline-container">


        <ul class="list-reset experience__list" v-if="works.length > 0">
          <li class="work" v-for="work in works" :key="work.id">
            <div class="timeline-dot" :class="work.type + '-icon'"></div>

            <time
              class="work__time-interval gradient-text"
              @click.self="toggleWork(work)"
              >{{ work.timeInterval }}</time
            >
            <div class="work__content" :class="{ open: work.isOpen }">
              <h2 class="work__title">
                <span class="work__position">{{ work.position }}</span>
                <a
                  target="_blank"
                  :href="work.companyLink"
                  class="work__company"
                  >{{ work.company }}</a
                >
              </h2>

              <p class="work__desc" v-html="work.description"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/experience-view.scss';
</style>
