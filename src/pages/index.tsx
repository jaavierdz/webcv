import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };


  const data = content[language];

  return (
    <div className="p-6 max-w-3xl mx-auto">
    </div>
  );
}
