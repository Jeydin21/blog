import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
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

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
};
