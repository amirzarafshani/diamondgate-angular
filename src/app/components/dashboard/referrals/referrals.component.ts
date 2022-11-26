import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferralsService } from 'src/app/services/referrals.service';
import { ReferralInterface } from 'src/app/types/referral.interface';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class ReferralsComponent implements OnInit {
  page: number = 1;
  page_size: number = 10;
  isSubmitting: boolean = false;
  total_items: number = 0;
  total_pages: number = 0;
  referralsList$: ReferralInterface[] = [];
  selectedReferral: ReferralInterface;

  constructor(private referralsService: ReferralsService) {}

  ngOnInit(): void {
    this.getReferralsList();
  }

  display: boolean = false;

  handleOpenDialog(referral: ReferralInterface) {
    this.selectedReferral = referral;
  }

  getReferralsList(): void {
    this.referralsService
      .getAll(this.page, this.page_size)
      .subscribe({
        next: (res: ReferralInterface[]) => {
          this.referralsList$ = res;
        },
        error: (err: any) => {
          console.log(err);
          // this.status.statusCode=0;
          // this.status.message="some error on server side";
        },
      })
      .add(() => {
        this.isSubmitting = false;
      });
  }

  getRowNumber(index: number): number {
    return index + 1 + (this.page - 1) * this.page_size;
  }

  onAddDeposit(): void {
    this.getReferralsList();
  }

  onAddRelease(): void {
    this.getReferralsList();
  }
}
