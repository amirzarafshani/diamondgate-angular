import { Component, OnInit, SimpleChanges } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ReleasesService } from 'src/app/services/releases.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { PlansSelectComponent } from '../../assets/plans-select/plans-select.component';
import { Input, Output, EventEmitter } from '@angular/core';
import { AssetInterface } from 'src/app/types/asset.interface';

@Component({
  selector: 'app-release-dialog',
  templateUrl: './release-dialog.component.html',
  styleUrls: ['./release-dialog.component.scss'],
  standalone: true,
  imports: [
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PlansSelectComponent,
  ],
})
export class ReleaseDialogComponent implements OnInit {
  DEPOSIT_WALLET_ADDRESS = environment.DEPOSIT_WALLET_ADDRESS;
  form: FormGroup;
  isSubmitting: boolean = false;
  display: boolean = false;

  @Input() selectedAsset: AssetInterface;
  @Output() onAddRelease = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private releasesService: ReleasesService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedAsset?.id) {
      this.form.patchValue({
        asset_id: this.selectedAsset.id,
      });
      this.display = true;
    } else {
      this.display = false;
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      address: ['', Validators.required],
      asset_id: ['', Validators.required],
    });
  }

  showDialog() {
    this.display = true;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isSubmitting = true;
      this.releasesService
        .add(this.form.value)
        .subscribe({
          next: (res: any) => {
            this.display = false;
            this.onAddRelease.emit();
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
