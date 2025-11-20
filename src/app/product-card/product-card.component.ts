import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, MatCardModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: { name: string; price: number };
  @Output() add = new EventEmitter<void>();
}
