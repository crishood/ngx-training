import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LicensePlate, LicensePlateId} from './license-plate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartContents(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>('http://localhost:8000/cart');
  }

  addToCart(plate: LicensePlate): Observable<unknown> {
    return this.http.put('http://localhost:8000/cart/' + plate._id, null);
  }

  addToCartById(plateId: LicensePlateId): Observable<unknown> {
    return this.http.put('http://localhost:8000/cart/' + plateId, null);
  }

  removeFromCart(plate: LicensePlate): Observable<unknown> {
    return this.http.delete('http://localhost:8000/cart/' + plate._id);
  }

}
