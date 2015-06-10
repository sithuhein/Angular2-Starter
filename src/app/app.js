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
import { CustomersComponent } from 'app/components/customers/customers'


@Component({
  selector: 'customers-app',
  appInjector: [Router]
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
export class App {
  constructor(router:Router) {
    this.router = router;
    router.config([
        { "path": "/home", "component": CustomersComponent }
    ]);
  }
}


bootstrap(App, [routerInjectables,
  bind(PipeRegistry).toValue(new PipeRegistry(pipes))
]);