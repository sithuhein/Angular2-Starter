import { Component, View, onChange } from 'angular2/angular2';
import { formDirectives } from 'angular2/forms';
import { EventEmitter } from 'angular2/src/facade/async';

interface IModel {
   filter: string;
}

@Component({
  selector: 'filter-textbox',
  events: ['changed'],
  properties: {labelText: 'labelText'},
  lifecycle: [onChange]
})
@View({
  template: `
    <form>
         Filter:
         <input type="text" ng-control="filter"
                [(ng-model)]="model.filter" (keyup)="filterChanged($event)"  />
    </form>
  `,
  directives: [formDirectives]
})
export class FilterTextbox {

    model: IModel;
    changed: EventEmitter;

    constructor() {
      this.model = {
        filter: null
      };
      this.changed = new EventEmitter();
    }

    filterChanged(event) {
        event.preventDefault();
        this.changed.next(this.model.filter); //Raise changed event
    }

    onChange(changes) {
      //alert(changes);
    }

}
