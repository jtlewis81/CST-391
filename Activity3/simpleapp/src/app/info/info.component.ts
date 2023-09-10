import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit
{
  @Input() name = "";
  quantity = 0;
  products: string[] = [];
  selectedProduct = "A New Hope";

  constructor() { }

  ngOnInit()
  {
    this.quantity = 0;
    this.products = ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "A New Hope";
  }

  onSubmit()
  {
    console.log("In onSubmit() with quantity of " + this.quantity + " and Movie selected is " + this.selectedProduct);
  }

  newInfo()
  {
    this.quantity = 0;
    this.products = ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "A New Hope";
    console.log("In newInfo() and resetting Info");
  }
}
