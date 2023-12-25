import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "./components/Header";

export default function Posts() {
  return (
    <div className="Posts">
      <Header />
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");
  const [title] = useState("Jeydin21 | Posts");

  useEffect(() => {
    document.title = title;  
  }, [title]);

  useEffect(() => {
    fetch("/pages/posts.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
};
