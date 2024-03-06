import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessorsMainComponent } from './processors-main/processors-main.component';

const routes: Routes = [
  {path: "processors" , component:ProcessorsMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessorsRoutingModule { }
