import { Component } from '@angular/core';
import { ProductService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  template:`
  <div>
  <nav class='navbar navbar-dafault'>
      <div class='container-fluid'>
          <a class='navbar-brand'> {{pageTitle}}</a>
          <ul class='nav navrbar-nav'>
              <li><a [routerLink]="['/welcome']">Home</a></li>
              <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
      </div>
  </nav>
  <div class='container'>
    <router-outlet> </router-outlet>
  </div>
</div>`,
  //styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  pageTitle:string = 'Acme Product Management';
}
