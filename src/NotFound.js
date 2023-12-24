import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "./components/Header";

export default function NotFound() {
  return (
    <div className="NotFound">
      <Header />
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");
  const [title] = useState("Jeydin21 | 404");

  useEffect(() => {
    document.title = title; // Set the document title
  }, [title]);

  useEffect(() => {
    fetch("/pages/404.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
};
