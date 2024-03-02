import React, { useEffect } from "react";
import Footer from "./Footer";
import JobFeatures from "./JobFeatures";
import { Link, NavLink } from "react-router-dom";
import AdvertisementFeater from "./AdvertisementFeater";

const Home = () => {
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
                    <h1>Tìm kiếm một công việc phù hợp✨✨✨</h1>
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
                <h2>Công Việc Nổi Bật</h2>
              </div>
            </div>
          </div>
          <JobFeatures />
        </div>
      </section>

      {/* <!-- Online CV Area Start --> */}
      <div
        class="online-cv cv-bg section-overly pt-90 pb-120"
        data-background="assets/img/gallery/cv_bg.jpg"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="cv-caption text-center">
                <p class="pera1">FEATURED TOURS Packages</p>
                <p class="pera2">
                  {" "}
                  Tạo sự khác biệt với sơ yếu lý lịch trực tuyến của bạn!{" "}
                </p>

                <Link to="/login">
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
        <div class="container">
          {/* <!-- Section Tittle --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="section-tittle text-center">
                {/* <span>FEATURED TOURS Packages</span> */}
                <h2>Top ngành nghề nổi bật </h2>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-contnet-center">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-tour"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    <a href="job_listing.html">Design & Creative</a>
                  </h5>
                  {/* <span>(653)</span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-cms"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    <a href="job_listing.html">Design & Development</a>
                  </h5>
                  {/* <span>(658)</span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-report"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    <a href="job_listing.html">Sales & Marketing</a>
                  </h5>
                  {/* <span>(658)</span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-app"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    <a href="job_listing.html">Mobile Application</a>
                  </h5>
                  {/* <span>(658)</span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-helmet"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    <a href="job_listing.html">Construction</a>
                  </h5>
                  {/* <span>(658)</span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-high-tech"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    <a href="job_listing.html">Information Technology</a>
                  </h5>
                  {/* <span>(658)</span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-real-estate"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    <a href="job_listing.html">Real Estate</a>
                  </h5>
                  {/* <span>(658)</span> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-content"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    <a href="job_listing.html">Content Writer</a>
                  </h5>
                  {/* <span>(658)</span> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- More Btn -->
                <!-- Section Button --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="browse-btn2 text-center mt-50">
                <a href="job_listing.html" class="border-btn2">
                  Browse All Sectors
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our Services End --> */}

      <div
        className="apply-process-area apply-bg pt-150 pb-150"
        data-background="assets/img/gallery/how-applybg.png"
      >
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
                  <h5>2. Ứng tuyển công việc</h5>
                  <p>Tốc độ siêu nhanh</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process text-center mb-30">
                <div className="process-ion">
                  <span className="flaticon-tour"></span>
                </div>
                <div className="process-cap">
                  <h5>3. Phù hợp với bạn</h5>
                  <p>Hợp tính cách, tầm hồn và bản thân</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    Nơi cơ hội dành cho mọi người, góp phần tăng số lương nhưng
                    người có việc làm một cách nhanh nhất
                  </p>
                  <p>
                    Hãy đăng kí nhà tuyển dụng để tìm tới những ứng viên tài
                    năng
                  </p>

                  <Link className="btn post-btn" to="/login-recruiter">
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
                  <span>2023</span>
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
