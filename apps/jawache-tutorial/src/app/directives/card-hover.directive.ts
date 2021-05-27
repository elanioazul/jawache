import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[jawacheTutorialCardHover]'
})
export class CardHoverDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
    ) {}

  private hoverit(color?: string) {
    //this.renderer.removeClass(this.el.nativeElement, 'p-button-warning'),
    const part = this.el.nativeElement.querySelector('.p-button-warning');
    this.renderer.removeClass(part, 'p-button-warning')
    this.renderer.addClass(part, 'p-button-help');
  }

  @HostListener('mouseover') onMouseHover() {
  this.hoverit();
  }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  
}
