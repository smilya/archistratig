interface MenuDataItem {
  title: string
  url: string
  icoLink: string
}

export default class SidebarController {
  public isOpen: boolean = false;

  private myVar:number = 12.34;

  public menu: MenuDataItem[] = [
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

  constructor($filter:any) {
    // this.isOpen = false;
    // 'ngInject';
    // console.log($filter('searchFilter')(this.menu, 'a'))
  }
}
