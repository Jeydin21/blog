import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Post from "./Post";
import NotFound from "./NotFound";
import Posts from "./Posts";

const routes = [
  { path: "/", element: <Home />, index: true },
  { path: "projects", element: <Projects /> },
  { path: "contact", element: <Contact /> },
  { path: "posts", element: <Posts /> },
  { path: "posts/:postId", element: <Post /> },
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <Routes>
        {routes.map(({ path, element, index = false }, key) => (
          <Route key={key} path={path} element={element} index={index} />
        ))}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
  rootElement
);