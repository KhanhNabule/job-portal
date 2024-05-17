import React from "react";
import { Link } from "react-router-dom";

import { getAllJobs } from "../util/APIUtils";

class JobFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listJob: [],
    };

    this.loadJob = this.loadJob.bind(this);
  }

  loadJob() {
    getAllJobs(1, 100, "", "", "", "", "", "") // Lấy tất cả công việc
      .then((response) => {
        console.log("Response:", response);
        // Sắp xếp danh sách công việc theo ID giảm dần
        const sortedJobs = response.content
          .sort((a, b) => b.id - a.id)
          .slice(0, 3);
        this.setState({
          listJob: sortedJobs,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  }

  monthOf(date) {
    return date.getMonth() + 1;
  }

  componentDidMount() {
    this.loadJob();
  }

  render() {
    const { listJob } = this.state;

    return (
      <div className="row justify-content-center">
        <div className="col-xl-10">
          {listJob.map((job) => (
            <div
              className="single-job-items mb-30"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
              }}
              key={job.id}
            >
              <div className="job-items">
                <div className="company-img">
                  <a href={`/job-detail/${job.id}`}>
                    <div>
                      <img
                        src={
                          job.recruiter.company.image === null
                            ? ""
                            : job.recruiter.company.image.indexOf("http") !== -1
                            ? job.recruiter.company.image
                            : `http://localhost:8080/image/` +
                              job.recruiter.company.image.replace(
                                "photographer/files/",
                                ""
                              )
                        }
                        alt="Logo"
                        style={{ height: "100px", width: "100px" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="job-tittle job-tittle2">
                  <a href={`/job-detail/${job.id}`}>
                    <ul>
                      <h3>{job.jobTitle}</h3>
                    </ul>
                  </a>

                  <ul style={{ display: "flex", alignItems: "center" }}>
                    <li>{job.recruiter.company.name}</li>

                    <li style={{ marginLeft: "auto" }}>
                      {job.minSalary} - {job.maxSalary} triệu
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      {job.address}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-link items-link2 f-right">
                <a href={`/job-detail/${job.id}`}>Xem ngay</a>
                <span>
                  {"Hạn: " +
                    new Date(job.deadline).getDate() +
                    " - " +
                    this.monthOf(new Date(job.deadline)) +
                    " - " +
                    new Date(job.deadline).getFullYear()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default JobFeatures;
