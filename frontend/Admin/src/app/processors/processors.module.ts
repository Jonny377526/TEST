import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessorsRoutingModule } from './processors-routing.module';
import { ProcessorsMainComponent } from './processors-main/processors-main.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../shared/components/components.module';
import { DeleteProcessorsComponent } from './delete-processors/delete-processors.component';
import { ViewProcessorsComponent } from './view-processors/view-processors.component';
import { ProcessorsDistributionComponent } from './processors-distribution/processors-distribution.component';


@NgModule({
  declarations: [
    ProcessorsMainComponent,
    DeleteProcessorsComponent,
    ViewProcessorsComponent,
    ProcessorsDistributionComponent
  ],
  imports: [
    CommonModule,
    ProcessorsRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        NgApexchartsModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatSelectModule,
        MatCardModule,
        MatDialogModule,
        ReactiveFormsModule,
        ComponentsModule
  ]
})
export class ProcessorsModule { }
