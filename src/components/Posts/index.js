import Post from "./Post";

export default function Posts({ posts, onLike, onDislike }) {
  let totalLikes = 0;
  let totalDislikes = 0;
  posts.forEach((post) => {
    totalLikes += post.likes;
    totalDislikes += post.dislikes;
  });

  return (
    <main>
      {posts.map((post, index) => (
        <Post
          key={index}
          onLike={onLike}
          onDislike={onDislike}
          {...post}
        />
      ))}
      <div>
        Total Likes: {totalLikes} | Total Dislikes: {totalDislikes}
      </div>
    </main>
  );
}
