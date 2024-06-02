import Egipt from '@/assets/images/Egipt.png';
import Mongol from '@/assets/images/Mongol.png';
import Famous from '@/assets/images/Famous.png';
import Team from '@/assets/images/Team.png';
import Action from '@/assets/images/Action.png';
import Samanid from '@/assets/images/Samanid.png';
import India from '@/assets/images/India.png';
import Greece from '@/assets/images/Greece.png';


import {
  DEFAULT_IS_OPEN,
  GITHUB_PAGES_LINK,
  MY_GITHUB,
  WEB_LAYOUTS,
} from './constants';

export const webLayoutProjects = [
  {
    id: WEB_LAYOUTS + 1,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: Egipt,
    imgMobile: Egipt,
    title: 'Egipt',
    description: `Сайт для учебный целей тема Древний Египет`,
    link: GITHUB_PAGES_LINK + 'GodsEgipt6Class',
    github: MY_GITHUB + '',
  },
  {
    id: WEB_LAYOUTS + 2,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: Mongol,
    imgMobile: Mongol,
    title: 'Тема Монголы',
    description: `Сайт для учебных целей тема Монголы`,
    link: GITHUB_PAGES_LINK + 'WH5-2P/',
    github: MY_GITHUB + '',
  },
  {
    id: WEB_LAYOUTS + 3,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: Famous,
    imgMobile: Famous,
    title: 'Тематика сайта знаменитые люди',
    description: `Знаменитый правители в истории`,
    link: GITHUB_PAGES_LINK + 'Historicalpersonalities/',
    github: MY_GITHUB + '',
  },
  {
    id: WEB_LAYOUTS + 4,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: Team,
    imgMobile: Team,
    title: 'Проектная работа  по истории Дримовцы',
    description: `Проектная работа Dream Team`,
    link: GITHUB_PAGES_LINK + 'ProjectH7BClass/',
    github: MY_GITHUB + '',
  },
  {
    id: WEB_LAYOUTS + 5,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: Action,
    imgMobile: Action,
    title: 'Древний мир верстка сайта',
    description: `Сайт для учебы по истории тема Древний мир`,
    link: GITHUB_PAGES_LINK + 'AH3-4les/',
    github: MY_GITHUB + '',
  },
  {
    id: WEB_LAYOUTS + 6,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: Samanid,
    imgMobile: Samanid,
    title: 'Samanids',
    description: `Сайт по истории на тему Саманиды`,
    link: GITHUB_PAGES_LINK + 'Samanids/',
    github: MY_GITHUB + '',
  },
  {
    id: WEB_LAYOUTS + 7,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: India,
    imgMobile: India,
    title: 'India',
    description: `Сайт для учебных целей тема Индия`,
    link: GITHUB_PAGES_LINK + 'IndiaMedival/',
    github: MY_GITHUB + '',
  },
  {
    id: WEB_LAYOUTS + 8,
    isOpen: DEFAULT_IS_OPEN,
    tabId: WEB_LAYOUTS,
    imgDesktop: Greece,
    imgMobile: Greece,
    title: 'Greece',
    description: `В учебных целях верстка сайта Греция `,
    link: GITHUB_PAGES_LINK + 'Greece5/',
    github: MY_GITHUB + '',
  },

];
