import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  peopleList = [
    {
      id: 1,
      name: "MedAmine",
      username: "ghozzi",
      phone: "00 22 798 101",
    },
    {
      id: 2,
      name: "Ayoub",
      username: "ghozzi",
      phone: "00 22 798 101",
    },
    {
      id: 3,
      name: "yosr",
      username: "ghozzi",
      phone: "00 22 798 101",
    },


  ]


  constructor() { }

  ngOnInit(): void {
  }

  delete(person:any) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1);
  }

}
