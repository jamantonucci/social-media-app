import { BiHappyBeaming, BiSad } from "react-icons/bi";
import { getStatus, getCategory } from "../../../includes/variables";
import "./styles.scss";

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

  const promoteStyle = promote ? "promote-yes" : "promote-no";

  return (
    <div className="post-component">
      <h3>{title}</h3>
      <div className="pic-and-desc">
        <img src={picture} alt={title} />
        <div>
          <span>{description}</span>
        </div>
      </div>

      <div className="post-info">
        <div>
          Category:
          <strong>{getCategory(category)}</strong>
        </div>
        <div>
          Status:
          <strong>{getStatus(status)}</strong>
        </div>
        <div className={promoteStyle}>
          Promoted:
          <strong>{promote ? "Yes" : "No"}</strong>
        </div>
      </div>

      <div className="likes-dislikes">
        <button onClick={handleLike} className="like">
          <BiHappyBeaming />
          {likes}
        </button>

        <button onClick={handleDislike} className="dislike">
          <BiSad />
          {dislikes}
        </button>
      </div>
    </div>
  );
}
