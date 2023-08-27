import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  id: number = 0;
  
  data = [{
    id: "0",
    imagePath: "/uploads/package/20230622042229/images/home-fim--368x250-1687425749.jpg",
    title: "HOME FIM",
    price: "1.434.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet 150 Mbps<br>
    Gói truyền hình MyTV (App) nâng cao 180 kênh. Danh sách gói kênh truyền hình MyTV<br>
    Gói phim Galaxy cao cấp, miễn phí gói HBO GO </div>`,
    description: `
    <p><strong>1. Ưu đãi sử dụng</strong></p>

    <p>- Đường truyền&nbsp;Internet&nbsp;150 Mbps</p>
    
    <p>- Gói truyền hình MyTV (App)&nbsp;nâng cao 180 kênh.&nbsp;Danh sách gói kênh truyền hình MyTV</p>
    
    <p>-&nbsp;Gói phim&nbsp;Galaxy cao cấp</p>
    
    <p>&nbsp; &nbsp; &nbsp;+ Bom tấn Việt chiếu rạp độc quyền và sớm nhất</p>
    
    <p>&nbsp; &nbsp; &nbsp;+ Thư viện phim Việt lớn nhất Việt Nam</p>
    
    <p>&nbsp; &nbsp; &nbsp;+ Phim Bộ độc quyền Galaxy Play</p>
    
    <p>&nbsp; &nbsp; &nbsp;+ Phim Bộ Hot Châu Á</p>
    
    <p>-&nbsp;Miễn phí gói HBO GO</p>
    
    <p>&nbsp; &nbsp; &nbsp;+ Thư viện phim ảnh khổng lồ: Thư viện này có đến khoảng 3000 giờ phim VOD (Video on Demand - một hệ thống cho phép người dùng có thể lựa chọn và xem nội dung video theo ý thích), các nội dung độc quyền (HBO Originals, bao gồm phim nhiều tập, phim truyện và phim tài liệu) do HBO sản xuất tại Mỹ và châu Á, phim bom tấn Hollywood, phim ăn khách châu Á và các chương trình trẻ em yêu thích.</p>
    
    <p>&nbsp; &nbsp; &nbsp;+ Hỗ trợ trên nhiều nền tảng: Ứng dụng HBO Go hoạt động trên mọi loại màn hình và thiết bị như điện thoại thông minh, máy tính bảng, smart tivi và có cùng giao diện.</p>
    
    <p>&nbsp; &nbsp; &nbsp;+ Xem phim có phụ đề tiếng Việt: Người dùng cũng có thể xem trực tuyến các kênh HBO, MAX by HBO và RED by HBO của gói dịch vụ HBO Go với phụ đề tiếng Việt. Đặc biệt, 100% nội dung trên gói HBO GO đã được Việt hóa (phụ đề/thuyết minh) dễ dàng cho khán giả thuộc mọi lứa tuổi theo dõi.</p>
    
    <p><strong>2. Giá gói&nbsp;cước</strong>:&nbsp;</p>
    
    <p>- Giá gói 1 tháng (có VAT): 239.000 VNĐ(*)<br>
    - Giá gói 6 tháng (có VAT): 1.434.000 VNĐ– Ưu đãi tặng thêm 1 tháng (*)<br>
    - Giá gói 12 tháng (có VAT): 2.868.000 VNĐ – Ưu đãi tặng thêm 3 tháng (*)<br>
    (*) Giá gói chưa bao gồm Set-top-box cho TV thông thường.</p>
    
    <p>---------------------------------</p>
    
    <p style="text-align:justify"><span style="color:rgb(0, 0, 255)">*Thiết bị mua thêm (Add-on) cùng gói cước:</span></p>
    
    <p style="text-align:justify"><em>Wifi Mesh VNPT</em>&nbsp;-&nbsp;Thiết bị khuếch đại tín hiệu Wifi (dành cho các ngôi nhà/căn hộ có diện tích lớn)</p>
    
    <p style="text-align:justify"><em>(Giá chỉ từ&nbsp;20.000đ/tháng&nbsp;khi đóng trước cước)</em></p>
    
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border-spacing:0px; color:rgb(0, 0, 0); font-family:sanfranciscodisplay-regular; font-size:16px; margin:0px; max-width:100%; padding:0px; width:425px">
        <tbody>
            <tr>
                <td rowspan="2">&nbsp; &nbsp; &nbsp; GÓI CƯỚC</td>
                <td colspan="2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;CHU KỲ GÓI&nbsp;&nbsp;</td>
            </tr>
            <tr>
                <td>6/7/8/9 tháng</td>
                <td>12/14/15/16/17/18 tháng&nbsp;</td>
            </tr>
            <tr>
                <td>Giá 01 thiết bị Wifi Mesh<br>
                (đồng&nbsp; - Đã có VAT)&nbsp;</td>
                <td>180,000</td>
                <td>360,000</td>
            </tr>
        </tbody>
    </table>`,
  }, {
    id: "1",
    imagePath: "/uploads/package/20230630103917/images/home-mesh-1-_-368x250--1-1688139557.jpg",
    title: "HOME MESH 1 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.230.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 100Mbps<br>
    180 kênh truyền hình MyTV<br>
    Trang bị 01 Wifi Mesh 5<br>
    Dịch vụ bảo mật Internet GreenNet</div>`,
    description: `<p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>100Mbps</strong><br>
    -&nbsp;<strong>180 </strong>kênh truyền hình MyTV<br>
    -&nbsp;Trang bị 01 Wifi&nbsp;<strong>Mesh 5:</strong><br>
    + Wifi Mesh 5 iGate EW12ST là sự kết hợp giữa chuẩn Wifi 5 và công nghệ Mesh Wifi, phù hợp với hộ gia đình với mọi cấu trúc nhà ở.&nbsp;<br>
    + Tốc độ lên đến 1200Mbps trên cả 2 băng tần 2,4-5GHz<br>
    +&nbsp;Kết nối liền mạch, chỉ tạo tên 1 Wifi duy nhất<br>
    +&nbsp;Hỗ trợ đồng thời 40 thiết bị<br>
    +&nbsp;Cài đặt dễ dàng, triển khai linh hoạt.<br>
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
    id: "2",
    imagePath: "/uploads/package/20230630104901/images/home-mesh-2-_-368x250--2---1-1688140141.jpg",
    title: "HOME MESH 2 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.380.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 150Mbps<br>
    180 kênh truyền hình MyTV<br>
    Trang bị 01 Wifi Mesh 5<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>150Mbps</strong><br>
    -&nbsp;<strong>180&nbsp;</strong>kênh truyền hình MyTV<br>
    -&nbsp;Trang bị 01 Wifi&nbsp;<strong>Mesh 5:</strong><br>
    + Wifi Mesh 5 iGate EW12ST là sự kết hợp giữa chuẩn Wifi 5 và công nghệ Mesh Wifi, phù hợp với hộ gia đình với mọi cấu trúc nhà ở.&nbsp;<br>
    + Tốc độ lên đến 1200Mbps trên cả 2 băng tần 2,4-5GHz<br>
    +&nbsp;Kết nối liền mạch, chỉ tạo tên 1 Wifi duy nhất<br>
    +&nbsp;Hỗ trợ đồng thời 40 thiết bị<br>
    +&nbsp;Cài đặt dễ dàng, triển khai linh hoạt.<br>
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
    id: "3",
    imagePath: "/uploads/package/20230630104931/images/home-mesh-2-_-368x250--2---1-1688140171.jpg",
    title: "HOME MESH 2 + (nội thành HNI & HCM)",
    price: "1.620.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 150Mbps<br>
    180 kênh truyền hình MyTV<br>
    Trang bị 01 Wifi Mesh 5<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>150Mbps</strong><br>
    -&nbsp;<strong>180&nbsp;</strong>kênh truyền hình MyTV<br>
    -&nbsp;Trang bị 01 Wifi&nbsp;<strong>Mesh 5:</strong><br>
    + Wifi Mesh 5 iGate EW12ST là sự kết hợp giữa chuẩn Wifi 5 và công nghệ Mesh Wifi, phù hợp với hộ gia đình với mọi cấu trúc nhà ở.&nbsp;<br>
    + Tốc độ lên đến 1200Mbps trên cả 2 băng tần 2,4-5GHz<br>
    +&nbsp;Kết nối liền mạch, chỉ tạo tên 1 Wifi duy nhất<br>
    +&nbsp;Hỗ trợ đồng thời 40 thiết bị<br>
    +&nbsp;Cài đặt dễ dàng, triển khai linh hoạt.<br>
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
    id: "4",
    imagePath: "/uploads/package/20230701110653/images/home-mesh-3-_-368x250--3-1688184413.jpg",
    title: "HOME MESH 3 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.554.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 200Mbps<br>
    180 kênh truyền hình MyTV<br>
    Trang bị 01 Wifi Mesh 5<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>200Mbps</strong><br>
    -&nbsp;<strong>180&nbsp;</strong>kênh truyền hình MyTV<br>
    -&nbsp;Trang bị 01 Wifi&nbsp;<strong>Mesh 5:</strong><br>
    + Wifi Mesh 5 iGate EW12ST là sự kết hợp giữa chuẩn Wifi 5 và công nghệ Mesh Wifi, phù hợp với hộ gia đình với mọi cấu trúc nhà ở.&nbsp;<br>
    + Tốc độ lên đến 1200Mbps trên cả 2 băng tần 2,4-5GHz<br>
    +&nbsp;Kết nối liền mạch, chỉ tạo tên 1 Wifi duy nhất<br>
    +&nbsp;Hỗ trợ đồng thời 40 thiết bị<br>
    +&nbsp;Cài đặt dễ dàng, triển khai linh hoạt.<br>
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
    id: "5",
    imagePath: "/uploads/package/20230701110653/images/home-mesh-3-_-368x250--3-1688184413.jpg",
    title: "HOME MESH 3 + (nội thành HNI & HCM)",
    price: "1.794.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 200Mbps<br>
    180 kênh truyền hình MyTV<br>
    Trang bị 01 Wifi Mesh 5<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>200Mbps</strong><br>
    -&nbsp;<strong>180&nbsp;</strong>kênh truyền hình MyTV<br>
    -&nbsp;Trang bị 01 Wifi&nbsp;<strong>Mesh 5:</strong><br>
    + Wifi Mesh 5 iGate EW12ST là sự kết hợp giữa chuẩn Wifi 5 và công nghệ Mesh Wifi, phù hợp với hộ gia đình với mọi cấu trúc nhà ở.&nbsp;<br>
    + Tốc độ lên đến 1200Mbps trên cả 2 băng tần 2,4-5GHz<br>
    +&nbsp;Kết nối liền mạch, chỉ tạo tên 1 Wifi duy nhất<br>
    +&nbsp;Hỗ trợ đồng thời 40 thiết bị<br>
    +&nbsp;Cài đặt dễ dàng, triển khai linh hoạt.<br>
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
    id: "6",
    imagePath: "/uploads/package/20230701110904/images/home-mesh-4-_-368x250--4-1688184544.jpg",
    title: "HOME MESH 4 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.614.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 250Mbps<br>
    180 kênh truyền hình MyTV<br>
    Trang bị 02 Wifi Mesh 5 hoặc 01 Wifi Mesh 6<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>250Mbps</strong><br>
    -<strong>&nbsp;180&nbsp;</strong>kênh truyền hình MyTV<br>
    -&nbsp;Trang bị 02 Wifi&nbsp;<strong>Mesh 5&nbsp;</strong>hoặc 01 Wifi&nbsp;<strong>Mesh 6</strong><br>
    + &nbsp;Wifi Mesh 5&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Wifi Mesh 5 iGate EW12ST là sự kết hợp giữa chuẩn Wifi 5 và công nghệ Mesh Wifi, phù hợp với hộ gia đình với mọi cấu trúc nhà ở.&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Tốc độ lên đến 1200Mbps trên cả 2 băng tần 2,4-5GHz<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Kết nối liền mạch, chỉ tạo tên 1 Wifi duy nhất<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Hỗ trợ đồng thời 40 thiết bị<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Cài đặt dễ dàng, triển khai linh hoạt.<br>
    + Wifi Mesh 6<br>
    &nbsp; &nbsp; &nbsp;*Wifi Mesh 6 iGate EW30SX là sự kết hợp giữa chuẩn Wifi 6 và công nghệ Mesh, phù hợp với các doanh nghiệp, tổ chức vừa và nhỏ, các gia đình có nhu cầu sử dụng internet cao.&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Tốc độ lên đến 3Gbps, trên cả hai băng tần 2,4 – 5GHz<br>
    &nbsp; &nbsp; &nbsp;* Kết nối liền mạch, phù hợp mọi ngóc ngách<br>
    &nbsp; &nbsp; &nbsp;* Hỗ trợ đồng thời 100 thiết bị<br>
    &nbsp; &nbsp; &nbsp;* Độ trễ giảm 50%.&nbsp;<br>
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
    id: "7",
    imagePath: "/uploads/package/20230701110849/images/home-mesh-4-_-368x250--4-1688184529.jpg",
    title: "HOME MESH 4 + (nội thành HNI & HCM)",
    price: "1.854.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 250Mbps<br>
    180 kênh truyền hình MyTV<br>
    Trang bị 02 Wifi Mesh 5 hoặc 01 Wifi Mesh 6<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>250Mbps</strong><br>
    -<strong>&nbsp;180 </strong>kênh truyền hình MyTV<br>
    -&nbsp;Trang bị 02 Wifi&nbsp;<strong>Mesh 5&nbsp;</strong>hoặc 01 Wifi&nbsp;<strong>Mesh 6</strong><br>
    + &nbsp;Wifi Mesh 5&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Wifi Mesh 5 iGate EW12ST là sự kết hợp giữa chuẩn Wifi 5 và công nghệ Mesh Wifi, phù hợp với hộ gia đình với mọi cấu trúc nhà ở.&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Tốc độ lên đến 1200Mbps trên cả 2 băng tần 2,4-5GHz<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Kết nối liền mạch, chỉ tạo tên 1 Wifi duy nhất<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Hỗ trợ đồng thời 40 thiết bị<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Cài đặt dễ dàng, triển khai linh hoạt.<br>
    + Wifi Mesh 6<br>
    &nbsp; &nbsp; &nbsp;*Wifi Mesh 6 iGate EW30SX là sự kết hợp giữa chuẩn Wifi 6 và công nghệ Mesh, phù hợp với các doanh nghiệp, tổ chức vừa và nhỏ, các gia đình có nhu cầu sử dụng internet cao.&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Tốc độ lên đến 3Gbps, trên cả hai băng tần 2,4 – 5GHz<br>
    &nbsp; &nbsp; &nbsp;* Kết nối liền mạch, phù hợp mọi ngóc ngách<br>
    &nbsp; &nbsp; &nbsp;* Hỗ trợ đồng thời 100 thiết bị<br>
    &nbsp; &nbsp; &nbsp;* Độ trễ giảm 50%.&nbsp;<br>
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
    id: "8",
    imagePath: "/uploads/package/20230701111028/images/home-mesh-5-_-368x250--5-1688184628.jpg",
    title: "HOME MESH 5 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.974.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 300Mbps<br>
    180 kênh truyền hình MyTV<br>
    Trang bị 03 Wifi Mesh 5 hoặc 02 Wifi Mesh 6<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>300Mbps</strong><br>
    -<strong>&nbsp;180&nbsp;</strong>kênh truyền hình MyTV<br>
    -&nbsp;Trang bị 03 Wifi&nbsp;<strong>Mesh 5</strong>&nbsp;hoặc 02 Wifi&nbsp;<strong>Mesh 6</strong><br>
    + &nbsp;Wifi Mesh 5&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Wifi Mesh 5 iGate EW12ST là sự kết hợp giữa chuẩn Wifi 5 và công nghệ Mesh Wifi, phù hợp với hộ gia đình với mọi cấu trúc nhà ở.&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Tốc độ lên đến 1200Mbps trên cả 2 băng tần 2,4-5GHz<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Kết nối liền mạch, chỉ tạo tên 1 Wifi duy nhất<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Hỗ trợ đồng thời 40 thiết bị<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Cài đặt dễ dàng, triển khai linh hoạt.<br>
    + Wifi Mesh 6<br>
    &nbsp; &nbsp; &nbsp;*Wifi Mesh 6 iGate EW30SX là sự kết hợp giữa chuẩn Wifi 6 và công nghệ Mesh, phù hợp với các doanh nghiệp, tổ chức vừa và nhỏ, các gia đình có nhu cầu sử dụng internet cao.&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Tốc độ lên đến 3Gbps, trên cả hai băng tần 2,4 – 5GHz<br>
    &nbsp; &nbsp; &nbsp;* Kết nối liền mạch, phù hợp mọi ngóc ngách<br>
    &nbsp; &nbsp; &nbsp;* Hỗ trợ đồng thời 100 thiết bị<br>
    &nbsp; &nbsp; &nbsp;* Độ trễ giảm 50%.&nbsp;<br>
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
    id: "9",
    imagePath: "/uploads/package/20230701111043/images/home-mesh-5-_-368x250--5-1688184643.jpg",
    title: "HOME MESH 5 + (nội thành HNI & HCM)",
    price: "2.214.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 300Mbps<br>
    180 kênh truyền hình MyTV<br>
    Trang bị 03 Wifi Mesh 5 hoặc 02 Wifi Mesh 6<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>300Mbps</strong><br>
    -<strong>&nbsp;180&nbsp;</strong>kênh truyền hình MyTV<br>
    -&nbsp;Trang bị 03 Wifi <strong>Mesh 5</strong> hoặc 02 Wifi <strong>Mesh 6</strong><br>
    + &nbsp;Wifi Mesh 5&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Wifi Mesh 5 iGate EW12ST là sự kết hợp giữa chuẩn Wifi 5 và công nghệ Mesh Wifi, phù hợp với hộ gia đình với mọi cấu trúc nhà ở.&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Tốc độ lên đến 1200Mbps trên cả 2 băng tần 2,4-5GHz<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Kết nối liền mạch, chỉ tạo tên 1 Wifi duy nhất<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Hỗ trợ đồng thời 40 thiết bị<br>
    &nbsp; &nbsp; &nbsp;*&nbsp;Cài đặt dễ dàng, triển khai linh hoạt.<br>
    + Wifi Mesh 6<br>
    &nbsp; &nbsp; &nbsp;*Wifi Mesh 6 iGate EW30SX là sự kết hợp giữa chuẩn Wifi 6 và công nghệ Mesh, phù hợp với các doanh nghiệp, tổ chức vừa và nhỏ, các gia đình có nhu cầu sử dụng internet cao.&nbsp;<br>
    &nbsp; &nbsp; &nbsp;* Tốc độ lên đến 3Gbps, trên cả hai băng tần 2,4 – 5GHz<br>
    &nbsp; &nbsp; &nbsp;* Kết nối liền mạch, phù hợp mọi ngóc ngách<br>
    &nbsp; &nbsp; &nbsp;* Hỗ trợ đồng thời 100 thiết bị<br>
    &nbsp; &nbsp; &nbsp;* Độ trễ giảm 50%.&nbsp;<br>
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
    id: "10",
    imagePath: "/uploads/package/20230701110204/images/home-net-1-_-368x250--1-1688184124.jpg",
    title: "HOME NET 1 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.110.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 100Mbps<br>
    180 kênh truyền hình MyTV<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>100Mbps</strong><br>
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
    id: "11",
    imagePath: "/uploads/package/20230701111309/images/home-net-2-_-368x250--2-1688184789.jpg",
    title: "HOME NET 2 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP",
    price: "1.200.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 150Mbps<br>
    180 kênh truyền hình MyTV<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>150Mbps</strong><br>
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
    id: "12",
    imagePath: "/uploads/package/20230701111323/images/home-net-2-_-368x250--2-1688184803.jpg",
    title: "HOME NET 2 + (nội thành Hà Nội & TP.HCM)",
    price: "1.440.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 150Mbps<br>
    180 kênh truyền hình MyTV<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>150Mbps</strong><br>
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
    id: "13",
    imagePath: "/uploads/package/20230701112554/images/home-net-3-_-368x250--3-1688185554.jpg",
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
    imagePath: "/uploads/package/20230701112620/images/home-net-3-_-368x250--3-1688185580.jpg",
    title: "HOME NET 3 + (nội thành Hà Nội & TP.HCM)",
    price: "1.614.000đ - 7 tháng",
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
    id: "15",
    imagePath: "/uploads/package/20230701112755/images/home-net-4-_-368x250--4-1688185675.jpg",
    title: "HOME NET 4 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.434.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 250Mbps<br>
    180 kênh truyền hình MyTV<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>250Mbps</strong><br>
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
    id: "16",
    imagePath: "/uploads/package/20230701112814/images/home-net-4-_-368x250--4-1688185694.jpg",
    title: "HOME NET 4 + (nội thành Hà Nội & TP.HCM)",
    price: "1.674.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 250Mbps<br>
    180 kênh truyền hình MyTV<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>250Mbps</strong><br>
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
    id: "17",
    imagePath: "/uploads/package/20230701113009/images/home-net-5-_-368x250--5-1688185809.jpg",
    title: "HOME NET 5 + (ngoại thành Hà Nội, TP.HCM & 61 T/TP)",
    price: "1.614.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 300Mbps<br>
    180 kênh truyền hình MyTV<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>300Mbps</strong><br>
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
    id: "18",
    imagePath: "/uploads/package/20230701113030/images/home-net-5-_-368x250--5-1688185830.jpg",
    title: "HOME NET 5 + (nội thành Hà Nội & TP.HCM)",
    price: "1.854.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet tốc độ 300Mbps<br>
    180 kênh truyền hình MyTV<br>
    Dịch vụ bảo mật Internet GreenNet                            </div>`,
    description: `
    <p><strong>1. Ưu đãi gói cước</strong><br>
    - Đường truyền Internet tốc độ&nbsp;<strong>300Mbps</strong><br>
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
    id: "19",
    imagePath: "/uploads/package/20230622043346/images/home-tv-vip_--368x250-1687426426.jpg",
    title: "HOME TV SAFE (Ngoại trừ nội thành HNI,HCM,HPG)",
    price: "1.554.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Gói Home TV Safe là sự kết hợp hoàn hảo khi khách hàng đăng ký có thể sử dụng cùng lúc dịch vụ truyền hình hình tương tác MyTV, dịch vụ Internet tốc độ cao và 2 thiết bị Indoor Camera + Outdoor Camera                            </div>`,
    description: `
    <p><strong>1, Giới thiệu:&nbsp;</strong><br>
    Gói Home TV Safe là sự kết hợp hoàn hảo khi khách hàng đăng ký có thể sử dụng cùng lúc dịch vụ truyền hình hình tương tác MyTV, dịch vụ Internet tốc độ cao và 2 thiết bị Indoor Camera + Outdoor Camera</p>

    <p><strong>2, Ưu đãi:&nbsp;</strong><br>
    - Internet đường truyền tốc độ 150Mbps<br>
    - Truyền hình MyTV gói nâng cao với 177 kênh trong nước &amp; quốc tế (HBO, Fox Movie, Cartoon ..), kèm theo kho giải trí VOD đa dạng, hấp dẫn&nbsp;<br>
    - 01 thiết bị Indoor Camera<br>
    - 01 thiết bị Outdoor Camera<br>
    - 01 thiết bị wifi tiêu chuẩn</p>

    <p>3, Giá cước (áp dụng tại ngoại thành Hà Nội, HCM và các tỉnh thành khác)&nbsp;<br>
    (Giá chỉ từ 207.200đ/tháng khi đóng trước cước)<br>
    - Giá gói 1 tháng (có VAT): 259.000 VNĐ(*)<br>
    - Giá gói 6 tháng (có VAT): 1.554.000 VNĐ– Ưu đãi tặng thêm 1 tháng (*)<br>
    - Giá gói 12 tháng (có VAT): 3.108.000 VNĐ – Ưu đãi tặng thêm 3 tháng (*)</p>`,
  }, {
    id: "20",
    imagePath: "/uploads/package/20230622043431/images/home-tv-vip_--368x250-1687426471.jpg",
    title: "HOME TV SAFE (Nội thành HNI, HCM, HPG)",
    price: "1.734.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Gói Home TV Safe là sự kết hợp hoàn hảo khi khách hàng đăng ký có thể sử dụng cùng lúc dịch vụ truyền hình hình tương tác MyTV, dịch vụ Internet tốc độ cao và 2 thiết bị Indoor Camera + Outdoor Camera                            </div>`,
    description: `
    <p><strong>1, Giới thiệu:&nbsp;</strong><br>
    Gói Home TV Safe là sự kết hợp hoàn hảo khi khách hàng đăng ký có thể sử dụng cùng lúc dịch vụ truyền hình hình tương tác MyTV, dịch vụ Internet tốc độ cao và 2 thiết bị Indoor Camera + Outdoor Camera</p>

    <p><strong>2, Ưu đãi:&nbsp;</strong><br>
    - Internet&nbsp; đường truyền tốc độ 150Mbps<br>
    - Truyền hình MyTV gói nâng cao với 177 kênh trong nước &amp; quốc tế (HBO, Fox Movie, Cartoon ..), kèm theo kho giải trí VOD đa dạng, hấp dẫn&nbsp;<br>
    - 01 thiết bị Indoor Camera<br>
    - 01 thiết bị Outdoor Camera<br>
    - 01 thiết bị wifi tiêu chuẩn</p>

    <p>3, Giá cước (áp dụng tại nội thành Hà Nội, HCM và Hải Phòng)<br>
    (Giá chỉ từ 231.200đ/tháng khi đóng trước cước)<br>
    - Giá gói 1 tháng (có VAT): 289.000 VNĐ(*)<br>
    - Giá gói 6 tháng (có VAT): 1.734.000 VNĐ– Ưu đãi tặng thêm 1 tháng (*)<br>
    - Giá gói 12 tháng (có VAT): 3.468.000 VNĐ – Ưu đãi tặng thêm 3 tháng (*)</p>`,
  }, {
    id: "21",
    imagePath: "/uploads/package/20230622043926/images/home-tv-k--368x250-1687426766.jpg",
    title: "HomeTV VIP (Ngoại trừ nội thành HNI,HCM,HPG)",
    price: "2.154.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet 150Mbps<br>
    Gói truyền hình MyTV (App) nâng cao bao gồm VTVCab<br>
    02 Wifi Mesh (Thiết bị khuếch đại tín hiệu Wifi)                            </div>`,
    description: `
    <p style="text-align:justify">Gói Home TV VIP là gói cước cao cấp bao gồm đường truyền Internet tốc độ cao 150Mbps, cam kết tốc độ quốc tế 1Mbps, truyền hình MyTV. Đặc biệt gói cước có thêm 02 thiết bị khuếch đại tín hiệu Wifi (Wifi Mesh) và quyền lợi CSKH VIP. Trong đó, MyTV là dịch vụ truyền hình đa phương tiện nhằm mang đến cho khách hàng kho giải trí đa dạng, phong phú và trải nghiệm giải trí mới lạ, thú vị nhờ kết cấu màn hình bố trí chuẩn smart TV.</p>

    <p style="text-align:justify">Chỉ với 01 tài khoản duy nhất, quý khách hàng có thể thưởng thức các kênh truyền hình chất lượng cao, truyền hình xem lại và các dịch vụ giải trí đa dạng khác như phim truyện theo yêu cầu, các show truyền hình, Clip âm nhạc, trên các thiết bị thông minh.</p>

    <p style="text-align:justify">Gói MyTV Nâng cao&nbsp;gồm&nbsp;180&nbsp;kênh Truyền hình + chùm kênh&nbsp;VTVCab. Danh sách kênh truyền hình MyTV.</p>

    <p><strong>Ưu đãi&nbsp;sử dụng</strong></p>

    <p>- Đường truyền&nbsp;Internet&nbsp;150Mbps, cam kết tốc độ quốc tế 1Mbps</p>

    <p>- Gói truyền hình MyTV (App)&nbsp;nâng cao bao gồm VTVCab.&nbsp;Danh sách gói kênh truyền hình MyTV &lt;&lt;<a href="https://mytv.com.vn/trang-tinh/dich-vu/ds-kenh-truyen-hinh-mytv" style="color: rgb(0, 123, 255); box-sizing: border-box; text-decoration-line: none; background: transparent; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline;"><span style="color:rgb(255, 204, 0)">Tại đây</span></a>&gt;&gt;</p>

    <p>- 02 Wifi Mesh (Thiết bị khuếch đại tín hiệu Wifi)</p>

    <p><strong>Quyền lợi&nbsp;CSKH đặc biệt</strong></p>

    <p>- Lắp đặt trong vòng 24h</p>

    <p>- Line CSKH VIP 18001166</p>

    <p>- Định kỳ 2 tháng/lần kiểm tra, bảo dưỡng thường xuyên</p>

    <p>- Ưu tiên xử lý sự cố báo hỏng trong vòng 6h</p>

    <p>Giá các&nbsp;gói&nbsp;cước tại nội thành Hà Nội, Tp. HCM, Hải Phòng:&nbsp;</p>

    <p>- Gói hàng tháng:&nbsp;379.000đ</p>

    <p>-&nbsp;Gói 6 tháng: 2.274.000đ</p>

    <p>-&nbsp;Gói 12 tháng:&nbsp;4.548.000đ</p>

    <p>Giá các&nbsp;gói&nbsp;cước tại ngoại thành Hà Nội, Tp. HCM và các tỉnh khác:&nbsp;</p>

    <p>- Gói hàng tháng:&nbsp;359.000đ</p>

    <p>-&nbsp;Gói 6 tháng: 2.154.000đ</p>

    <p>-&nbsp;Gói 12 tháng:&nbsp;4.308.000đ</p>

    <p><em>* Giá gói áp dụng cho khách hàng đăng ký mới từ ngày 26/05/2022.</em></p>

    <p>Khuyến mại:</p>

    <p>- Đăng ký gói 6 tháng khuyến mại 1 tháng</p>

    <p>- Đăng ký gói 12 tháng khuyến mại 3 tháng</p>`,
  }, {
    id: "22",
    imagePath: "/uploads/package/20230622043431/images/home-tv-vip_--368x250-1687426471.jpg",
    title: "HomeTV VIP (Nội thành HNI,HCM,HPG)",
    price: "2.274.000đ - 7 tháng",
    shotDescription: `<div class="short_des">
    Đường truyền Internet 150Mbps<br>
    Gói truyền hình MyTV (App) nâng cao bao gồm VTVCab<br>
    02 Wifi Mesh (Thiết bị khuếch đại tín hiệu Wifi)                            </div>`,
    description: `
    <p style="text-align:justify">Gói Home TV VIP là gói cước cao cấp bao gồm đường truyền Internet tốc độ cao 150Mbps, cam kết tốc độ quốc tế 1Mbps, truyền hình MyTV. Đặc biệt gói cước có thêm 02 thiết bị khuếch đại tín hiệu Wifi (Wifi Mesh) và quyền lợi CSKH VIP. Trong đó, MyTV là dịch vụ truyền hình đa phương tiện nhằm mang đến cho khách hàng kho giải trí đa dạng, phong phú và trải nghiệm giải trí mới lạ, thú vị nhờ kết cấu màn hình bố trí chuẩn smart TV.</p>

    <p style="text-align:justify">Chỉ với 01 tài khoản duy nhất, quý khách hàng có thể thưởng thức các kênh truyền hình chất lượng cao, truyền hình xem lại và các dịch vụ giải trí đa dạng khác như phim truyện theo yêu cầu, các show truyền hình, Clip âm nhạc, trên các thiết bị thông minh.</p>

    <p style="text-align:justify">Gói MyTV Nâng cao&nbsp;gồm&nbsp;180&nbsp;kênh Truyền hình + chùm kênh&nbsp;VTVCab. Danh sách kênh truyền hình MyTV.</p>

    <p><strong>Ưu đãi&nbsp;sử dụng</strong></p>

    <p>- Đường truyền&nbsp;Internet&nbsp;150Mbps, cam kết tốc độ quốc tế 1Mbps</p>

    <p>- Gói truyền hình MyTV (App)&nbsp;nâng cao bao gồm VTVCab.&nbsp;Danh sách gói kênh truyền hình MyTV &lt;&lt;<a href="https://mytv.com.vn/trang-tinh/dich-vu/ds-kenh-truyen-hinh-mytv" style="box-sizing: border-box; color: rgb(0, 123, 255); text-decoration-line: none; background: transparent; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline;"><span style="color:rgb(255, 204, 0)">Tại đây</span></a>&gt;&gt;</p>

    <p>- 02 Wifi Mesh (Thiết bị khuếch đại tín hiệu Wifi)</p>

    <p><strong>Quyền lợi&nbsp;CSKH đặc biệt</strong></p>

    <p>- Lắp đặt trong vòng 24h</p>

    <p>- Line CSKH VIP 18001166</p>

    <p>- Định kỳ 2 tháng/lần kiểm tra, bảo dưỡng thường xuyên</p>

    <p>- Ưu tiên xử lý sự cố báo hỏng trong vòng 6h</p>

    <p>Giá các&nbsp;gói&nbsp;cước tại nội thành Hà Nội, Tp. HCM, Hải Phòng:&nbsp;</p>

    <p>- Gói hàng tháng:&nbsp;379.000đ</p>

    <p>-&nbsp;Gói 6 tháng: 2.274.000đ</p>

    <p>-&nbsp;Gói 12 tháng:&nbsp;4.548.000đ</p>

    <p>Giá các&nbsp;gói&nbsp;cước tại ngoại thành Hà Nội, Tp. HCM và các tỉnh khác:&nbsp;</p>

    <p>- Gói hàng tháng:&nbsp;359.000đ</p>

    <p>-&nbsp;Gói 6 tháng: 2.154.000đ</p>

    <p>-&nbsp;Gói 12 tháng:&nbsp;4.308.000đ</p>

    <p><em>* Giá gói áp dụng cho khách hàng đăng ký mới từ ngày 26/05/2022.</em></p>

    <p>Khuyến mại:</p>

    <p>- Đăng ký gói 6 tháng khuyến mại 1 tháng</p>

    <p>- Đăng ký gói 12 tháng khuyến mại 3 tháng</p>`,
  }, {
    id: "23",
    imagePath: "/uploads/package/20230622043926/images/home-tv-k--368x250-1687426766.jpg",
    title: "HomeTV K+ (Cho SmartTV)",
    price: "2.688.000đ - 7 tháng",
    discountPrice: `1.698.000đ - 7 tháng`,
    shotDescription: `<div class="short_des">
    HomeTV K+ 7 tháng dành cho Smart TV                            </div>`,
    description: `
    <p>- Internet cáp quang t<span style="color:rgb(0, 0, 0)">ốc độ trong nước: <strong>120Mbps</strong>, tốc độ quốc tế trung bình 18Mbps, phù hợp Hộ gia đình có 6 thiết bị truy nhập mạng đồng thời.</span></p>

    <p>- Truyền hình: 151 kênh đặc sắc (67HD + 84SD); kho VOD khổng lồ</p>

    <p>- Đường truyền ưu tiên 200Mbps tới các trang Youtube, Google, Facebook.</p>

    <p>- Thiết bị Wifi 2 băng tần.</p>

    <p>- Đăng ký dễ dàng tiện lợi chỉ bằng 1 CLICK chuột.</p>

    <p>- Gói cước áp dụng cho các KH sử dụng Smart TV</p>

    <p>- Gói cước đã bao gồm truyền hình K+</p>

    <p>- Giá gói đã bao gồm VAT&nbsp;</p>

    <p>- Tặng thêm&nbsp;<span style="color:rgb(0, 0, 205)"><strong>01</strong></span>&nbsp;tháng sử dụng, tổng thời gian sử dụng lên đến&nbsp;<span style="color:rgb(0, 0, 255)"><strong>07</strong></span>&nbsp;tháng</p>

    <p>&nbsp;</p>`,
  }, {
    id: "24",
    imagePath: "/uploads/package/20230622044008/images/home-tv-k--368x250-1687426808.jpg",
    title: "HomeTV K+ (Cho TV thường)",
    price: "2.898.000đ - 7 tháng",
    discountPrice: `2.114.000đ - 7 tháng`,
    shotDescription: `<div class="short_des">
    Gói HomeTV K+ 7 tháng dành cho TV thường                            </div>`,
    description: `
    <p>- Internet cáp quang t<span style="color:rgb(0, 0, 0)">ốc độ trong nước: <strong>120Mbps</strong>, tốc độ quốc tế trung bình 18Mbps, phù hợp Hộ gia đình có 6 thiết bị truy nhập mạng đồng thời.</span></p>

    <p>- Truyền hình: 151 kênh đặc sắc (67HD + 84SD); kho VOD khổng lồ</p>

    <p>- Đường truyền ưu tiên 200Mbps tới các trang Youtube, Google, Facebook.</p>

    <p>- Thiết bị Wifi 2 băng tần.</p>

    <p>- Đăng ký dễ dàng tiện lợi chỉ bằng 1 CLICK chuột.</p>

    <p>- Gói cước áp dụng cho các KH sử dụng TV thường</p>

    <p>- Gói cước đã bao gồm truyền hình K+</p>

    <p>- Giá gói đã bao gồm VAT&nbsp;</p>

    <p>- Tặng thêm&nbsp;<span style="color:rgb(0, 0, 205)"><strong>01</strong></span>&nbsp;tháng sử dụng, tổng thời gian sử dụng lên đến&nbsp;<span style="color:rgb(0, 0, 255)"><strong>07</strong></span>&nbsp;tháng</p>`,
  }];

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
      }
    );
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
