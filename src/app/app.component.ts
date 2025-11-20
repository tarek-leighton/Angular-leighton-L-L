import { Component, signal } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [MenuComponent, CartComponent],
})
export class AppComponent {
  cart = signal<{ name: string; price: number }[]>([]);

  addToCart(item: { name: string; price: number }) {
    this.cart.update((items) => [...items, item]);
  }
}
