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
  selector: 'price-card-holder',
  templateUrl: './price-card-holder.component.html',
  styleUrls: ['./price-card-holder.component.css']
})
export class PriceCardHolderComponent {
  @Input() priceCards : Array<PriceCard> = [];
}
