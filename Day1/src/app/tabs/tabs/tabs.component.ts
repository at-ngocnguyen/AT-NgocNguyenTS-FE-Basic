import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit {
  @Input() contentChild: number;
  @Output() stateChild = new EventEmitter<number>();
  constructor() { }
  listChild: any[] = [
    {
      id: 1,
      img: '../assets/img/iconFB.png',
      content: '1',
    },
    {
      id: 2,
      img: '../assets/img/icongGG.png',
      content: '2',
    },
    {
      id: 3,
      img: '../assets/img/iconYB.png',
      content: '3',
    },
    {
      id: 4,
      img: '../assets/img/iconFB.png',
      content: '4',
    }
  ]
  backChild() {
    this.contentChild = 1;
    this.stateChild.emit(this.contentChild);
  }
  ngOnInit() {

  }

}
