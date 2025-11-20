import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, MatTableModule],
  templateUrl: './cart.Component.html',
})
export class CartComponent {
  @Input() items: { name: string; price: number }[] = [];
  total() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}
