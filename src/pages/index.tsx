import { useState } from "react";
import { Button } from "../../components/ui/button";

export default function Home() {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const content = { ... }; // El contenido se mantiene igual, por brevedad lo omito aquí

  const data = content[language];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Todo el JSX se mantiene igual */}
    </div>
  );
}
