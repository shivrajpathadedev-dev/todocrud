import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../../model/product';

@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.scss']
})
export class ProductcrudComponent implements OnInit {
[x: string]: any;
  isInEditMode:boolean=false
  editObj!:IProduct

  @ViewChild('productName') productName!:ElementRef
  @ViewChild('category') category!:ElementRef
  @ViewChild('price') price!:ElementRef

products:IProduct[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  productsArr:Array<IProduct>=[
     { id: "1", productName: "Laptop", category: "Electronics", price: 55000 },
      { id: "2", productName: "Mobile", category: "Electronics", price: 20000 },
      { id: "3", productName: "Headphones", category: "Accessories", price: 1500 },
      { id: "4", productName: "Keyboard", category: "Accessories", price: 800 },
      { id: "5", productName: "Mouse", category: "Accessories", price: 500 },
      { id: "6", productName: "Refrigerator", category: "Home Appliances", price: 30000 },
      { id: "7", productName: "Washing Machine", category: "Home Appliances", price: 25000 },
      { id: "8", productName: "Air Conditioner", category: "Home Appliances", price: 40000 },
      { id: "9", productName: "TV", category: "Electronics", price: 35000 },
      { id: "10", productName: "Smart Watch", category: "Wearables", price: 7000 }
  ];

  OnAdd(){
    let productName=this.productName.nativeElement.value;
    let category=this.category.nativeElement.value;
    let price=this.price.nativeElement.value;
    let newProduct:IProduct={
      productName:productName,
      category:category,
      price:price,
      id:Date.now().toString()
    }
    this.productsArr.push(newProduct)
    this.productName.nativeElement.value=``;
    this.category.nativeElement.value=``;
    this.price.nativeElement.value=``;
  }
  trackByProduct(index:number, item:IProduct){
    return item.id
  }

  OnRmove(id:string){
    console.log(id)
    let getIndex=this.productsArr.findIndex(t=>t.id===id)
    this.productsArr.splice(getIndex,1)
  }

  OnEdit(product:IProduct){
    console.log(product)
    this.isInEditMode=true
    this.editObj=product;
    this.productName.nativeElement.value=this.editObj.productName
    this.category.nativeElement.value=this.editObj.category
    this.price.nativeElement.value=this.editObj.price
  }

  OnUpdate(){
    let UPDATE_ID=this.editObj.id
    let UPDATE_OBJ:IProduct={
      productName:this.productName.nativeElement.value,
      category:this.category.nativeElement.value,
      price:this.price.nativeElement.value,
      id:UPDATE_ID
    }
    console.log(UPDATE_OBJ);
    let getIndex=this.productsArr.findIndex(t=>t.id===UPDATE_ID)
    this.productsArr[getIndex]=UPDATE_OBJ
    this.productName.nativeElement.value=``;
    this.category.nativeElement.value=``;
    this.price.nativeElement.value=``;

  }

}
