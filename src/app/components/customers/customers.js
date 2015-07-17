import { ComponentAnnotation as Component, ViewAnnotation as View, NgFor } from 'angular2/angular2';
import { ObservableWrapper } from 'angular2/src/facade/async';
import { DataService } from 'app/services/dataService';
import { FilterTextbox } from 'app/components/filterTextbox/filterTextbox';
import { Sorter } from 'app/utils/sorter';
import { SortBy } from 'app/components/sortBy/sortBy';

@Component({
  selector: 'customers',
  hostInjector: [DataService]
})
@View({
  templateUrl: 'app/components/customers/customers.html',
  directives: [NgFor, FilterTextbox, SortBy]
})

export class Customers {
  
  constructor(dataService: DataService) {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.listDisplayModeEnabled = false;
    this.displayModeEnum = {
      Card: 0,
      List: 1
    };
    this.customers = this.filteredCustomers = [];
    
    ObservableWrapper.subscribe(dataService.getCustomers(), res => {
        this.customers = this.filteredCustomers = res.json();
    });
    
    this.sorter = new Sorter();
  }

  changeDisplayMode = function (displayMode) {
      switch (displayMode) {
          case this.displayModeEnum.Card:
              this.listDisplayModeEnabled = false;
              break;
          case this.displayModeEnum.List:
              this.listDisplayModeEnabled = true;
              break;
      }
  };

  filterChanged(data) {
    if (data) {
        data = data.toUpperCase();
        let props = ['firstName', 'lastName', 'address', 'city', 'orderTotal'];
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
  
  deleteCustomer(id) {
    
  }

  sort(prop) {
      this.sorter.sort(this.filteredCustomers, prop);
  }

}

