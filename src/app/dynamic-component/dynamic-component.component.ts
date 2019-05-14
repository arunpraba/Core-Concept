import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  ComponentRef
} from '@angular/core';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit, AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  loadInputComponent: ComponentRef<InputComponent>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}
  ngAfterContentInit() {
    const dynamicInput = this.resolver.resolveComponentFactory(InputComponent);

    this.entry.createComponent(dynamicInput);

    // Creating Dynamic component
    this.loadInputComponent = this.entry.createComponent(dynamicInput, 0);

    // Passing Dynamic Input to child
    this.loadInputComponent.instance.title = 'Dynamic Input Component';
    this.loadInputComponent.instance.message = 'Input from Parent Component';
    this.loadInputComponent.instance.lists = [
      { id: 1, name: 'Kyle' },
      { id: 2, name: 'Scot' },
      { id: 3, name: 'Tom' },
      { id: 4, name: 'Will' },
      { id: 5, name: 'Berg' },
      { id: 6, name: 'Lucy' }
    ];

    // Taking the dynamic output
    this.loadInputComponent.instance.selectedValue.subscribe(
      this.handleSelectedValue
    );
  }

  // Handling Dynamic Ouput
  handleSelectedValue(id: any) {
    console.log(id);
  }

  // Destroy Dynamic Component
  destroyComponent() {
    this.loadInputComponent.destroy();
  }

  // Move the Component
  moveComponent() {
    this.entry.move(this.loadInputComponent.hostView, 1);
  }
}
