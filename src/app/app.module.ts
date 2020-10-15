import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar.component';
import { SearchComponent } from './user/search.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import {RoutingModule} from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';
import {SearchRequestService} from './search-request.service';
import { DatePipePipe } from './date-pipe.pipe';
import { HighlightDirective } from './highlight.directive';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    RepositoriesComponent,
    SearchFormComponent,
    DatePipePipe,
    HighlightDirective,
   
  ],
  imports: [
    BrowserModule,
      RoutingModule,
      RouterModule,
      FormsModule,
  
      NgProgressHttpModule,
      
      HttpClientModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
