import {
  ComponentAnnotation as Component, 
  ViewAnnotation as View, 
  InjectAnnotation as Inject,
  bootstrap
} from 'angular2/angular2';

import { 
  Router,
  RouterOutlet,
  routerInjectables
} from 'angular2/router';

import { bind } from 'angular2/di';
import { PipeRegistry } from 'angular2/change_detection';

import { pipes } from 'app/components/pipes/pipes';
import { CustomersComponent } from 'app/components/customers/customers';
import { OrdersComponent } from 'app/components/orders/orders';


@Component({
  selector: 'customers-app'
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
export class App {
  constructor(router:Router) {
    router.config([
        { path: '/',       as: 'customers', component: CustomersComponent },
        { path: '/orders', as: 'orders',    component: OrdersComponent }
    ]);
  }
}

//Bootstrap App
bootstrap(App, [routerInjectables,
  bind(PipeRegistry).toValue(new PipeRegistry(pipes))
]);