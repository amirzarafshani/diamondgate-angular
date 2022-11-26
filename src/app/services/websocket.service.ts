import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$ = webSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
  public messages$ = this.socket$.asObservable();

  sub = this.socket$.subscribe((msg) => {
    console.log(msg);
  });

  constructor() {}
}
