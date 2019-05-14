import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[TextOnly]'
})
export class TextOnlyDirective {
  constructor(private el: ElementRef) {}
  @HostListener('input', ['$event'])
  onKeyDown(event) {
    const inputValue = this.el.nativeElement.value;
    this.el.nativeElement.value = inputValue.replace(/[^a-zA-Z]*/g, '');

    if (inputValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
