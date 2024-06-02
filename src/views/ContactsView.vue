<script setup>
import { useContactsStore } from '@/stores/contacts';
import { storeToRefs } from 'pinia';

const contactsStore = useContactsStore();
const { contacts } = storeToRefs(contactsStore);
</script>

<template>
  <section class="contacts">
    <div class="container contacts__container">
      <h1 class="section-title contacts__title typewriter">Контакты/Файлы</h1>

      <ul class="list-reset contacts__list icon-list">
        <li v-for="contact in contacts" :key="contact.title">
          <component
            :title="contact.title"
            :href="contact.href"
            :is="contact.icon"
          ></component>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/contacts-view.scss';
</style>
