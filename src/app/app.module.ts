import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { ProviderRegistrationComponent } from './provider-registration/provider-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MapDisplayComponent,
    ProviderRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlBpk-Js1WQEIDPM-6PALLMR2VA0waUxA',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
