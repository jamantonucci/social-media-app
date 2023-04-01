import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from './config';
import uuid from 'react-uuid';

const storage = getStorage(app);

export async function uploadPicture(file) {
	try {
		const storageRef = ref(storage, uuid() + '--' + file.name);
		const snapshot = await uploadBytes(storageRef, file);
		const url = await getDownloadURL(snapshot.ref);
		return url;
	} catch {
		return null;
	}
}
