import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargesComponent } from './components/pages/charges/charges.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ServicesComponent } from './components/pages/services/services.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'charges', component: ChargesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
