import {Component, Input, ElementRef, Renderer} from "@angular/core";
// import { NavController, NavParams } from 'ionic-angular';

/*
 Generated class for the ExpandableHeader page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */


@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeader {

  @Input('scrollArea') scrollArea: any;

  headerHeight: any;
  newHeaderHeight: any;

  constructor(public element: ElementRef, public renderer: Renderer) {
    this.headerHeight = 100;
    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
  }

  ngOnInit() {

    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });

  }

  resizeHeader(ev) {

    ev.domWrite(() => {

      console.log(this.element);

      this.newHeaderHeight = this.headerHeight - ev.scrollTop;

      if (this.newHeaderHeight < 0) {
        this.newHeaderHeight = 0;
      }

      this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');

      for (let headerElement of this.element.nativeElement.children) {

        let totalHeight = headerElement.offsetTop + headerElement.clientHeight;

        if (totalHeight > this.newHeaderHeight) {
          // headerElement.isHidden = true;
          this.renderer.setElementStyle(headerElement, 'opacity', '0');
        } else if (totalHeight <= this.newHeaderHeight && headerElement.isHidden) {
          // headerElement.isHidden = false;
          this.renderer.setElementStyle(headerElement, 'opacity', '1');
        }

      }

    });

  }

}
