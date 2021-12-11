import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import ReadMorePage from "./Pages/ReadMorePage";
import CategoryPage from "./Pages/CategoryPage";
import AddPostPage from "./Pages/AddPostPage";
import ProfilePage from "./Pages/ProfilePage";

//Add Authentication
//Add ability to hover on the image and let an overlay pop up to read more

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postID" element={<ReadMorePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/add" element={<AddPostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
