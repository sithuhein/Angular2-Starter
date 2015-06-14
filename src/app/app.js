import { ComponentAnnotation as Component, ViewAnnotation as View, bootstrap } from 'angular2/angular2';
import { RouteConfig, RouterOutlet, Router, routerInjectables } from 'angular2/router';
import { BrowserLocation } from 'angular2/src/router/browser_location';
import { bind } from 'angular2/di';
import { PipeRegistry } from 'angular2/change_detection';
import { pipes } from 'app/components/pipes/pipes';
import { Customers } from 'app/components/customers/customers';
import { Orders } from 'app/components/orders/orders';

@Component({
  selector: 'app'
})
@View({
  directives: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
// @RouteConfig([
//   { path: '/',        as: 'customers',  component: Customers },
//   { path: '/orders',  as: 'orders',     component: Orders    }
// ])
export class App {
  constructor(router: Router, browserLocation: BrowserLocation) {
    this.router = router;
    router.config([
        { path: '/', as: 'customers', component: Customers },
        { path: '/orders', as: 'orders', component: Orders }
    ]);

    //Manual navigation for now
    let url = browserLocation.path();
    router.navigate('/customers');
  }
}

//Bootstrap App
bootstrap(App, [
  routerInjectables,
  bind(PipeRegistry).toValue(new PipeRegistry(pipes))
]);
