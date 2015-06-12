import { Pipe } from 'angular2/change_detection';

export class OrderByPipe extends Pipe {
  
  constructor() {
	  super();
    this._latestValue = null;
    this._latestProp = null;
  }
  
  onDestroy() { 
    this._latestValue = null; 
    this._latestProp = null;
  }
	
  supports(obj) {
    return true;
  }

  transform(value, propName, reverse) {
    if (this._latestValue !== value && this.latestProp !== propName) {
      this._latestValue = value;
      this._latestProp = propName;
  	  if (value && propName) {
  		  //sort by property
        value.sort(function(a, b) {
            return a.localeCompare(b);
        });
  	  }
  	  return value;  
    } else {
      return this._latestValue;
    } 
  }

  create() {
    return this;
  }
}