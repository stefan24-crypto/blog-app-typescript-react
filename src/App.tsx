import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import ReadMorePage from "./Pages/ReadMorePage";
import CategoryPage from "./Pages/CategoryPage";
import AddPostPage from "./Pages/AddPostPage";
import LoginPage from "./Pages/LoginPage";
import { useAppDispatch } from "./store/hooks";
import { auth } from "./firebase";
import { authActions } from "./store/auth-slice";
import ProfilePage from "./Pages/ProfilePage";
import EditPost from "./components/EditPost/EditPost";
import { db } from "./firebase";

const App: React.FC = () => {
  //Authentication
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(authActions.setCurUser(authUser));
      } else {
        dispatch(authActions.setCurUser(null));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //Data
  useEffect(() => {}, []);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postID" element={<ReadMorePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/add" element={<AddPostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit/:postID" element={<EditPost />} />
      </Routes>
    </Layout>
  );
};

export default App;
