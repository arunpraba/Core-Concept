import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[CreditCard]'
})
export class CreditCardDirective {
  constructor() {}
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value;

    // RegEx to remove White Space
    trimmed = trimmed.replace(/[^0-9]*/g, '');

    if (trimmed != input.value) {
      event.stopPropagation();
    }

    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4)); // ['1234, '1234',]
    }

    input.value = numbers.join(' ');
  }
}
