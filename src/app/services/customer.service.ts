import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers: Customer[] = [];

  constructor() {
    let customer: Customer = {
      id: 1,
      name: 'Julio',
      email: 'jcss.silvestre@gmail.com',
      dafeOfBirth: new Date('1994-04-14'),
    };
    this.customers.push(customer);

    let customer2: Customer = {
      id: 2,
      name: 'Pedro',
      email: 'pedro.silvestre@gmail.com',
      dafeOfBirth: new Date('1998-04-14'),
    };
    this.customers.push(customer2);
  }

  getList(): Customer[] {
    return this.customers;
  }
}
