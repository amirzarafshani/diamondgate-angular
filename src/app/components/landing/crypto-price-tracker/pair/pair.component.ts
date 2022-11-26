import { OnChanges, Component, Input } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { CoinData } from '../crypto-price-tracker.component';

@Component({
  selector: 'app-pair',
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.scss'],
})
export class PairComponent implements OnChanges {
  @Input() coinInfo: CoinData;
  @Input() index: number;

  constructor() {}

  ngOnChanges() {
    console.log(this.index);
  }

  getClasses(i: number) {
    return `bg-wave-${this.index + 1}`;
  }
}
