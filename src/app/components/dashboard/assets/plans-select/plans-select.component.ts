import { Component, Input, OnInit } from '@angular/core';
import { PlansService } from 'src/app/services/plans.service';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import {
  PlanInterface,
  PlansResponseInterface,
} from 'src/app/types/plan.interface';

@Component({
  selector: 'app-plans-select',
  templateUrl: './plans-select.component.html',
  styleUrls: ['./plans-select.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PlansSelectComponent implements OnInit {
  isLoading: boolean = false;
  plansList$: PlanInterface[];

  @Output() onChange = new EventEmitter<number>();
  @Input() selected: number;

  constructor(private plansService: PlansService) {}

  ngOnInit(): void {
    this.getPlansList();
  }

  onSelectPlan(id: number): void {
    this.onChange.emit(id);
  }

  getPlansList(): void {
    this.plansService
      .getAll()
      .subscribe({
        next: (res: PlanInterface[]) => {
          console.log(res);

          this.plansList$ = res;
        },
        error: (err) => {
          console.log(err);
          // this.status.statusCode=0;
          // this.status.message="some error on server side";
        },
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
