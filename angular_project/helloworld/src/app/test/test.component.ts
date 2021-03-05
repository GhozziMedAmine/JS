import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name="Dabchouch";
  image="./../../assets/icone.png";

  bookList = ["from 0 to hero", "The subtil art of not givin a fuck", "web trainig", ];




  constructor() { }

  ngOnInit(): void {
  }

  welcome(myname:string){
    alert('welcome '+myname);
  }

}
