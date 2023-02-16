import { Component, OnInit } from '@angular/core';

import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss'],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService
      .readOne('lj6Uuy8')
      .subscribe((donut: Donut) => (this.donut = donut));
  }

  onCreate(donut: Donut) {
    this.donutService
      .create(donut)
      .subscribe(() => console.log('Created successfully!'));
  }

  onUpdate(donut: Donut) {
    this.donutService
      .update(donut)
      .subscribe({
        next: () => console.log('Updated successfully!'),
        error: (err) => console.log('onUpdate error:', err),
      });
  }

  onDelete(donut: Donut) {
    this.donutService
      .delete(donut)
      .subscribe(() => console.log('Deleted successfully!'));
  }
}
