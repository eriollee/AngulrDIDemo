import { Injectable } from '@angular/core';
import { ProductService,Product } from "./product.service"
import { LoggerService } from './logger.service';
@Injectable()
export class AnotherProductService  implements ProductService{
  
  getProduct():Product{
  	this.logger.log("日志2");
  	return new Product(1,"iPhone8",199,"iPhone8的dsec");
  }

    constructor(public logger:LoggerService) { }

}
