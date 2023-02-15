import { Component, OnInit } from '@angular/core';

import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss'],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  ngOnInit(): void {
    this.donut = {
      id: 'y8z0As',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      description: 'For the pure chocoholic.',
    };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }
}
