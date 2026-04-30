import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodocrudComponent } from './component/todocrud/todocrud.component';
import { StudentcrudComponent } from './component/studentcrud/studentcrud.component';
import { ProductcrudComponent } from './component/productcrud/productcrud.component';
import { PostcrudComponent } from './component/postcrud/postcrud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { TabComponent } from './component/tab/tab.component';
import { TabForComponent } from './component/tab-for/tab-for.component';
import { FoodComponent } from './component/food/food.component';
import { CarsComponent } from './cars/cars.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { NewfoodComponent } from './component/newfood/newfood.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { studentscrudtest } from './component/studentscrudtest/studentscrudtest.component';
import { snackbarservice } from './component/service/snackbar.service';
import { TabSwitchComponent } from './component/tab-switch/tab-switch.component';

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
    studentscrudtest,
    TabSwitchComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
