import { ComponentAnnotation as Component, ViewAnnotation as View, 
         bootstrap, bind, BrowserLocation } from 'angular2/angular2';
import { RouteConfig, RouterOutlet, Router } from 'angular2/router';
import { routerInjectables, LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';
import { httpInjectables } from 'angular2/http';
//import { PipeRegistry } from 'angular2/change_detection';
//import { pipes } from 'app/components/pipes/pipes';
import { Customers } from 'app/components/customers/customers';
import { Orders } from 'app/components/orders/orders';

@Component({
  selector: 'app'
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
@RouteConfig([
  //{ path: '/',  redirectTo: '/customers' },
  { path: '/',              as: 'customers',  component: Customers },
  { path: '/orders/:id',    as: 'orders',     component: Orders    }
])
export class App {
  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;

    //Manual navigation for now
    //let url = browserLocation.path();
    //router.navigate(url);
  }
}

//Bootstrap App
bootstrap(App, [
    httpInjectables,
    routerInjectables,
    bind(LocationStrategy).toClass(HashLocationStrategy)
    //Hook custom pipe into the PipeRegistry
    //bind(PipeRegistry).toValue(new PipeRegistry(pipes))
]);
