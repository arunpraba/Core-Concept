import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardDirective } from './custom-directives/credit-card.directive';
import { NumberOnlyDirective } from './custom-directives/number-only.directive';
import { TextOnlyDirective } from './custom-directives/text-only.directive';

@NgModule({
  declarations: [CreditCardDirective, NumberOnlyDirective, TextOnlyDirective],
  imports: [CommonModule],
  exports: [CreditCardDirective, NumberOnlyDirective, TextOnlyDirective]
})
export class SharedModule {}
