import { Pipe } from 'angular2/change_detection';

export class CurrencyPipe extends Pipe {

  supports(obj: number) {
      return true;
  }

  transform(value: number) {
      if (value && !isNaN(value)) {
          return '$' + parseFloat(value).toFixed(2);
      }
      return '$0.00';
  }

  create() {
      return this;
  }
}