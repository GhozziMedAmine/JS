import { Component, OnInit } from '@angular/core';

declare var ExternalJSFileFunction:any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dabchy = [
    {
      id: 1,
      category: "jeans",
      name: "Ripped jeans",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
      size: "XL",
      color: "blue",
      price: 20.99
    },
    {
      id: 2,
      category: "jeans",
      name: "Boyfriend jeans",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
      size: "S",
      color: "blue",
      price: 24.99
    },
    {
      id: 3,
      category: "shirts",
      name: "Ripped sweatshirt",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
      size: "XL",
      color: "white",
      price: 29.99
    },
    {
      id: 4,
      category: "jackets",
      name: "Denim Jacket",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      size: "M",
      color: "grey",
      price: 40.99
    },
    {
      id: 5,
      category: "shirts",
      name: "Longsleeve",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
      size: "L",
      color: "black",
      price: 120.99
    },
    {
      id: 6,
      category: "jeans",
      name: "Ripped jeans",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
      size: "XL",
      color: "blue",
      price: 20.99
    },
    {
      id: 7,
      category: "jeans",
      name: "Boyfriend jeans",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
      size: "S",
      color: "blue",
      price: 24.99
    },
    {
      id: 8,
      category: "shirts",
      name: "Ripped sweatshirt",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
      size: "XL",
      color: "white",
      price: 29.99
    },
    {
      id: 9,
      category: "jackets",
      name: "Denim Jacket",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      size: "M",
      color: "grey",
      price: 40.99
    },
    {
      id: 10,
      category: "shirts",
      name: "Longsleeve",
      image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
      size: "L",
      color: "black",
      price: 120.99
    }


  ]

  constructor() { }

  ngOnInit(): void {
  }
  CallExternalJSFileFunction(){
    ExternalJSFileFunction()
  }


/*
  affiche(){
    let carts = document.querySelectorAll('.add-cart');

    for(let i=0; i < carts.length; i++)
    {
      carts[i].addEventListener('click',() => {
        
        console.log("add to dabchy cart ") ;
        
      
      })
      
      
    }

  }
*/ 
}
