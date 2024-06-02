import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { portfolioProjects, portfolioTabs } from './portfolioData';

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = reactive(portfolioProjects.reverse());

  portfolioTabs.map((tab) => {
    tab.content = projects.filter((p) => tab.id === p.tabId);
  });

  const tabs = reactive(portfolioTabs);

  return { tabs };
});
