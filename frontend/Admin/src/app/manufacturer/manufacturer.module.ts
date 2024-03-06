import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturerRoutingModule } from './manufacturer-routing.module';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
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
import { DeleteManufacturersComponent } from './delete-manufacturers/delete-manufacturers.component';
import { ViewManufacturersComponent } from './view-manufacturers/view-manufacturers.component';
import { ManufacturersDistributionComponent } from './manufacturers-distribution/manufacturers-distribution.component';


@NgModule({
  declarations: [
    ManufacturersComponent,
    DeleteManufacturersComponent,
    ViewManufacturersComponent,
    ManufacturersDistributionComponent
  ],
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
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
export class ManufacturerModule { }
