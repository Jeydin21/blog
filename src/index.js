import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Post from "./Post";
import NotFound from "./NotFound";

const routes = [
  { path: "/", element: <Home />, index: true },
  { path: "about", element: <About /> },
  { path: "post/:postId", element: <Post /> },
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