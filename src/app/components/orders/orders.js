import { ComponentAnnotation as Component, ViewAnnotation as View } from 'angular2/angular2';
import { DataService } from 'app/components/services/dataService';

@Component({
  selector: 'orders',
  hostInjector: [DataService]
})
@View({
  templateUrl: 'app/components/orders/orders.html'
})
export class Orders {
    constructor(dataService: DataService) {
      this.title = 'Orders';
      //this.orders = dataService.getOrders();  
    }
}