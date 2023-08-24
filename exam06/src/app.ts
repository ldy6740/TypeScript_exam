import Router from './core/router'
import { NewsFeedView, NewsDetailView } from './pages'
// import NewsFeedView from './pages/news-feed-view'
// import NewsDetailView from './pages/news-detail-view'
import { Store } from './types'

const store: Store = {
	currentPage : 1,
	feeds : []
}

declare global {
	interface Window {
		store: Store;
	}
}

window.store = store;

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailView = new NewsDetailView('root');

router.setDefaultPage(newsFeedView);
router.addRouterPath('/page/', newsFeedView);
router.addRouterPath('/show/', newsDetailView); 

router.route();