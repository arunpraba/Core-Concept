import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  data = []
  constructor() { }

  ngOnInit() {
    this.data = [
      { id: '1', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', title: 'Blog 1', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit ea ad cum fugiat repudiandae sequi! Illo distinctio pariatur quas, repellendus facere possimus, eligendi iusto, doloribus debitis mollitia molestiae ducimus?' },
      { id: '2', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', title: 'Blog 2', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit ea ad cum fugiat repudiandae sequi! Illo distinctio pariatur quas, repellendus facere possimus, eligendi iusto, doloribus debitis mollitia molestiae ducimus?' },
      { id: '3', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', title: 'Blog 3', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit ea ad cum fugiat repudiandae sequi! Illo distinctio pariatur quas, repellendus facere possimus, eligendi iusto, doloribus debitis mollitia molestiae ducimus?' },
      { id: '4', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', title: 'Blog 4', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit ea ad cum fugiat repudiandae sequi! Illo distinctio pariatur quas, repellendus facere possimus, eligendi iusto, doloribus debitis mollitia molestiae ducimus?' },
      { id: '5', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', title: 'Blog 5', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit ea ad cum fugiat repudiandae sequi! Illo distinctio pariatur quas, repellendus facere possimus, eligendi iusto, doloribus debitis mollitia molestiae ducimus?' },
    ]
  }


}
