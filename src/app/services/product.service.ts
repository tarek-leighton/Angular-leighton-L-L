import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({ providedIn: 'root' })
export class ProductService {
  private menuUrl = 'assets/data/menu.json';
  menu = toSignal(
    this.http.get<{ name: string; price: number }[]>(this.menuUrl),
    { initialValue: [] }
  );
  constructor(private http: HttpClient) {}
}
