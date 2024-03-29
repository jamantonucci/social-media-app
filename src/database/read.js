import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore';
import { db } from './config';

/**
 * Loads all documents from the Posts collection
 * @returns
 * 	Array with posts
 */
export async function load() {
	try {
		const querySnapshot = await getDocs(collection(db, 'posts'));
		return processQuerySnapshot(querySnapshot);
	} catch (error) {
		throw new Error('failed to load db');
	}
}

/**
 * Loads all *promoted* documents from the Posts collection.
 * @returns Array with posts
 */
export async function loadPromoted() {
	try {
		const q = query(collection(db, 'posts'), where('promote', '==', true));
		const querySnapshot = await getDocs(q);
		return processQuerySnapshot(querySnapshot);
	} catch (error) {
		throw new Error('failed to load db');
	}
}

/**
 * Converts a Firebase query snapshot into an array
 * @param {object} querySnapshot
 * 	The query snapshot returned by Firebase
 * @returns
 * 	Array with the data
 */
function processQuerySnapshot(querySnapshot) {
	const data = [];
	querySnapshot.forEach((doc) => {
		data.push({
			...doc.data(),
			id: doc.id,
		});
	});
	return data;
}

/**
 * Loads a Firebase document based on ID
 * @param {string} id 
 * @returns Firebase document
 */
export async function loadById(id) {
	try {
		const docRef = doc(db, "posts", id);
		const docSnap = await getDoc(docRef);
	
		if (docSnap.exists()) {
			return docSnap.data();
		} 
	}
	catch {	}
	
	return null;
}
