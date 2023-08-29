import View from '../core/view'

export interface NewsStore {
	currentPage: number;
	nextPage: number;
	prevPage: number;
	numberOfFeed: number;
	hasFeeds: boolean;
	getAllFeeds: () => NewsFeed[];
	getFeed: (position: number) => NewsFeed;
	setFeeds: (feeds: NewsFeed[]) => void;
	makeRead: (id: number) => void;
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