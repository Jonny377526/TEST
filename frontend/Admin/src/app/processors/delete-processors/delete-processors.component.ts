import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/admin/services/snackbar.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { DataService } from 'src/app/market-place/services/data.service';
import { ProcessorsMainComponent } from '../processors-main/processors-main.component';
import { ProcessorsService } from 'src/app/admin/services/processors.service';

@Component({
  selector: 'app-delete-processors',
  templateUrl: './delete-processors.component.html',
  styleUrls: ['./delete-processors.component.css']
})
export class DeleteProcessorsComponent implements OnInit {

  rowData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProcessorsMainComponent>,
    private processorsService: ProcessorsService,
    private tokenStorageService: TokenStorageService,
    private snackbar: SnackbarService,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.rowData = this.data.rowData;
    console.log('Row Data:', this.rowData);
  }

  public onDelete() {
    this.rowData = this.data.rowData;
    console.log('Row Data:', this.rowData);
    const data = this.tokenStorageService.getUser();
    const accessToken = data.access_token;
    this.processorsService.deleteProcessor(this.rowData.id, accessToken).subscribe({
      next: ((res) => {
        if (res.statusCode === 204){
          this.dialogRef.close();
          this.snackbar.showNotification("snackbar-message", "Processor deleted successfully");
          this.dataService.updateData();
        }
        else{
          this.snackbar.showNotification("snackbar-warn", res.message);
        }
      }),
      error: ((error) => {
        this.snackbar.showNotification("snackbar-warn", error);
      }),
      complete: (() => {})
    })
  }

  public onCancel() {
    this.dialogRef.close();
  }

}
