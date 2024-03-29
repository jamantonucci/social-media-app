import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './config';

export async function save(data) {
	try {
		const docRef = await addDoc(collection(db, 'posts'), data);
		return docRef.id;
	} catch (e) {
		console.error('Error writing to database: ', e);
		return null;
	}
}

export async function update(id, data) {
	try {
		const docRef = doc(db, 'posts', id);
		await updateDoc(docRef, data);
		return true;
	} catch {
		return false;
	}
}

export async function deleteFromDatabase(id) {
  try {
    await deleteDoc(doc(db, 'posts', id));
    return true;
  } catch {
    return false;
  }
}