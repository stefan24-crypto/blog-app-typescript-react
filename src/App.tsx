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

//Add Authentication
//Add ability to hover on the image and let an overlay pop up to read more
//Check form double spaces when writing the ariticle. That indicates a new paragraph
// Also have a limit to the number of characters in the title
// And also in the username when signing up

const App: React.FC = () => {
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
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postID" element={<ReadMorePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/add" element={<AddPostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit/:postID" element={<EditPost/>}/>
      </Routes>
    </Layout>
  );
};

export default App;
