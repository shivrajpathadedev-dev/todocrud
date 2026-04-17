import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodocrudComponent } from './todocrud/todocrud.component';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { PostcrudComponent } from './postcrud/postcrud.component';

@NgModule({
  declarations: [
    AppComponent,
    TodocrudComponent,
    StudentcrudComponent,
    ProductcrudComponent,
    PostcrudComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
