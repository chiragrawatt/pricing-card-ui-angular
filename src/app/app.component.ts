import { Component } from '@angular/core';

// interface PriceCard {
//   plan: string,
//   price: number,
//   features: Array<{
//     feature: string,
//     isEnabled: boolean
//   }>
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricing_cards';
  content = [
    {
      plan: "free",
      price: 0,
      features: [
        {
          feature: "Single User",
          isEnabled: true
        },
        {
          feature: "5GB Storage",
          isEnabled: true
        },
        {
          feature: "Community Access",
          isEnabled: true
        },
        {
          feature: "Unlimited Private Projects",
          isEnabled: false
        },
        {
          feature: "Free Subdomain",
          isEnabled: false
        },
        {
          feature: "Monthly Status Reports",
          isEnabled: false
        }
      ]
    },
    {
      plan: "plus",
      price: 9,
      features: [
        {
          feature: "5 Users",
          isEnabled: true
        },
        {
          feature: "50GB Storage",
          isEnabled: true
        },
        {
          feature: "Community Access",
          isEnabled: true
        },
        {
          feature: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          feature: "Free Subdomain",
          isEnabled: true
        },
        {
          feature: "Monthly Status Reports",
          isEnabled: false
        }
      ]
    },
    {
      plan: "pro",
      price: 49,
      features: [
        {
          feature: "Unlimited Users",
          isEnabled: true
        },
        {
          feature: "150GB Storage",
          isEnabled: true
        },
        {
          feature: "Community Access",
          isEnabled: true
        },
        {
          feature: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          feature: "Unlimited Free Subdomain",
          isEnabled: true
        },
        {
          feature: "Monthly Status Reports",
          isEnabled: true
        }
      ]
    }
  ]
}
