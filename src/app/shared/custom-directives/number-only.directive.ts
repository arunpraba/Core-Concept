import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[NumberOnly]'
})
export class NumberOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onkeydown(event: KeyboardEvent) {
    const inputValue = this.el.nativeElement.value;
    this.el.nativeElement.value = inputValue.replace(/[^0-9]*/g, '');

    if (inputValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
