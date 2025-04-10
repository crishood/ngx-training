import {Directive, HostBinding, HostListener, input} from '@angular/core';


@Directive({
  selector: '[appHighlight],button,input', // CSS selector [] = select by attribute
  exportAs: "myHighlight"
})
export class HighlightDirective {

  classToUse = input('highlight', {alias: "appHighlight"});

  @HostBinding("class")
  cssClass?: string;

  @HostListener("mouseover")
  onOver() {
    this.cssClass = this.classToUse();
  }

  @HostListener("mouseout")
  onOut() {
    this.cssClass = "";
  }

}
