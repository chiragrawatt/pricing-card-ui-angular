import { Component, Input } from '@angular/core';

interface PriceCard {
  plan: string,
  price: number,
  features: Array<{
    feature: string,
    isEnabled: boolean
  }>
}

@Component({
  selector: 'price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  @Input() priceCard!: PriceCard;
}
