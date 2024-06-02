import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useCommonStore = defineStore('common', () => {
  const isDisabledStars = ref(false);
  const menu = reactive([
    { route: 'home', text: 'Главная' },
    { route: 'experience', text: 'Опыт' },
    { route: 'portfolio', text: 'Портфолио' },
    { route: 'contacts', text: 'Контакты' },
  ]);

  const toggleStars = () => (isDisabledStars.value = !isDisabledStars.value);

  return { isDisabledStars, menu, toggleStars };
});
