import { markRaw } from 'vue';

import IconHTML5 from '@/components/icons/IconHTML5.vue';
import IconJS from '@/components/icons/IconJS.vue';
import IconVue from '@/components/icons/IconVue.vue';


import { webLayoutProjects } from './webLayoutsProjects';
import { javascriptProjects } from './javascriptProjects';
import { vueProjects } from './vueProjects';


import { JAVASCRIPT,  VUE_JS, WEB_LAYOUTS } from './constants';

export const portfolioProjects = [
  ...webLayoutProjects,
  ...javascriptProjects,
  ...vueProjects,
];

export const portfolioTabs = [
  {
    id: WEB_LAYOUTS,
    isActive: true,
    title: 'Вёрстка',
    icon: markRaw(IconHTML5),
    content: null,
  },
  {
    id: JAVASCRIPT,
    isActive: false,
    title: 'JavaScript',
    icon: markRaw(IconJS),
    content: null,
  },
  {
    id: VUE_JS,
    isActive: false,
    title: 'Vue.js',
    icon: markRaw(IconVue),
    content: null,
  },

];
