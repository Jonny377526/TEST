import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ActorsComponent } from './actors/actors.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GenWidgetsComponent } from './gen-widgets/gen-widgets.component';
//import { ActorsPerBranchComponent } from './actors-per-branch/actors-per-branch.component';
import { CustomerTransactionsComponent } from './customer-transactions/customer-transactions.component';
import { MixedTransactionsBarComponent } from './mixed-transactions-bar/mixed-transactions-bar.component';
import { TransactionsComponent } from './transactions/transactions.component';


@NgModule({
  declarations: [
    ActorsComponent,
    GenWidgetsComponent,
    //ActorsPerBranchComponent,
    CustomerTransactionsComponent,
    MixedTransactionsBarComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    SharedModule,
    MatCardModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    
  ]
})
export class DashboardModule { }
