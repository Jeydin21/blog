import { useEffect, useState } from "react";
import Markdown from "./components/Markdown";
import Header from "./components/Header";
import Border from "./components/Border";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const [upperContent, setUpperContent] = useState("");
  const [lowerContent, setLowerContent] = useState("");
  const [title] = useState("Jeydin21 | Home");

  useEffect(() => {
    document.title = title;  
  }, [title]);

  useEffect(() => {
    fetch("/pages/home.md")
      .then((res) => res.text())
      .then((text) => setUpperContent(text));
    fetch("/pages/posts.md")
      .then((res) => res.text())
      .then((text) => setLowerContent(text));
  }, []);

  return (
    <div className="post">
      <Markdown content={upperContent} />
      <Border />
      <Markdown content={lowerContent} />
    </div>
  );
};