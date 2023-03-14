import { BiHappyBeaming, BiSad } from 'react-icons/bi';
import { getStatus, getCategory } from '../../../includes/variables';
import { useSelector, useDispatch } from 'react-redux';
import { likePost, dislikePost } from '../../../redux/postSlice';
import { Link } from 'react-router-dom';

import './styles.scss';

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
}) {
	const { allowLikes, allowDislikes } = useSelector((state) => state.settings);

	const dispatch = useDispatch();

	function handleLike(event) {
    event.preventDefault();
		dispatch(likePost(id));
	}

	function handleDislike(event) {
    event.preventDefault();
		dispatch(dislikePost(id));
	}

	const promoteStyle = promote ? 'promote-yes' : 'promote-no';

	let rateClassName = 'likes-dislikes';

	if (!allowLikes || !allowDislikes) {
		rateClassName += ' rate-single-button';
	}

	return (
		<Link to={'/posts/' + id} className='post-component'>
			<h3>{title}</h3>
			<div className='pic-and-desc'>
				<img src={picture} alt={title} />
				<div>
					<span>{description}</span>
				</div>
			</div>

			<div className='post-info'>
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
					<strong>{promote ? 'Yes' : 'No'}</strong>
				</div>
			</div>

			{(allowLikes || allowDislikes) && (
				<div className={rateClassName}>
					{allowLikes && (
						<button onClick={handleLike} className='like'>
							<BiHappyBeaming />
							{likes}
						</button>
					)}
					{allowDislikes && (
						<button onClick={handleDislike} className='dislike'>
							<BiSad />
							{dislikes}
						</button>
					)}
				</div>
			)}
		</Link>
	);
}
