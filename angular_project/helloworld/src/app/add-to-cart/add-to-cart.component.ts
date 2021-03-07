import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

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


  public products: any[] = []

  constructor() { }

  ngOnInit(): void {

    if (!JSON.parse(localStorage.getItem('cart') as string)) {
      this.products = []
    }
    else {

      let cart = JSON.parse(localStorage.getItem('cart') as string)

      for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < this.dabchy.length; j++) {
          if (cart[i].id == this.dabchy[j].id) {
            this.products.push(cart[i])
          }
        }
      }


    }







  }

  total(): any {
    if (!JSON.parse(localStorage.getItem('cart') as string)) {
      return 0;
    }
    else {
      let som = 0;

      let cart = JSON.parse(localStorage.getItem('cart') as string)

      for (let i = 0; i < cart.length; i++) {
        som += cart[i].price * cart[i].qte;
      }

      return som;

    }
  }

  Subtotal(product: any) {

    let cart = JSON.parse(localStorage.getItem('cart') as string)
    let som = 0;



    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == product.id) { 
      som += cart[i].price * cart[i].qte;
      }
    }

    return som;


  }

  allQte(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') as any);

    let som = 0;



    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == product.id) {
        som += cart[i].qte;
      }

    }

    return som;


  }


  delete(product: any) {

    let cart = JSON.parse(localStorage.getItem('cart') as any);


    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == product.id) {



        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
        
        localStorage.removeItem('cart')

        break
      }
    }



  }


  
  add(product: any) {
    
    let cart  = JSON.parse(localStorage.getItem('cart')as any);
    let trouve: boolean = false
    let indice = -1
  
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == product.id) {
        trouve = true
        indice = i
        break
      }
    }
  
    if (trouve) {
      cart[indice].qte++
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
}
