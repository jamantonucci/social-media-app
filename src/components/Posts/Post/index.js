import { BiHappyBeaming, BiSad } from "react-icons/bi";

export default function Post({
  id,
  title,
  description,
  category,
  promote,
  status,
  picture,
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
      <img src={picture} alt={title} width={100} />
      <div><p>{description}</p></div>
      <div>Category: {category}</div>
      <div>Status: {status}</div>
      <div>Promote: {promote ? 'Yes' : 'No'} </div>
      <div>
        <BiHappyBeaming
          style={{ userSelect: "none" }}
          size={24}
          onClick={handleLike}
          color="green"
        />{" "}
        {likes}
      </div>
      <div>
        <BiSad
          style={{ userSelect: "none" }}
          size={24}
          onClick={handleDislike}
          color="red"
        />{" "}
        {dislikes}
      </div>
      <hr />
    </div>
  );
}
