import Header from "./components/Header";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { useState } from "react";
import uuid from "react-uuid";
import Playground from "./playground";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: uuid(),
      title: 'Post Title',
      description: 'Description',
      category: 'ent',
      promote: true,
      status: 'p',
      picture: null,
      likes: 0,
      dislikes: 0,
    }
  ]);

  const handleNewPost = (
    title,
    description,
    category,
    promote,
    status,
    picture
  ) => {
    const updatedPosts = [...posts];
    updatedPosts.push({
      id: uuid(),
      title: title,
      description,
      category,
      promote,
      status,
      picture,
      likes: 0,
      dislikes: 0,
    });
    setPosts(updatedPosts);
  };

  const handleLike = (id) => {
    const updatedPosts = [...posts];
    updatedPosts.forEach((post) => {
      if (post.id === id) {
        post.likes++;
      }
    });
    setPosts(updatedPosts);
  };

  const handleDislike = (id) => {
    const updatedPosts = [...posts];
    updatedPosts.forEach((post) => {
      if (post.id === id) {
        post.dislikes++;
      }
    });
    setPosts(updatedPosts);
  };

  return (
    // <>
    //   <Header />
    //   <Posts posts={posts} onLike={handleLike} onDislike={handleDislike} />
    //   <Form onNewPost={handleNewPost} />
    //   <Footer />
    // </>
    <Playground />
  );
}
