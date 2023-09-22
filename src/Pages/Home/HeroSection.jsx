import pdf from "../../data/Resume_PinChunLU.pdf";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">I'm Pin Chun Lu</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Graduate Student </span>{" "}
                        <br />
                        at UW-Madison
                    </h1>
                    <p className="hero--section-description">
                        Actively seeking for a summer internship in 2024
                        <br />Interested in web application, and backend
                    </p>
                </div>
                <div className="hero--section--intro--container">
                    <div className="btn-container">
                        <a href={pdf} target="_blank"
                            rel="noreferrer">
                            <button
                                className="btn btn-color-2"
                                onclick="window.open('./public/Resume_PinChunLU.pdf')"
                            >
                                Download CV
                            </button>
                        </a>
                    </div>
                    <div id="socials-container">
                        <a href="https://www.linkedin.com/in/pin-chun-lu-b4008a180/">
                            <img
                                src="./img/linkedin.png"
                                height="50px"
                                alt="My LinkedIn profile"
                                className="icon"
                            />
                        </a>
                        <a href="https://github.com/estella00911"><img
                            src="./img/github.png"
                            height="50px"
                            alt="My Github profile"
                            className="icon"
                        /></a>
                    </div>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/chun.jpg" width="300px" alt="Hero Section" />
            </div>
        </section>
    );
}