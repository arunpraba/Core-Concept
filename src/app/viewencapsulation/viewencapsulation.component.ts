import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewencapsulation',
  templateUrl: './viewencapsulation.component.html',
  styleUrls: ['./viewencapsulation.component.scss']
})
export class ViewencapsulationComponent implements OnInit {
  constructor() {}
  links = [
    { id: 1, path: 'one', name: 'Encapsulation One' },
    { id: 2, path: 'two', name: 'Encapsulation Two' },
    { id: 3, path: 'three', name: 'Encapsulation Three' }
  ];
  ngOnInit() {}
}
