import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MouComponent } from './mou/mou.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'mou', component: MouComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' } // Handle unknown routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
