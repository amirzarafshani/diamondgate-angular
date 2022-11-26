import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetsService } from 'src/app/services/assets.service';
import {
  AssetInterface,
  AssetsResponseInterface,
} from 'src/app/types/asset.interface';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AssetsComponent implements OnInit {
  page: number = 1;
  page_size: number = 10;
  isSubmitting: boolean = false;
  total_items: number = 0;
  total_pages: number = 0;
  assetsList$: AssetInterface[] = [];
  selectedAsset: AssetInterface;

  constructor(private assetsService: AssetsService) {}

  ngOnInit(): void {
    this.getAssetsList();
  }

  display: boolean = false;

  handleOpenDialog(asset: AssetInterface) {
    this.selectedAsset = asset;
  }

  getAssetsList(): void {
    this.assetsService
      .getAll(this.page, this.page_size)
      .subscribe({
        next: (res: AssetsResponseInterface) => {
          this.assetsList$ = res.items;
          this.total_items = res.total_items;
          this.total_pages = res.total_pages;
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

  getRowNumber(index: number): number {
    return index + 1 + (this.page - 1) * this.page_size;
  }

  onAddDeposit(): void {
    this.getAssetsList();
  }

  onAddRelease(): void {
    this.getAssetsList();
  }
}
