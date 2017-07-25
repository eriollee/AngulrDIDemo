import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct():Product{
  	return new Product(0,"iPhone7",99,"iPhone7的dsec");
  }

}

export class Product{
	constructor(
		public id:number,
		public title: string,
		public price:number,
		public desc:string,
	){
	}
}