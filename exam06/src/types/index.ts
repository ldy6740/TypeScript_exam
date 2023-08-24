import View from '../core/view'

export interface Store {
	currentPage: number;
	feeds: NewsFeed[];
}

export interface News {
	id: number;
	user: string;
	time_ago: string;
	url: string;
	title: string;
	content: string;
}

export interface NewsFeed extends News {
	comments_count: number;
	points: number;
	read?: boolean;
}

export interface NewsDetail extends News {
	comments: NewsComment[];
}

export interface NewsComment extends News{
	comments: NewsComment[];
	level: number;
}

export interface RouteInfo {
	path: string;
	page: View;
}