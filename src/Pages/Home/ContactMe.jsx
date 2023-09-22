export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <div className="contact--container text-lg ">
        <p className="contact--info--box">
          <span><img src="./img/email.png" className="contact--icon" /></span>
          plu49@wisc.edu
        </p>
        <a href="https://www.linkedin.com/in/pin-chun-lu-b4008a180/"><p className="contact--info--box cursor--pointer">
          <span><img src="./img/linkedin.png" className="contact--icon" /></span>
          LinkedIn: pin-chun-lu</p>
        </a>
      </div>
    </section>
  );
}