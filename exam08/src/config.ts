export const container: HTMLElement | null  = document.getElementById('root');
export const ajax: XMLHttpRequest = new XMLHttpRequest();
export const content = document.createElement('div');
export const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
export const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
export const VIEW_COUNT = 10;
export const TOTAL_PAGE = 30 / VIEW_COUNT;