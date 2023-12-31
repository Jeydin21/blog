import { useEffect, useState } from "react";
import Markdown from "./components/Markdown";
import Header from "./components/Header";

export default function About() {
  return (
    <div className="About">
      <Header />
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");
  const [title] = useState("Jeydin21 | Projects");

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    fetch("/pages/projects.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return <Markdown content={content} />;
};
