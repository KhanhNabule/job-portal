import React from "react";
import Footer from "./Footer";
import Alert from "react-s-alert";
import { sendMailOfContact } from "../util/APIUtils";
import Home from "./Home.css";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      name: "",
      toEmail: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    console.log(props);
  }
  handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const request = Object.assign({}, this.state);

    sendMailOfContact(request)
      .then((response) => {
        console.log(response);
        Alert.success("Email đã gửi tới ứng viên");
      })
      .catch();
  }
  render() {
    return (
      <main>
        <div class="container-xxl py-5">
          <div class="container">
            <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Thông tin liên hệ
            </h1>
            <div class="row g-4">
              <div class="col-12">
                <div class="row gy-4">
                  <div class="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex align-items-center bg-light rounded p-4">
                      <div
                        class="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i class="fa fa-map-marker-alt text-primary"></i>
                      </div>
                      <span>Thanh Xuân, Hà Nội</span>
                    </div>
                  </div>
                  <div class="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                    <div class="d-flex align-items-center bg-light rounded p-4">
                      <div
                        class="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i class="fa fa-envelope-open text-primary"></i>
                      </div>
                      <span>khanhvuduyit@gmail.com</span>
                    </div>
                  </div>
                  <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                    <div class="d-flex align-items-center bg-light rounded p-4">
                      <div
                        class="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i class="fa fa-phone-alt text-primary"></i>
                      </div>
                      <span>+0944923877</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <iframe
                  class="position-relative rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14898.934376543659!2d105.8433207!3d21.0033135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac773026b415%3A0x499b8b613889f78a!2sHanoi%20University%20of%20Civil%20Engineering!5e0!3m2!1sen!2s!4v1709118748610!5m2!1sen!2s"
                  frameborder="0"
                  style={{ minHeight: "400px", border: "0" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div class="col-md-6">
                <div class="wow fadeInUp" data-wow-delay="0.5s">
                  <p class="mb-4">
                    Nếu có bất cứ thắc mắc hay khiếu nại nào, hãy liên hệ với
                    chúng tôi bằng cách điền biểu mẫu phía dưới.{" "}
                  </p>
                  <form onSubmit={this.handleSubmit}>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Your Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                          />
                          <label for="name">Your Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Your Email"
                            name="toEmail"
                            value={this.state.toEmail}
                            onChange={this.handleInputChange}
                          />
                          <label for="email">Your Email</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            id="subject"
                            placeholder="Subject"
                            name="subject"
                            value={this.state.subject}
                            onChange={this.handleInputChange}
                          />
                          <label for="subject">Subject</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <textarea
                            class="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: "150px" }}
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                          ></textarea>
                          <label for="message">Message</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button
                          class="btn btn-primary w-100 py-3 x-1"
                          type="submit"
                        >
                          <span class="align-middle">Send Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}

export default Contact;
