import { useEffect, useState } from "react";
import Markdown from "./components/Markdown";
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

  return <Markdown content={content} />;
};
