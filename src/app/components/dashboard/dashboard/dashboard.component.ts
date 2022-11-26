import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { assetsChartDataInterface } from 'src/app/types/asset.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = false;
  profileData$: any;
  assetsChartData: assetsChartDataInterface;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData(): void {
    this.profileService
      .getAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);

          this.profileData$ = res;
          this.assetsChartData = {
            labels: res.labels,
            penalty: res.penalty,
            profits: res.profits,
            amounts: res.amounts,
          };
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
