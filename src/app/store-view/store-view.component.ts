import {Component, inject} from '@angular/core';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import { HttpClient } from '@angular/common/http';
import {LicensePlate} from '../license-plate';
import {LicensePlateComponent} from '../license-plate/license-plate.component';
import {CartService} from '../cart.service';
import {DialogComponent} from '../dialog/dialog.component';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-store-view',
  imports: [JumbotronComponent, LicensePlateComponent, DialogComponent],
    templateUrl: './store-view.component.html',
    styleUrl: './store-view.component.css'
})
export class StoreViewComponent {

  http = inject(HttpClient);
  cartService = inject(CartService);
  plates = toSignal(this.http.get<LicensePlate[]>("https://lp-store-server.vercel.app/data"));
  // httpResource("https://lp-store-server.vercel.app/data")  experimental

  showDialog = false;

  addToCart(license: LicensePlate) {
    this.cartService.addToCart(license).subscribe(() => this.showDialog = true);
  }

}
