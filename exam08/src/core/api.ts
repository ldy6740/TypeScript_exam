import { NewsFeed, NewsDetail } from '../types'

// 클레스, 상속 코드

export default class Api {
	url: string;
	xhr: XMLHttpRequest;

	constructor(url: string) {
		this.url = url;
		this.xhr = new XMLHttpRequest();
	}

	getRequestWithXHR<AjaxResponse>(cb: (data: AjaxResponse) => void): void {
		this.xhr.open('GET', this.url);
		this.xhr.addEventListener('load', () => {
			cb(JSON.parse(this.xhr.response) as AjaxResponse);
		})
		this.xhr.send();
	}

	getRequestWithPromise<AjaxResponse>(cb: (data:AjaxResponse) => void): void {
		fetch(this.url)
			.then(response => response.json())
			.then(cb)
			.catch(() => {
				console.log("정상적으로 데이터를 받지 못했습니다.");
			})
	}
}

export class NewsFeedApi extends Api {
	constructor(url: string) {
		super(url)
	}
	getDataWithXHR(cb: (data: NewsFeed[]) => void ):void {
		this.getRequestWithXHR<NewsFeed[]>(cb);
	}

	getDataWithPromise(cb: (data: NewsFeed[]) => void): void {
		this.getRequestWithPromise<NewsFeed[]>(cb);
	}
}

export class NewsDetailApi extends Api {

	constructor(url: string) {
		super(url);
	}

	getDataWithXHR(cb: (data: NewsDetail) => void): void {
		this.getRequestWithXHR<NewsDetail>(cb);	
	}

	getDataWithPromise(cb: (data: NewsDetail) => void): void {
		this.getRequestWithPromise<NewsDetail>(cb);
	}
}
