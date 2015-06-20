import { ComponentAnnotation as Component } from 'angular2/angular2';
import { Http } from 'angular2/http';

export class DataService {

    constructor(private http: Http) {

    }

    getCustomers() {
        return this.http.get('customers.json');
    }

}

