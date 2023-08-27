import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  phone: string = "0933337617";

  /**
   * This method displays a simple success message to the user
   * @param title
   * @param message
   * @param icon
   * @param showCloseButton
   */
  showContactPopup(){

    return Swal.fire({
      title: "Thông tin liên hệ",
      html: `Số điện thoại và Zalo nhân viên: <br> <h3>${this.phone}</h3>`,
      showCloseButton: true
    })
  }
}
