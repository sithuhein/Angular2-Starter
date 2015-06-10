import {
  ComponentAnnotation as Component, 
  ViewAnnotation as View, 
  NgFor
} from 'angular2/angular2';

import { DataService } from 'app/components/services/dataService';

@Component({
  selector: 'customers',
  hostInjector: [DataService]
})
@View({
  templateUrl: 'app/components/customers/customers.html',
  directives: [NgFor]
})
export class CustomersComponent {
    constructor(dataService: DataService) {
      this.title = 'Customers';
      this.customers = dataService.getCustomers();  
    }
}

