import { ComponentAnnotation as Component, ViewAnnotation as View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { DataService } from 'app/components/services/dataService';
import { FilterTextbox } from 'app/components/filterTextbox/filterTextbox';
import { Sorter } from 'app/utils/sorter';

@Component({
  selector: 'customers',
  hostInjector: [DataService]
})
@View({
  templateUrl: 'app/components/customers/customers.html',
  directives: [NgFor, RouterLink, FilterTextbox]
})
export class Customers {
  constructor(dataService: DataService) {
    this.title = 'Customers';
    this.filteredCustomers = this.customers = dataService.getCustomers();
    this.sorter = new Sorter();
  }

  filterChanged(data) {
    if (data) {
        data = data.toUpperCase();
        let props = ['firstName', 'lastName'];
        let filtered = this.customers.filter(item => {
            let match = false;
            for (let prop of props) {
                console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                if (item[prop].toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredCustomers = filtered;
    }
    else {
      this.filteredCustomers = this.customers;
    }
  }

  sort(key) {
      this.sorter.sort(this.filteredCustomers, key);
  }

}

