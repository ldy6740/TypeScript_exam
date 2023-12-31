import { NewsFeed, NewsDetail } from '../types'

// 클레스, 상속 코드

export class Api {
	url: string;
	ajax: XMLHttpRequest;
	constructor(url: string) {
		this.url = url;
		this.ajax = new XMLHttpRequest();
	}
	protected getRequest<AjaxResponse>(): AjaxResponse {
		this.ajax.open('GET', this.url, false);
		this.ajax.send();

		return JSON.parse(this.ajax.response);
	}
}

export class NewsFeedApi extends Api {
	getData(): NewsFeed[] {
		return this.getRequest<NewsFeed[]>();
	}
}

export class NewsDetailApi extends Api {
	getData(): NewsDetail {
		return this.getRequest<NewsDetail>();	
	}
}
