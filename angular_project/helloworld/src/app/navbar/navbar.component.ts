import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public shopCartNumber: any = 0;

  constructor() { }

  ngOnInit(): void {

    
    if (!JSON.parse(localStorage.getItem('cart') as string)) {
      this.shopCartNumber = 0
    }
    else {
      let nbr = 0;
      let cart = JSON.parse(localStorage.getItem('cart') as string)

      for (let i = 0; i < cart.length; i++) {
        nbr += cart[i].qte;
      }
      this.shopCartNumber = nbr
      
    }
   
  }

}

