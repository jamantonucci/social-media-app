import Post from "./Post";
import "./styles.scss";
import { useSelector } from "react-redux";

export default function Posts({ showOnlyPromoted }) {
  let posts = useSelector((state) => state.post.posts);
  const { allowLikes, allowDislikes } = useSelector((state) => state.settings);

  if (showOnlyPromoted) {
    posts = posts.filter((post) => post.promote);
  }

  // Validate if there are posts to display
  if (posts.length === 0) {
    return (
      <div>No posts found.</div>
    )
  }

  let totalLikes = 0;
  let totalDislikes = 0;
  posts.forEach((post) => {
    totalLikes += post.likes;
    totalDislikes += post.dislikes;
  });

  return (
    <div className="post-list full-width">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
      {(allowLikes || allowDislikes) && !showOnlyPromoted && (
        <div className="total-rating">
          {allowLikes && <span>Total Likes: {totalLikes}</span>}
          {allowLikes && allowDislikes && <span> | </span>}
          {allowDislikes && <span>Total Dislikes: {totalDislikes}</span>}
        </div>
      )}
    </div>
  );
}
