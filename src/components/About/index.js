import { I18n } from "aws-amplify";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="aboutSection">
      <p>{I18n.get("aboutTitle")}</p>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </section>
  );
}

export default About;
