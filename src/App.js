import Header from "./components/Header";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Settings from "./components/Settings";
import { useState } from "react";
import uuid from "react-uuid";

export default function App() {


  // const handleNewPost = (
  //   title,
  //   description,
  //   category,
  //   promote,
  //   status,
  //   picture
  // ) => {
  //   const updatedPosts = [...posts];
  //   updatedPosts.push({
  //     id: uuid(),
  //     title: title,
  //     description,
  //     category,
  //     promote,
  //     status,
  //     picture,
  //     likes: 0,
  //     dislikes: 0,
  //   });
  //   setPosts(updatedPosts);
  // };

  // const handleLike = (id) => {
  //   const updatedPosts = [...posts];
  //   updatedPosts.forEach((post) => {
  //     if (post.id === id) {
  //       post.likes++;
  //     }
  //   });
  //   setPosts(updatedPosts);
  // };

  // const handleDislike = (id) => {
  //   const updatedPosts = [...posts];
  //   updatedPosts.forEach((post) => {
  //     if (post.id === id) {
  //       post.dislikes++;
  //     }
  //   });
  //   setPosts(updatedPosts);
  // } ;

  return (
    <>
      <Header />
      <Posts />
      <Form />
      <Settings />
      <Footer />
    </>
  );
}
