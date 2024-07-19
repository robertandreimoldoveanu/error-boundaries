import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCustomErrorHandler } from './my-custom-error-handler';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{
    provide: ErrorHandler,
    useFactory: () => new MyCustomErrorHandler('app-module')
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
