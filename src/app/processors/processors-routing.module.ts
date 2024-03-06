import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BargraphComponent } from './bargraph/bargraph.component';

const routes: Routes = [
 // { path: "", component:BargraphComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessorsRoutingModule { }
