import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @Input() node: any;//get value of data object when click
  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {
    if (element.nodeName === 'I') {//get Element has clicked
      this.node.state = !this.node.state;
      this.node.state ? this.node.count = parseInt(this.node.count) + 1 : this.node.count = parseInt(this.node.count) - 1;
      if (this.node.state === true) {
        element.style.color = "red";
      }
      else element.style.color = "grey";
    }
  }
}
