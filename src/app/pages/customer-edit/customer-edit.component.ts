import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  id: number = -1;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const getId = this.route.snapshot.paramMap.get('id');
    if (getId) this.id = parseInt(getId);
  }
}
