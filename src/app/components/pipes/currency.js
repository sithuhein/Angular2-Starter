import { Pipe } from 'angular2/change_detection';

export class CurrencyPipe extends Pipe {
  
  constructor() {
	  super();
    this._latestValue = null;
  }
  
  onDestroy() { this._latestValue = null; }
	
  supports(obj) {
    return true;
  }

  transform(value) {
    if (this._latestValue !== value) {
      this._latestValue = value;
  	  if (value && !isNaN(value)) {
        this._latestValue = '$' + parseFloat(value).toFixed(2);
  		  return this._latestValue;
  	  }
  	  return '$0.00';   
    } else {
      return this._latestValue;
    } 
  }

  create() {
    return this;
  }
}
