import { BiHappyBeaming, BiSad } from "react-icons/bi";

export default function Post({
  id,
  title,
  likes,
  dislikes,
  onLike,
  onDislike,
}) {
  function handleLike() {
    onLike(id);
  }

  function handleDislike() {
    onDislike(id);
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <BiHappyBeaming size={24} onClick={handleLike} color="green" /> {likes}
      </div>
      <div>
        <BiSad size={24} onClick={handleDislike} color="red" /> {dislikes}
      </div>
      <hr />
    </div>
  );
}
