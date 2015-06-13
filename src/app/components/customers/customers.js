import { ComponentAnnotation as Component, ViewAnnotation as View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { DataService } from 'app/components/services/dataService';

@Component({
  selector: 'customers',
  hostInjector: [DataService]
})
@View({
  templateUrl: 'app/components/customers/customers.html',
  directives: [NgFor, RouterLink]
})
export class Customers {
  constructor(dataService: DataService) {
    this.title = 'Customers';
    this.customers = dataService.getCustomers();
  }
}

