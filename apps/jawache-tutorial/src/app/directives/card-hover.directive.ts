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
    this.renderer.removeClass(this.el.nativeElement, 'p-button-warning'),
    this.renderer.addClass(this.el.nativeElement, 'p-button-help');
  }

  @HostListener('mouseover') onMouseHover() {
  this.hoverit();
  }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  
}
