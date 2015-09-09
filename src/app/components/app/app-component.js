import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { CustomersComponent } from '/app/components/customers/customers-component';
import { OrdersComponent } from 'app/components/orders/orders-component';
import { DataService } from 'app/services/data-service';

@Component({ selector: 'app' })
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/',              as: 'customers',  component: CustomersComponent },
  { path: '/orders/:id',    as: 'orders',     component: OrdersComponent    }
])
export class AppComponent {

}
