import style from "../LinkedInButton/LinkedInButton.module.css";
// import linkedin from "../../assets/linkedin.png";
import { Link } from "react-router-dom";

export default function LinkedInButton() {
  const linkedInURL = "https://www.linkedin.com/in/hernandoRey";

  return (
    <Link className={style.container} to={linkedInURL}>
      <span className="linkedin-text">LinkedIn</span>
    </Link>
  );
}
// <span className={style.container.icon}>
//   {/* <img src={linkedin} alt="LinkedIn" className="linkedin-icon" /> */}
//   <span className="linkedin-text">LinkedIn</span>
// </span>;
