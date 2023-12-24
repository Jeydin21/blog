import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Header from "./components/Header";

export default function Post() {
  const { postId } = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/pages/${postId}.md`)
      .then((res) => {
        if (!res.ok || res.headers.get('Content-Type').includes('text/html')) {
          throw Error('Not found');
        }
        return res.text();
      })
      .then((text) => setContent(text))
      .catch(() => {
        fetch('/pages/404.md')
          .then((res) => res.text())
          .then((text) => setContent(text));
      });
  }, [postId, navigate]);

  return (
    <div className="post">
      <Header />
      <ReactMarkdown children={content} />
    </div>
  );
}