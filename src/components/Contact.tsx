import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-section-inner section-container">
        <div className="contact-container">
          <div className="contact-flex">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="vaanikamboj12@gmail.com" data-cursor="disable">
                  vaanikamboj12@gmail.com
                </a>
              </p>
              <h4>Phone</h4>
              <p>
                <a href="tel:+91-6398162450" data-cursor="disable">
                  +91 63981 62450
                </a>
              </p>
              <h4>Education</h4>
              <p>
                Post-Graduation Program in Data Science
                <br />
                Bachelor of Commerce (Accounting & Statistics)
              </p>
            </div>
            <div className="contact-box">
              <h4>Social</h4>
              <a
                href="https://github.com/Vani-kamboj"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/vani-kamboj-629174208/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
            </div>
            <div className="contact-box">
              <h2>
              Built with passion <br /> by <span>Vani Kamboj</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
