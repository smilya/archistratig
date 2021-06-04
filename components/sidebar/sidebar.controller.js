export default class SidebarController {
    constructor($filter) {
        this.isOpen = false;
        this.myVar = 12.34;
        this.menu = [
            {
                title: "yandex",
                url: "http://www.yandex.ru",
                icoLink: "images/sidebar/yandex.svg",
            },
            {
                title: "google",
                url: "http://www.google.com",
                icoLink: "images/sidebar/google.svg",
            },
            {
                title: "altavista",
                url: "http://www.altavista.com",
                icoLink: "images/sidebar/altavista.svg",
            },
        ];
        // this.isOpen = false;
        // 'ngInject';
        // console.log($filter('searchFilter')(this.menu, 'a'))
    }
}
