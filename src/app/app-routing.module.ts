import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderRegistrationComponent } from './provider-registration/provider-registration.component';

const routes: Routes = [
  { path: 'provider-registration', component: ProviderRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
