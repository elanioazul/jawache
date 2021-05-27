import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[jawacheTutorialCardHover]'
})
export class CardHoverDirective {

  @HostBinding('style.backgroundColor') private ishovering: string | undefined;

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
    const part = this.el.nativeElement.querySelector('.p-card-footer');
    this.renderer.setStyle(part, 'display', 'block');
    //this.hoverit();
    this.ishovering = 'green';
  }

  @HostListener('mouseout') onMouseOut() {
    const part = this.el.nativeElement.querySelector('.p-card-footer');
    this.renderer.setStyle(part, 'display', 'none');
    this.ishovering = 'yellow';
  }

  
}
