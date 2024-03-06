import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';

const routes: Routes = [
  { path: "webpage", component: WebpageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitaltrainingRoutingModule { }
