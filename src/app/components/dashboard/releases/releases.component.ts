import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReleasesService } from 'src/app/services/releases.service';
import {
  ReleaseInterface,
  ReleasesResponseInterface,
} from 'src/app/types/release.interface';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReleasesComponent implements OnInit {
  page: number = 1;
  page_size: number = 10;
  isSubmitting: boolean = false;
  total_items: number = 0;
  total_pages: number = 0;
  releasesList$: ReleaseInterface[] = [];
  selectedRelease: ReleaseInterface;

  constructor(private releasesService: ReleasesService) {}

  ngOnInit(): void {
    this.getReleasesList();
  }

  display: boolean = false;

  handleOpenDialog(release: ReleaseInterface) {
    this.selectedRelease = release;
  }

  getReleasesList(): void {
    this.releasesService
      .getAll(this.page, this.page_size)
      .subscribe({
        next: (res: ReleasesResponseInterface) => {
          this.releasesList$ = res.items;
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
}
