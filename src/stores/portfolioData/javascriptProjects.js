import Test1 from '@/assets/images/Test1.png';
import Main from '@/assets/images/Main.png';
import Game from '@/assets/images/Game.png';

import {
  DEFAULT_IS_OPEN,
  GITHUB_PAGES_LINK,
  JAVASCRIPT,
  MY_GITHUB,
} from './constants';

export const javascriptProjects = [
  {
    id: JAVASCRIPT + 1,
    isOpen: DEFAULT_IS_OPEN,
    tabId: JAVASCRIPT,
    imgDesktop: Test1,
    imgMobile: Test1,
    title: 'Историческое тесторование',
    description: `Для использования в  учебных целей на уроках истории`,
    link: GITHUB_PAGES_LINK + 'WordKorea/',
    github: MY_GITHUB + '',
  },
  {
    id: JAVASCRIPT + 2,
    isOpen: DEFAULT_IS_OPEN,
    tabId: JAVASCRIPT,
    imgDesktop: Main,
    imgMobile: Main,
    title: 'Командная работа тестирование JavaScript',
    description: `Групповая работа`,
    link: GITHUB_PAGES_LINK + 'Constitution/',
    github: MY_GITHUB + '',
  },
  {
    id: JAVASCRIPT + 3,
    isOpen: DEFAULT_IS_OPEN,
    tabId: JAVASCRIPT,
    imgDesktop: Game,
    imgMobile: Game,
    title: 'Групповая игра ',
    description: `Учебный проект групповой работа в классах`,
    link: GITHUB_PAGES_LINK + 'GameMedival/',
    github: MY_GITHUB + '',
  },
];
