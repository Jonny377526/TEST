import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ManufacturersComponent } from '../manufacturers/manufacturers.component';

@Component({
  selector: 'app-view-manufacturers',
  templateUrl: './view-manufacturers.component.html',
  styleUrls: ['./view-manufacturers.component.css']
})
export class ViewManufacturersComponent implements OnInit {

  rowData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ManufacturersComponent>) { }

  ngOnInit(): void {
    this.rowData = this.data.rowData;
    console.log("Data", this.rowData)
  }
}
