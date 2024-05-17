import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
class NotFound extends Component {
  render() {
    const { pathname } = this.props.location;

    // Kiểm tra URL và chỉ hiển thị NotFound khi cần
    if (
      ![
        "/admin",
        "/recruiter",
        "/job-list",
        "/advertisement" /* ...other valid paths */,
      ].includes(pathname) &&
      !pathname.startsWith("/recruiter/") &&
      !pathname.startsWith("/admin/") &&
      !pathname.startsWith("/recruitment/job/") &&
      !pathname.startsWith("/recruitment/send-email/")
    ) {
      return (
        <div className="page-not-found">
          <h1 className="title">404</h1>
          <div className="desc">The Page you're looking for was not found.</div>
          <Link to="/">
            <button className="go-back-btn btn btn-primary" type="button">
              Go Back
            </button>
          </Link>
        </div>
      );
    }

    return null;
  }
}

export default NotFound;
