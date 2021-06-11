import { Component, OnInit } from '@angular/core';

interface Chapter {
  id: number;
  town: string;
  contactName: string;
  phone: string;
}

import { CHAPTERS } from '../../assets/chapters';

@Component({
  selector: 'app-chapters-content',
  templateUrl: './chapters-content.component.html',
  styleUrls: ['./chapters-content.component.less'],
})
export class ChaptersContentComponent implements OnInit {
  chapters = CHAPTERS;
  selectedChapter: Chapter = this.chapters[0];

  constructor() {}

  ngOnInit(): void {
    this.chapters.sort((a, b) => {
      return a.town > b.town ? 1 : -1;
    });
  }

  onTileClick(chapter: Chapter) {
    this.selectedChapter = chapter;
  }
}
