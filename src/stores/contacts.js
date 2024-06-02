import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';
import resumePdf from '@/assets/files/Resume Egor.pdf';
import diplomFrontend from '@/assets/files/Diploma-Egor.pdf';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconTelegram from '@/components/icons/IconTelegram.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
import IconPdf from '@/components/icons/IconPdf.vue';

export const useContactsStore = defineStore('contacts', () => {
  const contacts = shallowReactive([
    {
      title: 'Егор Евгеневич',
      icon: IconGitHub,
      href: 'https://github.com/RGBEGOR',
    },
    {
      title: 'https://t.me/Egor1993',
      icon: IconTelegram,
      href: 'https://t.me/Egor1993',
    },
    {
      title: 'www.egorrgb86@gmail.com',
      icon: IconEmail,
      href: 'egorrgb86@gmail',
    },
    {
      title: 'Скачать резюме',
      icon: IconPdf,
      href: resumePdf,
    },
    {
      title: 'Скачать диплом',
      icon: IconPdf,
      href: diplomFrontend,
    },
  ]);

  return { contacts };
});
