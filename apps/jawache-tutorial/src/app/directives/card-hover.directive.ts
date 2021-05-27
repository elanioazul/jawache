import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[jawacheTutorialCardHover]'
})
export class CardHoverDirective {

  private ishovering: boolean | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
    ) {}

  private hoverit(color?: string) {
    //this.renderer.removeClass(this.el.nativeElement, 'p-button-warning'),
    const part = this.el.nativeElement.querySelector('.p-button-warning');
    this.renderer.removeClass(part, 'p-button-warning')
    this.renderer.addClass(part, 'p-button-help');
    this.ishovering = true;
  }

  @HostListener('mouseover') onMouseHover() {
    const part = this.el.nativeElement.querySelector('.p-card-footer');
    this.renderer.setStyle(part, 'display', 'block');
    this.hoverit();
  }

  @HostListener('mouseout') onMouseOut() {
    const part = this.el.nativeElement.querySelector('.p-card-footer');
    this.renderer.setStyle(part, 'display', 'none');
    this.ishovering = false;
  }

  
}
