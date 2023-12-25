import { useEffect, useState } from "react";
import Markdown from "./components/Markdown";
import Header from "./components/Header";

export default function Contact() {
  return (
    <div className="contact">
      <Header />
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");
  const [title] = useState("Jeydin21 | Contact");

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    fetch("/pages/contact.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return <Markdown content={content} />;
};
