import { Directive, ElementRef } from 'angular2/angular2';
import { EventEmitter } from 'angular2/src/facade/async';

@Directive({
  selector: '[sort-by]',
  events: ['sorted']
})
export class SortBy {

    sortProperty: string;
    sorted: EventEmitter;

    constructor(el: ElementRef) {
      this.sortProperty = el.getAttribute('sort-by');
      el.domElement.addEventListener('click', (event) => this.elementClicked(event));
      this.sorted = new EventEmitter();
    }

    elementClicked(event) {
        event.preventDefault();
        this.sorted.next(this.sortProperty); //Raise clicked event
    }

}
