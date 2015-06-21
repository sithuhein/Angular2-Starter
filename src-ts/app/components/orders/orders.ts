import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { DataService } from 'app/services/dataService';

@Component({
  selector: 'orders',
  hostInjector: [DataService]
})
@View({
  templateUrl: 'app/components/orders/orders.html',
  directives: [NgFor, RouterLink]
})

export class Orders {

    title: string;

    constructor(dataService: DataService) {
      this.title = 'Orders';
    }

}
