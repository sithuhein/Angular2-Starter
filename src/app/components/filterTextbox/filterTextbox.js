import { ComponentAnnotation as Component, ViewAnnotation as View } from 'angular2/angular2';
import { formDirectives } from 'angular2/forms';
import { EventEmitter } from 'angular2/src/facade/async';

@Component({
  selector: 'filter-textbox',
  events: ['changed']
})
@View({
  template: `
    <form>
      Filter: <input type="text" ng-control="filter" [(ng-model)]="model.filter" (keyup)="filterChanged($event)"  />
    </form>
  `,
  directives: [formDirectives]
})
export class FilterTextbox {

    constructor() {
      this.model = {
        filter: null
      };
      this.changed = new EventEmitter();
    }

    filterChanged(event) {
        event.preventDefault();
        this.changed.next(this.model.filter); // this fires an event
    }

}
