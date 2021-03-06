import { Component, OnInit } from '@angular/core';

declare var cartNumbers: any;
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

  addToCart(dbach: any) {

    let cart: any[] = []

    if (!JSON.parse(localStorage.getItem('cart') as string)) {
      let product = { id: dbach.id, name: dbach.name, price: dbach.price, image : dbach.image , qte: 1  }
      cart.push(product)
    }
    else {
      cart = JSON.parse(localStorage.getItem('cart') as string)

      let trouve: boolean = false
      let indice = -1

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == dbach.id) {
          trouve = true
          indice = i
          break
        }
      }

      if (trouve) {
        cart[indice].qte++
      }
      else {
        let product = { id: dbach.id, name: dbach.name, price: dbach.price, image : dbach.image  , qte: 1 }
        cart.push(product)
      }

    }

    localStorage.setItem('cart', JSON.stringify(cart))


  }

}
