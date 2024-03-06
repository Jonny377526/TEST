import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';

const routes: Routes = [
  { path : "manufacturers", component: ManufacturersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturerRoutingModule { }
