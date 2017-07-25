import { Injectable } from '@angular/core';
import { ProductService,Product } from "./product.service"

@Injectable()
export class AnotherProductService  implements ProductService{
  
  getProduct():Product{
  	return new Product(1,"iPhone8",199,"iPhone8的dsec");
  }

    constructor() { }

}
