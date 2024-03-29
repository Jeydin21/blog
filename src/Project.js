import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Markdown from "./components/Markdown";
import Header from "./components/Header";

export default function Project() {
  const { projectId } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/projects/${projectId}.md`)
      .then((res) => {
        if (!res.ok || res.headers.get("Content-Type").includes("text/html")) {
          throw Error("Not found");
        }
        return res.text();
      })
      .then((text) => {
        const lines = text.split("\n");
        setTitle(lines[0].replace("# ", ""));
        setContent(text);
      })
      .catch(() => {
        fetch("/pages/404.md")
          .then((res) => res.text())
          .then((text) => setContent(text));
      });
  }, [projectId, navigate]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="post">
      <Header />
      <Markdown content={content} />
    </div>
  );
}
