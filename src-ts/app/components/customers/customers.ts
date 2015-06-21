import { Component, View, NgFor } from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import { DataService } from 'app/services/dataService';
import { FilterTextbox } from 'app/components/filterTextbox/filterTextbox';
import { Sorter } from 'app/utils/sorter';
import { SortBy } from 'app/components/sortBy/sortBy';

interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    orderTotal: number;
}

@Component({
  selector: 'customers',
  hostInjector: [DataService]
})
@View({
  templateUrl: 'app/components/customers/customers.html',
  directives: [NgFor, RouterLink, FilterTextbox, SortBy]
})

export class Customers {

  title: string;
  customers: Array<ICustomer>;
  sorter: Sorter;
  filteredCustomers: any[];

  constructor(private router: Router, dataService: DataService) {
    this.title = 'Customers';
    this.customers = this.filteredCustomers = [];
    this.sorter = new Sorter();

    dataService.getCustomers().map(res => res.json()).subscribe(custs => {
        this.customers = this.filteredCustomers = custs;
    });
  }

  filterChanged(data: string) {
    if (data) {
        data = data.toUpperCase();
        let props = ['firstName', 'lastName', 'address', 'orderTotal'];
        let filtered = this.customers.filter(item => {
            let match = false;
            for (let prop of props) {
                //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
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

  sort(prop) {
      this.sorter.sort(this.filteredCustomers, prop);
  }

}

