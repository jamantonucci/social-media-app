import PageContainer from '../../components/PageContainer';
import Posts from '../../components/Posts';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export default function PostListPage() {
	const navigate = useNavigate();
	const handleAddPostClick = () => {
		navigate('/posts/add');
	};

	return (
		<PageContainer title='Posts'>
			<Posts showOnlyPromoted={false} />
			<div className='add-post-button-container'>
				<button onClick={handleAddPostClick}>Add Post</button>
			</div>
		</PageContainer>
	);
}
