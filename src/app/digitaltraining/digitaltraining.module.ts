import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitaltrainingRoutingModule } from './digitaltraining-routing.module';
import { WebpageComponent } from './webpage/webpage.component';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    WebpageComponent
  ],
  imports: [
    CommonModule,
    DigitaltrainingRoutingModule,
    ComponentsModule,
    SharedModule,
    MatCardModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class DigitaltrainingModule { }
