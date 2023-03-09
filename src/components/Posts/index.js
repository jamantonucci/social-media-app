import Post from "./Post";
import "./styles.scss";
import { useSelector } from "react-redux";

export default function Posts() {
  const posts = useSelector((state) => state.post.posts);
  const { allowLikes, allowDislikes } = useSelector((state) => state.settings);

  let totalLikes = 0;
  let totalDislikes = 0;
  posts.forEach((post) => {
    totalLikes += post.likes;
    totalDislikes += post.dislikes;
  });

  return (
    <main className="post-list">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
      {(allowLikes || allowDislikes) && (
        <div className="total-rating">
          {allowLikes && <span>Total Likes: {totalLikes}</span>}
          {allowLikes && allowDislikes && <span> | </span>}
          {allowDislikes && <span>Total Dislikes: {totalDislikes}</span>}
        </div>
      )}
    </main>
  );
}
