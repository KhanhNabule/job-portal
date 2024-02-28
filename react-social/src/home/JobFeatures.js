import React from "react";
import { Link, NavLink } from "react-router-dom";

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
    getAllJobs(1, 5, "", "", "", "", "", "")
      .then((response) => {
        console.log("Response:", response);
        this.setState({
          listJob: response.content,
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
    let list = this.state.listJob;
    list.map((job) => console.log(job));
    return (
      <div class="row justify-content-center">
        <div class="col-xl-10">
          {list.map((job) => {
            if (job.status === "ENABLE") {
              return (
                <div class="single-job-items mb-30">
                  <div class="job-items">
                    <div class="company-img">
                      <Link to={`/job-detail/${job.id}`}>
                        <img
                          src={
                            job.recruiter.company.image === null
                              ? ""
                              : job.recruiter.company.image.indexOf("http") !==
                                -1
                              ? job.recruiter.company.image
                              : `http://localhost:8080/image/` +
                                job.recruiter.company.image.replace(
                                  "photographer/files/",
                                  ""
                                )
                          }
                          alt="Logo"
                          style={{ height: "80px", width: "80px" }}
                        />
                      </Link>
                    </div>
                    <div class="job-tittle job-tittle2">
                      <Link to={`/job-detail/${job.id}`}>
                        <h4>{job.jobTitle}</h4>
                      </Link>

                      <ul>
                        <li>{job.recruiter.company.name}</li>
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          {job.address}
                        </li>
                        <li>
                          {job.minSalary}VND - {job.maxSalary}VND
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="items-link items-link2 f-right">
                    <Link to={`/job-detail/${job.id}`}>{job.level}</Link>
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
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default JobFeatures;
