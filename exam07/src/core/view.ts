export default abstract class View {
	private template: string;
	private renderTemplate: string; 
	private container: HTMLElement;
	private htmlList: string[];

	constructor(containerId: string, template: string) {
		const containerElement = document.getElementById(containerId);

		if(!containerElement) {
			throw "최상위 컨테이너가 없어 UI를 생성할 수 없습니다.";
		}

		this.container = containerElement;
		this.template = template;
		this.renderTemplate = template;
		this.htmlList = [];
	}

	updateView(): void {		
		this.container.innerHTML = this.renderTemplate;
		this.renderTemplate = this.template;
	}

	addHtml(htmlString: string): void {
		this.htmlList.push(htmlString);
	}

	getHtml(): string {
		const snapshot = this.htmlList.join('');
		this.clearHtmlList();
		return snapshot;
	}

	setTemplateData(key: string, value: string): void {
		this.renderTemplate = this.renderTemplate.replace(`{{__${key}__}}`, value);
	}

	clearHtmlList(): void {
		this.htmlList = [];
	}

	abstract render(): void;
}
