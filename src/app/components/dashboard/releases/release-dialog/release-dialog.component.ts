import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';
import { ReleaseInterface } from 'src/app/types/release.interface';

@Component({
  selector: 'app-release-dialog',
  templateUrl: './release-dialog.component.html',
  styleUrls: ['./release-dialog.component.scss'],
  standalone: true,
  imports: [DialogModule, CommonModule],
})
export class ReleaseDialogComponent implements OnInit {
  display: boolean = false;

  @Input() selectedRelease: ReleaseInterface;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedRelease?.id) {
      this.display = true;
    } else {
      this.display = false;
    }
  }

  ngOnInit(): void {}
}
