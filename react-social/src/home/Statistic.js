import React, { useState, useEffect } from "react";
import SidebarNav from "../admin/SidebarNav";
import { Redirect } from "react-router-dom";
import Nav from "../admin/Nav";
import { getAllJobs, getCategory } from "../util/APIUtils";
import Home from "./Home";

const Statistic = (props) => {
  const [authenticated, setAuthenticated] = useState(props.authenticated);
  const [roleName, setRoleName] = useState(props.roleName);
  const [listJob, setListJob] = useState([]);
  const [jobName, setJobName] = useState("");
  const [level, setLevel] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [listAdvertisment, setListAdvertisment] = useState([]);
  const [categoryStats, setCategoryStats] = useState({});

  useEffect(() => {
    setAuthenticated(props.authenticated);
    setRoleName(props.roleName);
  }, [props.authenticated, props.roleName]);

  useEffect(() => {
    getCategory(1, 1000)
      .then((response) => {
        console.log("Category Response:", response);
        setListAdvertisment(response.content);
        loadCategoryStats(response.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const loadCategoryStats = async (categories) => {
    try {
      const categoryIds = categories.map((category) => category.id);
      const requests = categoryIds.map((categoryId) => {
        return getAllJobs(1, 1, "", "", "", "", "", categoryId);
      });

      const responses = await Promise.all(requests);
      const stats = {};

      responses.forEach((response, index) => {
        stats[categoryIds[index]] = response.totalElements;
      });

      console.log("Category Stats:", stats);
      setCategoryStats(stats);
    } catch (error) {
      console.error(error);
    }
  };

  const totalJobs = Object.values(categoryStats).reduce(
    (acc, count) => acc + count,
    0
  );

  if (!authenticated || roleName !== "ROLE_ADMIN") {
    return (
      <Redirect
        to={{
          pathname: "/login-admin",
          state: { from: props.location },
        }}
      />
    );
  }

  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="index.html">
            <span className="align-middle">ADMIN PRO</span>
          </a>
          <SidebarNav />
        </div>
      </nav>
      <div className="main">
        <Nav onLogout={props.onLogout} />

        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">
              <div class="col-lg-6 mb-4">
                <h1>Thống kê</h1>
                <div class="card bg-success text-white shadow">
                  <div class="card-body">Tổng số công việc: {totalJobs}</div>
                </div>
              </div>
            </h1>
          </div>
          <div className="our-services">
            <div className="container">
              <div className="row d-flex justify-contnet-center">
                {listAdvertisment.map((category) => (
                  <div
                    className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
                    key={category.id}
                  >
                    <div className="single-services text-center mb-30">
                      <div className="services-ion">
                        {category.id === 1 && (
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/top-categories/it-phan-mem.png?v=2"
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        )}
                        {category.id === 2 && (
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/top-categories/marketing-truyen-thong-quang-cao.png?v=2"
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        )}
                        {category.id === 3 && (
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/top-categories/hanh-chinh-van-phong.png?v=2"
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        )}
                        {category.id === 4 && (
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/top-categories/giao-duc-dao-tao.png?v=2"
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        )}

                        {category.id === 5 && (
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/top-categories/tu-van.png?v=2"
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        )}
                        {category.id === 6 && (
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/top-categories/van-tai-kho-van.png?v=2"
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        )}
                        {category.id === 7 && (
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/top-categories/ke-toan-kiem-toan.png?v=2"
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        )}
                        {category.id === 8 && (
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/top-categories/kinh-doanh-ban-hang.png?v=2"
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        )}
                        {category.id === 9 && (
                          <img
                            src=" https://www.topcv.vn/v4/image/welcome/top-categories/nhan-su.png?v=2"
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        )}
                      </div>
                      <div className="services-cap">
                        <h5>
                          <a href="#">{category.name}</a>
                        </h5>
                        <span>({categoryStats[category.id] || 0})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Statistic;
