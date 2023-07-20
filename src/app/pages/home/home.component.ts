import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { DetailDialogComponent } from './dialog/detail-dialog/detail-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private dialog: Dialog,
    private router: Router
  ) { }

  private tempDialog: any[] = [];

  ngOnInit() {
    // Input temp data for dialog dialog :(
    this.tempDialog.push(`<!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <h2 class="modal-title">Tên gói : HomeTV K+ (Cho TV thường)</h2>
        </div>
        <div class="modal-body">
            <div class="description-item-fiber">
                
            </div>

        </div>
        <div class="modal-footer" style="text-align: center">
            <button type="button" class="btn btn-default" data-dismiss="modal">Quay lại</button>
            <a href="/register?id=24"
                class="btn btn-register">
                Đăng ký </a>
        </div>
    </div>`);
  }

  openDetailDialog(index: number) {
    this.dialog.open(DetailDialogComponent, {
      data: index
    });
  }

  gotoDetail(event: any, index: number) {
    event.stopPropagation();
    event.preventDefault();

    this.router.navigate([`/detail`], { 
        queryParams: { 
            id: index 
        }
    });
  }

  gotoRegister(event: any, index: number) {
    event.stopPropagation();
    event.preventDefault();

    this.router.navigate([`/register`], { 
        queryParams: { 
            id: index 
        }
    });
  }
}
