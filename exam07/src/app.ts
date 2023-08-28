import Router from './core/router'
import { NewsFeedView, NewsDetailView } from './pages'
// import NewsFeedView from './pages/news-feed-view'
// import NewsDetailView from './pages/news-detail-view'
import { Store } from './store';

const store = new Store();

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root', store);
const newsDetailView = new NewsDetailView('root', store);

router.setDefaultPage(newsFeedView);
router.addRouterPath('/page/', newsFeedView);
router.addRouterPath('/show/', newsDetailView); 

router.route();