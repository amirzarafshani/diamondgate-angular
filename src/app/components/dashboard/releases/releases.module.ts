import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleasesRoutingModule } from './releases-routing.module';
import { ReleasesComponent } from './releases.component';
import { ReleaseTableRowComponent } from './release-table-row/release-table-row.component';
import { ReleaseDialogComponent } from './release-dialog/release-dialog.component';

@NgModule({
  declarations: [ReleasesComponent, ReleaseTableRowComponent],
  imports: [CommonModule, ReleasesRoutingModule, ReleaseDialogComponent],
})
export class ReleasesModule {}
