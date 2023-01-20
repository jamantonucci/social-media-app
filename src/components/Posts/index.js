import Post from "./Post";
import { useState } from "react";
import uuid from "react-uuid";

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: uuid(),
      title: "What is this?",
      likes: 2,
      dislikes: 7,
    },
    {
      id: uuid(),
      title: "How do I do it?",
      likes: 0,
      dislikes: 8,
    },
    {
      id: uuid(),
      title: "Where do I find it?",
      likes: 2,
      dislikes: 2,
    },
  ]);

  const handleNewPost = () => {
    const updatedPosts = [...posts];
    updatedPosts.push({
      id: uuid(),
      title: "New Post",
      likes: 0,
      dislikes: 0,
    });
    setPosts(updatedPosts);
  };

  let totalLikes = 0;
  let totalDislikes = 0;
  posts.forEach((post) => {
    totalLikes += post.likes;
    totalDislikes += post.dislikes;
  });

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
    <main>
      {posts.map((post, index) => (
        <Post
          key={index}
          id={post.id}
          title={post.title}
          likes={post.likes}
          dislikes={post.dislikes}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ))}
      <button onClick={handleNewPost}>New Post</button>
      <div>
        Total Likes: {totalLikes} | Total Dislikes: {totalDislikes}
      </div>
    </main>
  );
}
