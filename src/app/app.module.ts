import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodocrudComponent } from './todocrud/todocrud.component';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { PostcrudComponent } from './postcrud/postcrud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { TabComponent } from './tab/tab.component';
import { TabForComponent } from './tab-for/tab-for.component';
import { FoodComponent } from './food/food.component';
import { CarsComponent } from './cars/cars.component';
import { TabsComponent } from './tabs/tabs.component';
import { NewfoodComponent } from './newfood/newfood.component';


@NgModule({
  declarations: [
    AppComponent,
    TodocrudComponent,
    StudentcrudComponent,
    ProductcrudComponent,
    PostcrudComponent,
    TabComponent,
    TabForComponent,
    FoodComponent,
    CarsComponent,
    TabsComponent,
    NewfoodComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
