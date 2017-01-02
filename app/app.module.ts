import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import './core/rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeekService} from './models/week.service'

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { WeekDetailComponent }      from './week-detail/week-detail.component';

@NgModule({
  imports:      [ 
        BrowserModule,  
        FormsModule,
        HttpModule,      
        AppRoutingModule,
        CoreModule ],
  declarations: [ AppComponent, WeekDetailComponent ],
  providers: [WeekService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
