import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function NotFound() {
  return (
    <div className="NotFound">
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("404.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
};
