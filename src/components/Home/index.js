import { useContext, useState } from "react";
import { I18n } from "aws-amplify";
import { Link } from "react-router-dom";
import UserLanguageContext from "./../../context/languageContext";

function Home() {
  const { language, setLanguage } = useContext(UserLanguageContext);

  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const onLanguageChange = (e) => {
    const l = e.target.value;
    console.log("setLang component", l);
    setSelectedLanguage(l);
    I18n.setLanguage(l);
    setLanguage(l);
    localStorage.setItem("lang", l);
  };
  return (
    <section id="mainSection">
      <p>{I18n.get("mainTitle")}</p>
      <p>{I18n.get("secondaryTitle")}</p>
      <p>
        Go to <Link to="about">About Us</Link>
      </p>
      <div className="ml-10 space-x-4">
        <select
          id="language"
          name="language"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          onChange={onLanguageChange}
          value={selectedLanguage}
        >
          <option label="EN" value="en"></option>
          <option label="IT" value="it"></option>
        </select>
      </div>
    </section>
  );
}

export default Home;
