import PageContainer from '../../components/PageContainer';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';
import * as database from '../../database';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';

export default function PostItemPage() {
	const params = useParams();
	const [post, setPost] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// Best to use Redux store if available
	// const post = useSelector((state) =>
	// 	state.post.posts.find((post) => post.id === params.id)
	// );

	// "await" used within an IIFE within useEffect.
	// Cannot use async with a function component since it'll return
	//		a promise instead of JSX
	// Cannot use async with useEffect either
	// Therefore use anonymous async IIFE
	useEffect(() => {
(		async () => {
			const loadedPost = await database.loadById(params.id);
			setPost(loadedPost);
			setIsLoading(false);
		})();
		// eslint-disable-next-line
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<PageContainer title={post.title} className='post-item-page'>
			<div className='picture'>
				<img src={post.picture} alt={post.title} />
			</div>

			<div className='description'>{post.description}</div>

			<Link to='/posts' className='back-link'>
				Back to Posts
			</Link>
		</PageContainer>
	);
}
