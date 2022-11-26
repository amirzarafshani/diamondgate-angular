import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DepositService } from 'src/app/services/deposit.service';
import { DepositPostResponseInterface } from 'src/app/types/deposit.interface';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { PlansSelectComponent } from '../../assets/plans-select/plans-select.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deposit-dialog',
  templateUrl: './deposit-dialog.component.html',
  styleUrls: ['./deposit-dialog.component.scss'],
  standalone: true,
  imports: [
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PlansSelectComponent,
  ],
})
export class DepositDialogComponent implements OnInit {
  DEPOSIT_WALLET_ADDRESS = environment.DEPOSIT_WALLET_ADDRESS;
  form: FormGroup;
  isSubmitting: boolean = false;
  display: boolean = false;

  @Output() onAddDeposit = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private depositService: DepositService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      transaction_id: ['', Validators.required],
      image: ['', Validators.required],
      plan_id: ['', Validators.required],
    });
  }

  showDialog() {
    this.display = true;
  }

  onFileChange(event: any) {
    // let files: any = e.target.files[0] ? e.target.files[0] : [];
    // console.log(e);

    // if (files?.length > 0) {
    //   const file = files[0];
    //   this.form.patchValue({
    //     image: file,
    //   });
    // }
    if (event.target.files && event.target.files.length) {
      this.form.patchValue({
        image: event.target.files[0],
      });
    }
  }

  onPlanChange(id: number): void {
    this.form.patchValue({
      plan_id: id,
    });
  }

  onSubmit(): void {
    console.log(this.form.value);

    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isSubmitting = true;

      var formData: any = new FormData();
      formData.append('amount', this.form.value.amount);
      formData.append('action', 'deposit');
      formData.append('transaction_id', this.form.value.transaction_id);
      formData.append('plan_id', this.form.value.plan_id);
      formData.append('image', this.form.value.image);

      this.depositService
        .add(formData)
        .subscribe({
          next: (res: DepositPostResponseInterface) => {
            this.display = false;
            // this.onAddDeposit.emit();
          },
          error: (err) => {
            console.log(err);
            // this.status.statusCode=0;
            // this.status.message="some error on server side";
          },
        })
        .add(() => {
          this.isSubmitting = false;
        });
    }
  }
}
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
