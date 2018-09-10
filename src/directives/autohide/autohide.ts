import { Directive, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the AutohideDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[autohide]', // Attribute selector
  host:{
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class AutohideDirective {

  headerheight;
  @Input("header") header: HTMLElement;
  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello AutohideDirective Directive');
  }

  ngOnInit(){
    this.headerheight = this.header.clientHeight;
    this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 700ms'); 
    
  }

  onContentScroll(event){
    console.log(event);
    if(event.scrollTop > 56){
      this.renderer.setElementStyle(this.header, 'top','-56px'); 

    }
    else{
      this.renderer.setElementStyle(this.header, 'top','0px'); 
    }
    
  }
}
