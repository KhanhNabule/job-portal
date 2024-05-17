import React, { useEffect } from "react";

const Footer = () => {
  // useEffect(() => {
  //   (function (d, m) {
  //     var kommunicateSettings = {
  //       appId: "1923fe465772b674c05031428cc014d28",
  //       popupWidget: true,
  //       automaticChatOpenOnNavigation: true,
  //     };
  //     var s = document.createElement("script");
  //     s.type = "text/javascript";
  //     s.async = true;
  //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //     var h = document.getElementsByTagName("head")[0];
  //     h.appendChild(s);
  //     window.kommunicate = m;
  //     m._globals = kommunicateSettings;
  //   })(document, window.kommunicate || {});
  // }, []);

  return (
    <footer>
      <div class="footer-area footer-bg footer-padding">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-footer-caption mb-50">
                <div class="single-footer-caption mb-30">
                  <div class="footer-tittle">
                    <h4>Về chúng tôi</h4>
                    <div class="footer-pera">
                      <p>
                        Giúp đỡ hàng triệu người tìm được việc làm, góp phần
                        giảm thiểu thất nghiệp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                  <h4>Liên Hệ</h4>
                  <ul>
                    <li>
                      <p>Address: 59 Giai Phong, Hanoi.</p>
                    </li>
                    <li>
                      <a href="#">Phone : +84977923877</a>
                    </li>
                    <li>
                      <a href="#">Email : khanhvuduyit@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                  <h4>Trang Liên Quan</h4>
                  <ul>
                    <li>
                      <a href="#"> Tin tuyển dụng</a>
                    </li>
                    <li>
                      <a href="#">Quảng cáo</a>
                    </li>
                    <li>
                      <a href="#">Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                  <h4>Bản Tin</h4>
                  <div class="footer-pera footer-pera2">
                    <ul>
                      <li>
                        <a
                          href="https://www.mpi.gov.vn/portal/Pages/2024-4-9/Tinh-hinh-lao-dong-viec-lam-lam-quy-I-nam-2024-l5urwe.aspx#:~:text=Trong%20qu%C3%BD%20I%2F2024%2C%20s%E1%BB%91,lao%20%C4%91%E1%BB%99ng%20c%C3%B3%20vi%E1%BB%87c%20l%C3%A0m."
                          target="_blank"
                        >
                          Tình hình lao động, việc làm làm quý I năm 2024
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vneconomy.vn/tiem-an-rui-ro-thi-truong-lao-dong-nam-2024-kho-khoi-sac.htm"
                          target="_blank"
                        >
                          Tiềm ẩn rủi ro, thị trường lao động năm 2024 khó khởi
                          sắc
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="footer-form">
                    <div id="mc_embed_signup">
                      <div class="mt-10 info"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row footer-wejed justify-content-between">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="footer-logo mb-20">
                <a href="index.html">
                  <img src="assets/img/logo/logo2_footer.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="footer-tittle-bottom">
                <span>5000+</span>
                <p>Talented Hunter</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="footer-tittle-bottom">
                <span>451</span>
                <p>Talented Hunter</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="footer-tittle-bottom">
                <span>568</span>
                <p>Talented Hunter</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom-area footer-bg">
        <div class="container">
          <div class="footer-border">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-xl-10 col-lg-10 ">
                <div class="footer-copy-right">
                  <p>
                    {/* Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | Vu Duy Khanh
                    {/* This template is made with{" "}
                    <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a href="#" target="_blank">
                      Vu Duy Khanh
                    </a> */}
                  </p>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2">
                <div class="footer-social f-right">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-globe"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
