import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { MENU } from '../assets/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  path: string;
  bannerSrc: string;
  menu = MENU;

  constructor() {
    const absPath = window.location.href;
    const absPathArr = absPath.split('/');
    this.path = absPathArr[absPathArr.length - 1];
    const menuItem = this.menu.filter(item => item.path === this.path);
    this.path = menuItem[0] ? this.path : 'index';
    this.bannerSrc = menuItem[0]?.bannerSrc;
    this.bannerSrc = this.bannerSrc ? this.bannerSrc : this.menu[0].bannerSrc;
  }
}
