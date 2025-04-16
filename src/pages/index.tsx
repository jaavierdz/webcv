import { useState } from "react";
import { Button } from "../components/ui/button";

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const content = {
    es: {
      name: "Javier Rodríguez-Alarcón Iglesias",
      title: "Personal de Eventos",
      email: "javier@javierdz.me",
      location: "Madrid Capital",
      profile:
          "Soy estudiante de primer curso de Sistemas Microinformáticos y Redes. Me apasiona la ciberseguridad, la informática, la programación y me gusta trabajar en equipo. Mi objetivo profesional es incorporarme a una empresa donde pueda llevar a cabo funciones relacionadas con mi título de Sistemas Microinformáticos y Redes, aportar todos los conocimientos que he adquirido en mi etapa educativa y seguir aprendiendo, formándome y creciendo profesionalmente.",
      links: [
        { label: "LinkedIn", url: "https://go.javierdz.me/linkedin" },
        { label: "GitHub", url: "https://go.javierdz.me/github" },
        { label: "Certificado AWS", url: "https://www.credly.com/badges/5c42f482-12b9-412c-bada-57438185b716/linked_in_profile" }
      ]
    },
    en: {
      name: "Javier Rodríguez-Alarcón Iglesias",
      title: "Event Staff",
      email: "javier@javierdz.me",
      location: "Madrid, Spain",
      profile:
          "I am a first-year student of Microcomputer Systems and Networks. I am passionate about cybersecurity, IT, programming, and I enjoy teamwork. My career goal is to join a company where I can perform tasks related to my degree, contribute my knowledge, and continue learning, training, and growing professionally.",
      links: [
        { label: "LinkedIn", url: "https://go.javierdz.me/linkedin" },
        { label: "GitHub", url: "https://go.javierdz.me/github" },
        { label: "AWS Certificate", url: "https://www.credly.com/badges/5c42f482-12b9-412c-bada-57438185b716/linked_in_profile" }
      ]
    }
  };

  const data = content[language];

  return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <Button onClick={toggleLanguage}>
            {language === "es" ? "English" : "Español"}
          </Button>
        </div>
        <p className="text-lg font-medium text-gray-700">{data.title}</p>
        <p className="text-sm text-gray-500">
          {data.email} • {data.location}
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            {language === "es" ? "Perfil" : "Profile"}
          </h2>
          <p>{data.profile}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            {language === "es" ? "Enlaces" : "Links"}
          </h2>
          <ul className="list-disc list-inside">
            {data.links.map((link, i) => (
                <li key={i}>
                  <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                  >
                    {link.label}
                  </a>
                </li>
            ))}
          </ul>
        </section>
      </div>
  );
}
