import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import {Order} from './order.model';
import {OrderRepository} from './order.repository';
import {HttpModule} from '@angular/http';
import {RestDataSource} from './rest.datasource';
import {AuthService} from './auth.service';

@NgModule({
  imports: [HttpModule],
    providers: [ProductRepository, StaticDataSource, Cart,
    Order, OrderRepository, { provide: StaticDataSource, useClass: RestDataSource },
      RestDataSource, AuthService]
})
export class ModelModule { }