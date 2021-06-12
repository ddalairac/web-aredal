import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ChargesComponent } from './components/pages/charges/charges.component';
import { MenuComponent } from './components/ui/menu/menu.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ModalComponent } from './components/ui/modal/modal.component';
import { ProfitabilityComponent } from './components/pages/profitability/profitability.component';
import { WhyTarragonaComponent } from './components/pages/why-tarragona/why-tarragona.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    ChargesComponent,
    MenuComponent,
    AboutComponent,
    ModalComponent,
    ProfitabilityComponent,
    WhyTarragonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
