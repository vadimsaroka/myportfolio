import "./ContactForm.scss";

class ContactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      success: false,
      name: "",
      email: "",
      message: "",
      nameVal: true,
      emailVal: true
    };
  }

  renderName = () => {
    if (!this.state.nameVal) {
      return (
        <div
          className="contact__success"
          style={{ opacity: "0.7", height: "100%", background: "#dc3545" }}
        >
          <p>Please input name between 3 and 25 characters</p>
        </div>
      );
    } else {
      return (
        <div className="contact__success" style={{ opacity: 0, height: "0" }} />
      );
    }
  };

  renderEmail = () => {
    if (!this.state.emailVal) {
      return (
        <div
          className="contact__success"
          style={{ opacity: "0.7", height: "100%", background: "#dc3545" }}
        >
          <p>You have entered an invalid email address!</p>
        </div>
      );
    } else {
      return (
        <div className="contact__success" style={{ opacity: 0, height: "0" }} />
      );
    }
  };

  renderSuccess = () => {
    if (this.state.success) {
      setTimeout(() => {
        this.setState({
          success: false,
          name: "",
          email: "",
          message: ""
        });
        grecaptcha.reset();
      }, 5000);
      return (
        <div
          className="contact__success"
          style={{ opacity: "0.7", height: "100%" }}
        >
          <p>Your message was sent successfully. Thanks!</p>
        </div>
      );
    } else {
      return (
        <div className="contact__success" style={{ opacity: 0, height: "0" }} />
      );
    }
  };

  onChangeNameHandler = e => {
    this.setState({ name: e.target.value });
  };

  onChangeEmailHandler = e => {
    this.setState({ email: e.target.value });
  };

  onChangeMessageHandler = e => {
    this.setState({ message: e.target.value });
  };

  //reCaptcha
  submitBtn = () => {
    document.querySelector(".contact__btn").style.cursor = "pointer";
    document.querySelector(".contact__btn").removeAttribute("disabled");
  };

  componentDidMount() {
    const onRecaptchaLoad = setInterval(() => {
      grecaptcha.render("html_element", {
        sitekey: "6LfP1a0UAAAAAGBtKNL4mTqKPm49SpvHPu4RJNNw",
        callback: this.submitBtn
      });
      clearInterval(onRecaptchaLoad);
    }, 800);
  }

  nameValidation = () => {
    if (3 > this.state.name.length || this.state.name.length > 25) {
      this.setState({ nameVal: false });
      setTimeout(() => {
        this.setState({
          nameVal: true
        });
      }, 5000);
    }
  };

  emailValidation = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email.match(mailformat)) {
      this.setState({ emailVal: false });
      setTimeout(() => {
        this.setState({
          emailVal: true
        });
      }, 5000);
    }
  };

  onSubmitHandler = e => {
    this.nameValidation();
    this.emailValidation();

    e.preventDefault();

    const Userdata = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    if (
      this.state.nameVal &&
      this.state.emailVal &&
      this.state.name !== "" &&
      this.state.email !== ""
    ) {
      this.setState({
        success: true,
        nameVal: true,
        emailVal: true
      });

      fetch("/contact", {
        method: "POST",
        body: JSON.stringify(Userdata),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
          console.log("Successful" + data);
        });
      });
    }
  };

  render() {
    return (
      <div className="contact__wrapper">
        <h1 className="contact__header">
          Have a question or want to work together ?
        </h1>
        <div className="contact">
          <form className="contact__form" onSubmit={this.onSubmitHandler}>
            <label htmlFor="name">
              Name<span className="contact__span">*</span>
            </label>
            <input
              onChange={this.onChangeNameHandler}
              className="contact__input"
              id="name"
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Name"
            />
            {this.renderName()}
            <label htmlFor="email">
              Email<span className="contact__span">*</span>
            </label>
            <input
              onChange={this.onChangeEmailHandler}
              className="contact__input"
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              placeholder="Enter email"
            />
            {this.renderEmail()}
            <label htmlFor="message">Message</label>
            <textarea
              onChange={this.onChangeMessageHandler}
              className="contact__input"
              id="message"
              type="text"
              name="message"
              value={this.state.message}
              placeholder="Your Message"
            />
            <div
              id="html_element"
              style={{ position: "inherit", opacity: "0.7" }}
            />
            {this.renderSuccess()}
            <input
              type="submit"
              className="contact__btn"
              value="Submit"
              disabled
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
