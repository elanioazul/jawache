import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[jawacheTutorialCardHover]'
})
export class CardHoverDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
    ) {}

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor ', color)
  }

  @HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  
}
