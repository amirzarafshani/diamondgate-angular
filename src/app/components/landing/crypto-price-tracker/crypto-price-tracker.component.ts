import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

export interface CoinData {
  symbol: string;
  name: string;
  price: string | null;
  increased: boolean | null;
}

export interface SocketData {
  key: string;
  value: string;
}

@Component({
  selector: 'app-crypto-price-tracker',
  templateUrl: './crypto-price-tracker.component.html',
  styleUrls: ['./crypto-price-tracker.component.scss'],
})
export class CryptoPriceTrackerComponent implements OnInit, OnDestroy {
  coinsList: CoinData[] = [
    { name: 'bitcoin', symbol: 'btc', price: '0', increased: null },
    { name: 'ethereum', symbol: 'eth', price: '0', increased: null },
    { name: 'binance-coin', symbol: 'bnb', price: '0', increased: null },
    { name: 'dogecoin', symbol: 'doge', price: '0.059506', increased: null },
  ];

  private socket$ = webSocket(
    `wss://ws.coincap.io/prices?assets=${this.coinsList
      .map((e) => e.name)
      .flat()}`
  );

  public messages$ = this.socket$.asObservable();

  constructor() {}

  ngOnInit(): void {
    this.socket$.subscribe((coinPriceObj: SocketData | any) => {
      Object.keys(coinPriceObj).forEach((key) => {
        let coinInfo = this.coinsList.find((e) => e.name === key);
        if (coinInfo) {
          if (coinInfo.price && coinInfo.price !== '0') {
            if (parseFloat(coinInfo.price) < parseFloat(coinPriceObj[key])) {
              coinInfo.increased = true;
            } else if (
              parseFloat(coinInfo.price) > parseFloat(coinPriceObj[key])
            ) {
              coinInfo.increased = false;
            } else {
              coinInfo.increased = null;
            }
          }

          coinInfo.price = coinPriceObj[key];
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.socket$.unsubscribe();
  }

  public toFloat(value: string): number {
    return parseFloat(value);
  }
}
