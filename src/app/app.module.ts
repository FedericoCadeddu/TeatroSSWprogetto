import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MongodbService } from './mongodb.service';
import { HttpClientModule } from '@angular/common/http';
import { NewprenComponent } from './newpren/newpren.component';
import { CleanComponent } from './clean/clean.component';
import { AccessComponent } from './access/access.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, NewprenComponent,CleanComponent, AccessComponent ],
  bootstrap:    [ AppComponent ],
  providers:   [MongodbService]
})
export class AppModule { }
