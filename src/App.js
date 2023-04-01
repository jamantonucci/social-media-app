import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AboutUsIntroductionPage from './pages/AboutUsPage/Introduction';
import AboutUsMissionPage from './pages/AboutUsPage/Mission';
import AboutUsPrivacyPage from './pages/AboutUsPage/Privacy';
import PostListPage from './pages/PostListPage';
import PostFormPage from './pages/PostFormPage';
import PostItemPage from './pages/PostItemPage';
import PreferencesPage from './pages/PreferencesPage';
import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as database from './database';
import { setPosts } from './redux/postSlice';
import { useDispatch } from 'react-redux';

export default function App() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	// Load database
	useEffect(() => {
		(async () => {
			const data = await database.load();
			dispatch(setPosts(data));
			setIsLoading(false);
		})();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<Header />

			{isLoading ? (
				<Loading />
			) : (
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='posts' element={<PostListPage />} />
					<Route path='posts/add' element={<PostFormPage />} />
					<Route path='posts/:id' element={<PostItemPage />} />
					<Route path='preferences' element={<PreferencesPage />} />
					<Route path='about-us' element={<AboutUsPage />}>
						<Route path='' element={<AboutUsIntroductionPage />} />
						<Route path='mission' element={<AboutUsMissionPage />} />
						<Route path='privacy' element={<AboutUsPrivacyPage />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			)}

			<Footer />
		</>
	);
}
