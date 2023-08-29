import { RouteInfo } from '../types'
import View from './view'

export default class Router {
	routeTable: RouteInfo[];
	defualtRoute: RouteInfo | null;

	constructor() {
		window.addEventListener('hashchange', this.route.bind(this) );
		
		this.routeTable = [];
		this.defualtRoute = null;
	}

	setDefaultPage(page: View): void {
		this.defualtRoute = { path: '', page }
	}

	addRouterPath(path: string, page: View): void {
		this.routeTable.push({ path, page });
	}

	route() {
		const routePath = location.hash;
		console.log(routePath);

		if(routePath === '' && this.defualtRoute) {
			this.defualtRoute.page.render();
		}

		for( const routeInfo of this.routeTable) {
			if(routePath.indexOf(routeInfo.path) >= 0) {
				console.log(routeInfo.path);
				console.log(routeInfo.page);
				routeInfo.page.render();
				break;
			}
		}
	}
}