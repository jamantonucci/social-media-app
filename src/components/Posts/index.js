import Post from "./Post";
import './styles.scss';

export default function Posts({ posts, onLike, onDislike }) {
  let totalLikes = 0;
  let totalDislikes = 0;
  posts.forEach((post) => {
    totalLikes += post.likes;
    totalDislikes += post.dislikes;
  });

  return (
    <main className="post-list">
      {posts.map((post, index) => (
        <Post
          key={index}
          onLike={onLike}
          onDislike={onDislike}
          {...post}
        />
      ))}
      <div className="total-rating">
        Total Likes: {totalLikes} | Total Dislikes: {totalDislikes}
      </div>
    </main>
  );
}
