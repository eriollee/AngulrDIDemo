import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
@Injectable()
export class ProductService {

  constructor(public logger:LoggerService) { }

  getProduct():Product{
  	this.logger.log("日志1");
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