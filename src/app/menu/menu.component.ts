import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  private productService = inject(ProductService);
  @Output() addItem = new EventEmitter<{ name: string; price: number }>();
  menu = this.productService.menu;
}
