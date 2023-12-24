import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

export default function Post() {
  return (
    <div className="Post">
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const { postId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/pages/${postId}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [postId]);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
};
