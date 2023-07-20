import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private router: Router
  ) { }

  private serviceId = "service_6k8as2x";
  private templateId = "template_ytambn8";
  private publicKey = "TVLPnkURLn9DtwpNO";

  id: number = 0;
  
  data = [{
    id: "0",
    imagePath: "/uploads/package/20230622042229/images/home-fim--368x250-1687425749.jpg",
    title: "HOME FIM",
    price: "1.434.000đ - 7 tháng",
  }, {
    id: "1",
    imagePath: "/uploads/package/20230630103917/images/home-mesh-1-_-368x250--1-1688139557.jpg",
    title: "HOME MESH 1 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.230.000đ - 7 tháng",
  }, {
    id: "2",
    imagePath: "/uploads/package/20230630104907/images/home-mesh-2-_-368x250--2-1688140147.jpg",
    title: "HOME MESH 2 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.380.000đ - 7 tháng",
  }, {
    id: "3",
    imagePath: "/uploads/package/20230630104940/images/home-mesh-2-_-368x250--2---1-1688140180.jpg",
    title: "HOME MESH 2 + (nội thành HNI & HCM)",
    price: "1.620.000đ - 7 tháng",
  }, {
    id: "4",
    imagePath: "/uploads/package/20230630104940/images/home-mesh-2-_-368x250--2---1-1688140180.jpg",
    title: "HOME MESH 3 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.554.000đ - 7 tháng",
  }, {
    id: "5",
    imagePath: "/uploads/package/20230701110713/images/home-mesh-3-_-368x250--3-1688184433.jpg",
    title: "HOME MESH 3 + (nội thành HNI & HCM)",
    price: "1.794.000đ - 7 tháng",
  }, {
    id: "6",
    imagePath: "/uploads/package/20230701110910/images/home-mesh-4-_-368x250--4-1688184550.jpg",
    title: "HOME MESH 4 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.614.000đ - 7 tháng",
  }, {
    id: "7",
    imagePath: "/uploads/package/20230701110854/images/home-mesh-4-_-368x250--4-1688184534.jpg",
    title: "HOME MESH 4 + (nội thành HNI & HCM)",
    price: "1.854.000đ - 7 tháng",
  }, {
    id: "8",
    imagePath: "/uploads/package/20230701111033/images/home-mesh-5-_-368x250--5-1688184633.jpg",
    title: "HOME MESH 5 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.974.000đ - 7 tháng",
  }, { 
    id: "9",
    imagePath: "/uploads/package/20230701111050/images/home-mesh-5-_-368x250--5-1688184650.jpg",
    title: "HOME MESH 5 + (nội thành HNI & HCM)",
    price: "2.214.000đ - 7 tháng",
  }, {
    id: "10",
    imagePath: "/uploads/package/20230701110213/images/home-net-1-_-368x250--1-1688184133.jpg",
    title: "HOME NET 1 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.110.000đ - 7 tháng",
  }, {
    id: "11",
    imagePath: "/uploads/package/20230701111315/images/home-net-2-_-368x250--2-1688184795.jpg",
    title: "HOME NET 2 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP",
    price: "1.200.000đ - 7 tháng",
  }, {
    id: "12",
    imagePath: "/uploads/package/20230701111328/images/home-net-2-_-368x250--2-1688184808.jpg",
    title: "HOME NET 2 + (nội thành Hà Nội & TP.HCM)",
    price: "1.440.000đ - 7 tháng",
  }, {
    id: "13",
    imagePath: "/uploads/package/20230701112600/images/home-net-3-_-368x250--3-1688185560.jpg",
    title: "HOME NET 3 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.374.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 200Mbps<br>
    180 kênh truyền hình MyTV<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>200Mbps</strong><br>
    -&nbsp;<strong>180&nbsp;</strong>kênh truyền hình MyTV<br>
    - Dịch vụ bảo mật Internet&nbsp;<strong>GreenNet:</strong><br>
    + Là dịch vụ chặn lọc web đen, web độc hại tới nhóm người dùng dịch vụ Fiber của VNPT do công ty Plantynet cung cấp. GreenNet giúp khách hàng tự động ngăn chặn việc truy cập các trang web độc hại như: sex, bạo lực, cờ bạc, ma túy, tự tử,…<br>
    + Tích hợp cài đặt dễ dàng, trong suốt người dùng<br>
    +&nbsp;Chặn Website độc hại theo domain, URL<br>
    +&nbsp;On/Off dịch vụ linh hoạt<br>
    +&nbsp;Hiển thị danh sách các website bị chặn<br>
    +&nbsp;Tìm kiếm an toàn trên Google và Youtube<br>
    +&nbsp;Trang hiển thị thông báo chặn, điều hướng<br>
    + Cài đặt danh mục<br>
    + Tùy chọn người dùng.&nbsp;</p>

    <p><strong>2. Quy định sử dụng gói cước</strong><br>
    - Khuyến mại:<br>
    +&nbsp;Đăng ký 6 tháng tặng 1 tháng<br>
    +&nbsp;Đăng ký 12 tháng tặng 2 tháng.</p>

    <p style="text-align:justify"><strong>3. Tổng đài hỗ trợ&nbsp;</strong><br>
    - Để được hỗ trợ về dịch vụ internet và truyền hình, Quý khách vui lòng liên hệ 1800 1166 (miễn phí)</p>`,
  }, {
    id: "14",
    imagePath: "/uploads/package/20230701112626/images/home-net-3-_-368x250--3-1688185586.jpg",
    title: "HOME NET 3 + (nội thành Hà Nội & TP.HCM)",
    price: "1.614.000đ - 7 tháng",
  }, {
    id: "15",
    imagePath: "/uploads/package/20230701112802/images/home-net-4-_-368x250--4-1688185682.jpg",
    title: "HOME NET 4 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.434.000đ - 7 tháng",
  }, {
    id: "16",
    imagePath: "/uploads/package/20230701112822/images/home-net-4-_-368x250--4-1688185702.jpg",
    title: "HOME NET 4 + (nội thành Hà Nội & TP.HCM)",
    price: "1.674.000đ - 7 tháng",
  }, {
    id: "17",
    imagePath: "/uploads/package/20230701113015/images/home-net-5-_-368x250--5-1688185815.jpg",
    title: "HOME NET 5 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.614.000đ - 7 tháng",
  }, {
    id: "18",
    imagePath: "/uploads/package/20230701113038/images/home-net-5-_-368x250--5-1688185838.jpg",
    title: "HOME NET 5 + (nội thành Hà Nội & TP.HCM)",
    price: "1.854.000đ - 7 tháng",
  }, {
    id: "19",
    imagePath: "/uploads/package/20230622042341/images/home-tv-safe_-368x250-1687425821.jpg",
    title: "HOME TV SAFE (Ngoại trừ nội thành HNI,HCM,HPG)",
    price: "1.554.000đ - 7 tháng",
  }, {
    id: "20",
    imagePath: "/uploads/package/20230622042359/images/home-tv-safe_-368x250-1687425839.jpg",
    title: "HOME TV SAFE (Nội thành HNI, HCM, HPG)",
    price: "1.734.000đ - 7 tháng",
  }, {
    id: "21",
    imagePath: "HomeTV VIP (Ngoại trừ nội thành HNI,HCM,HPG)",
    title: "HomeTV VIP (Ngoại trừ nội thành HNI,HCM,HPG)",
    price: "2.154.000đ - 7 tháng",
  }, {
    id: "22",
    imagePath: "/uploads/package/20230622043435/images/home-tv-vip_--368x250-1687426475.jpg",
    title: "HomeTV VIP (Nội thành HNI,HCM,HPG)",
    price: "2.274.000đ - 7 tháng",
  }, {
    id: "23",
    imagePath: "/uploads/package/20230622043930/images/home-tv-k--368x250-1687426770.jpg",
    title: "HomeTV K+ (Cho SmartTV)",
    price: "2.688.000đ - 7 tháng",
    discountPrice: `                                    <span class="lbl_dis">Chỉ còn:
    1.698.000đ
    </span>`,
  }, {
    id: "24",
    imagePath: "/uploads/package/20230622044013/images/home-tv-k--368x250-1687426813.jpg",
    title: "HomeTV K+ (Cho TV thường)",
    price: "2.898.000đ - 7 tháng",
    discountPrice: `<span class="lbl_dis">Chỉ còn:
    2.114.000đ
    </span>`,
  }];

  FormData = this.builder.group({
    customerName: new FormControl('', [Validators.required]),
    province: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    ward: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    introducer: new FormControl(''),
  });
  
  // convenience getter for easy access to form fields
  get formData() { return this.FormData.controls; }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
      }
    );
  }

  submit() {
    if (!this.FormData.valid) {
      return;
    }
    
    this.sendEmail();
  }

  public sendEmail() {
    let body = {
      customerName: this.FormData.value.customerName,
      province: this.FormData.value.province,
      district: this.FormData.value.district,
      ward: this.FormData.value.ward,
      address: this.FormData.value.address,
      phoneNumber: this.FormData.value.phoneNumber,
      introducer: this.FormData.value.introducer,
      dataPackage: this.data[this.id].title,
      price: this.data[this.id].discountPrice ?? this.data[this.id].price,
    };

    emailjs.send(this.serviceId, this.templateId, body, this.publicKey)
      .then((result: EmailJSResponseStatus) => {
        this.showSuccessMessage(
          'Thành công',
          'Đã gửi thông thành công, vui lòng đợi nhân viên liên hệ!'
        )
      }, (error) => {
        console.log(error.text);
      });
  }

  /**
   * This method displays a simple success message to the user
   * @param title
   * @param message
   * @param icon
   * @param showCloseButton
   */
  showSuccessMessage(title: string, message: string){

    return Swal.fire({
      title: title,
      text: message,
      icon: "success",
      showCloseButton: true
    }).then((result) => {
      this.router.navigate([`/`]);
    });
  }
}