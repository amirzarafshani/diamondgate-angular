import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { AssetTableRowComponent } from './asset-table-row/asset-table-row.component';
import { DialogModule } from 'primeng/dialog';
import { DepositDialogComponent } from './deposit-dialog/deposit-dialog.component';
import { ReleaseDialogComponent } from './release-dialog/release-dialog.component';

@NgModule({
  declarations: [AssetsComponent, AssetTableRowComponent],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    DialogModule,
    DepositDialogComponent,
    ReleaseDialogComponent,
  ],
})
export class AssetsModule {}
