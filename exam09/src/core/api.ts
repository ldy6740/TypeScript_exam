import { NewsFeed, NewsDetail } from '../types'

// 클레스, 상속 코드

export default class Api {
	url: string;
	xhr: XMLHttpRequest;

	constructor(url: string) {
		this.url = url;
		this.xhr = new XMLHttpRequest();
	}

	async request<AjaxResponse>(): Promise<AjaxResponse> {
		const response = await fetch(this.url);
		return await response.json() as AjaxResponse;
	}
}

export class NewsFeedApi extends Api {
	constructor(url: string) {
		super(url)
	}

	async getData(): Promise<NewsFeed[]> {
		return this.request<NewsFeed[]>();
	}
}

export class NewsDetailApi extends Api {

	constructor(url: string) {
		super(url);
	}

	async getData(): Promise<NewsDetail> {
		return this.request<NewsDetail>();
	}
}
