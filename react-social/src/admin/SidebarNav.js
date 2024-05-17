import React from "react";
import { Link, NavLink } from "react-router-dom";

class SidebarNav extends React.Component {
  render() {
    return (
      <ul className="sidebar-nav">
        <li className="sidebar-header">Quản lí</li>

        <li className="sidebar-item">
          <NavLink to="/admin/account-manager" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i>{" "}
            <span className="align-middle">Quản lý tài khoản</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/admin/job-manager" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i>{" "}
            <span className="align-middle">Quản lý tin tuyển dụng</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/admin/advertisement-manager" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i>{" "}
            <span className="align-middle">Quản lý tin quảng cáo</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/admin/add-advertisement" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i>{" "}
            <span className="align-middle">Thêm tin quảng cáo</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/admin/category-manager" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i>{" "}
            <span className="align-middle">Quản lý danh mục ngành</span>
          </NavLink>
        </li>

        <li className="sidebar-item">
          <NavLink to="/admin/add-category" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i>{" "}
            <span className="align-middle">Thêm danh mục ngành</span>
          </NavLink>
        </li>

        <li className="sidebar-item">
          <NavLink to="/admin/statistic" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i>{" "}
            <span className="align-middle">Thống kê</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default SidebarNav;
