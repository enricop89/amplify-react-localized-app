import { createContext } from "react";

const UserLanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});

export default UserLanguageContext;
