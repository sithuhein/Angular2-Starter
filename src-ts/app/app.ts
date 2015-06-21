/// <references path="../node_modules/angular2/angular2.d.ts" />
/// <references path="../node_modules/angular2/http.d.ts" />
/// <references path="../node_modules/angular2/router.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';
import { RouteConfig, RouterOutlet, Router, routerInjectables } from 'angular2/router';
import { BrowserLocation } from 'angular2/src/router/browser_location';
import { bind } from 'angular2/di';
import { PipeRegistry } from 'angular2/change_detection';
import { pipes } from 'app/components/pipes/pipes';
import { Customers } from 'app/components/customers/customers';
import { Orders } from 'app/components/orders/orders';
import { httpInjectables } from 'angular2/http';

@Component({
  selector: 'app'
})
@View({
  directives: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  { path: '/',  redirectTo: '/customers' },
  { path: '/customers', as: 'customers',  component: Customers },
  { path: '/orders',    as: 'orders',     component: Orders    }
])

export class App {
  constructor(private router: Router, private browserLocation: BrowserLocation) {
    this.router = router;

    //Manual navigation for now
    let url = this.browserLocation.path();
    router.navigate(url);
  }
}

//Bootstrap App
bootstrap(App, [
    httpInjectables,
    routerInjectables,
    //Hook custom pipe into the PipeRegistry
    bind(PipeRegistry).toValue(new PipeRegistry(pipes))
]);
