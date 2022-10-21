import "./About.css";
import {
  BrandFacebook,
  BrandInstagram,
  BrandGithub,
  BrandLinkedin,
} from "tabler-icons-react";

function About() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://avatars.githubusercontent.com/u/101284406?s=400&u=0c8b65b3abdde14c7d6a573a37570d20722efad4&v=4"
          alt=""
          className="profile-picture"
        />
        <div className="info-container">
          <span className="name">Edin Kučević</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Edin work's in center NIT as a Web developer.
          </span>
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/edinrokica"
                target="_blank"
                rel="noreferrer"
              >
                <BrandFacebook size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/edin.kucevic/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandInstagram size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/edinkucevic"
                target="_blank"
                rel="noreferrer"
              >
                <BrandGithub size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/edin-kucevic-6632a9253/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandLinkedin size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <img
          src="https://pbs.twimg.com/profile_images/1167150397632462850/ogLL-HOT.jpg"
          alt=""
          className="profile-picture"
        />
        <div className="info-container">
          <span className="name">Emir Gegić</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Emir is a mathematician, and he work's in center NIT as a Web
            developer.
          </span>
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/emir.gegic.9"
                target="_blank"
                rel="noreferrer"
              >
                <BrandFacebook size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/emir.gegic.9"
                target="_blank"
                rel="noreferrer"
              >
                <BrandInstagram size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gegeeem"
                target="_blank"
                rel="noreferrer"
              >
                <BrandGithub size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/emir-gegic-3848341b9/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandLinkedin size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <img
          src="https://avatars.githubusercontent.com/u/89378479?v=4"
          alt=""
          className="profile-picture"
        />
        <div className="info-container">
          <span className="name">Dženan Košuta</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Dženan is a mathematician, and he work's in center NIT as a Web
            developer.
          </span>
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/dzenoafc/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandFacebook size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dzenan.kosuta/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandInstagram size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dzenankosuta"
                target="_blank"
                rel="noreferrer"
              >
                <BrandGithub size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dzenan-kosuta/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandLinkedin size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <img
          src="https://avatars.githubusercontent.com/u/100077402?v=4"
          alt=""
          className="profile-picture"
        />
        <div className="info-container">
          <span className="name">Senad Đerlek</span>
          <span className="subtitle">React Developer</span>
          <span className="description">
            Senad work's in center NIT as a Web developer.
          </span>
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/senadddddddddddddd"
                target="_blank"
                rel="noreferrer"
              >
                <BrandFacebook size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/senaaaaddd/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandInstagram size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Senaddd"
                target="_blank"
                rel="noreferrer"
              >
                <BrandGithub size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/senad-djerlek-97625411b/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandLinkedin size={28} strokeWidth={2} color={"#605f60"} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
