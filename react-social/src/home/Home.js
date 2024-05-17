import React, { useEffect } from "react";
import Footer from "./Footer";
import JobFeatures from "./JobFeatures";
import { Link, NavLink } from "react-router-dom";
import AdvertisementFeater from "./AdvertisementFeater";

const Home = ({ numberOfElements }) => {
  return (
    <main>
      <div className="slider-area ">
        <div className="slider-active">
          <div
            className="single-slider slider-height d-flex align-items-center"
            style={{ backgroundImage: "url(../assets/img/hero/h1_hero.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-9 col-md-10">
                  <div className="hero__caption">
                    <h1 style={{ width: "950px" }}>
                      Bạn muốn tìm kiếm một công việc phù hợp✨✨
                    </h1>
                    <Link to="/job-list">
                      <h1 style={{ width: "900px", color: "#009643" }}>
                        Khám phá ngay
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="featured-job-area feature-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center">
                {/* <span>✨✨✨</span> */}
                <span>Công việc gần đây</span>
                <h2>Công Việc Mới Nhất</h2>
              </div>
            </div>
          </div>
          <JobFeatures />
        </div>
      </section>

      {/* <!-- Online CV Area Start --> */}

      <div class="online-cv cv-bg section-overly pt-90 pb-120 banner-background">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="cv-caption text-center">
                <p class="pera1">FEATURED TOURS Packages</p>
                <p class="pera2">
                  {" "}
                  Tạo sự khác biệt với sơ yếu lý lịch trực tuyến của bạn!{" "}
                </p>

                <Link to="/cv-manager">
                  <a href="#" class="border-btn2 border-btn4">
                    Upload your cv
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Online CV Area End--> */}
      <div class="our-services section-pad-t30">
        <div className="support-company-area support-padding fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  <div className="section-tittle section-tittle2">
                    <span>Chúng tôi đang làm gì</span>
                    <h2>Nơi tìm kiếm việc làm</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Nơi cơ hội dành cho mọi người, góp phần tăng số lượng
                      những người có việc làm một cách nhanh nhất
                    </p>
                    <p style={{ fontSize: "20px" }}>
                      Hãy đăng kí nhà tuyển dụng để tìm tới những ứng viên tài
                      năng
                    </p>

                    <Link
                      className="btn btn-primary head-btn2"
                      to="/login-recruiter"
                    >
                      Đăng Tuyển
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/service/support-img.jpg" alt="" />
                  <div className="support-img-cap text-center">
                    <p>Since</p>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="apply-process-area apply-bg pt-150 pb-150 apply-background">
        <div className="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-tittle white-text text-center">
                <span>Quá trình ứng tuyển</span>
                <h2> Các bước vận hành</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-process text-center mb-30">
                <div className="process-ion">
                  <span className="flaticon-search"></span>
                </div>
                <div className="process-cap">
                  <h5>1. Tìm kiếm công việc</h5>
                  <p>Nhanh chóng dễ dàng</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process text-center mb-30">
                <div className="process-ion">
                  <span className="flaticon-curriculum-vitae"></span>
                </div>
                <div className="process-cap">
                  <h5>2. Phù hợp với bạn</h5>
                  <p>Hợp tính cách, tầm hồn và bản thân</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process text-center mb-30">
                <div className="process-ion">
                  <span className="flaticon-tour"></span>
                </div>
                <div className="process-cap">
                  <h5>3. Ứng tuyển công việc</h5>
                  <p>Tốc độ siêu nhanh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-blog-area blog-h-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center">
                <span>Quảng Cáo</span>
                <h2>Quảng cáo gần đây</h2>
              </div>
            </div>
          </div>

          <AdvertisementFeater />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
