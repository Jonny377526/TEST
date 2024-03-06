import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessorsMainComponent } from '../processors-main/processors-main.component';

@Component({
  selector: 'app-view-processors',
  templateUrl: './view-processors.component.html',
  styleUrls: ['./view-processors.component.css']
})
export class ViewProcessorsComponent implements OnInit {

  rowData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProcessorsMainComponent>) { }

  ngOnInit(): void {
    this.rowData = this.data.rowData;
    console.log("Data", this.rowData)
  }
}
