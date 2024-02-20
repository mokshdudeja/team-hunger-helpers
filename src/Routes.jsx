import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Twitterlogin = React.lazy(() => import("pages/Twitterlogin"));
const Map = React.lazy(() => import("pages/Map"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Twitterlogin />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/map" element={<Map />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
