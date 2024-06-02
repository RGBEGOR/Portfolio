import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';
import resumePdf from '@/assets/files/Resume Egor.pdf';
import IconVue from '@/components/icons/IconVue.vue';
import IconJS from '@/components/icons/IconJS.vue';
import IconHTML5 from '@/components/icons/IconHTML5.vue';
import IconCSS3 from '@/components/icons/IconCSS3.vue';
import IconSCSS from '@/components/icons/IconSCSS.vue';



export const useHomeStore = defineStore('home', () => {
  const table = shallowReactive([
    { col1: 'Фамилия, имя:', col2: 'Рузыбаев Егор Евгеневич' },

    { col1: 'Адрес проживания:', col2: 'Ташкент, Юнусобадский район' },
    { col1: 'Желаемый формат работы :', col2: 'Неполная/Удалённая работа' },

    {
      col1: 'Резюме (pdf):',
      col2: `<a class="link link-md"
        href="${resumePdf}" download>Скачать</a>`,
    },

  ]);

  const frontEndSkills = shallowReactive([
    { label: 'Vue', icon: IconVue },
    { label: 'JavaScript', icon: IconJS },
    { label: 'HTML5', icon: IconHTML5 },
    { label: 'CSS3', icon: IconCSS3 },
    { label: 'Sass', icon: IconSCSS },

  ]);

  const backEndSkills = shallowReactive([


  ]);


  return { table, frontEndSkills, backEndSkills };
});
