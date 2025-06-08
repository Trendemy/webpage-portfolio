import {
	collection,
	getDocs,
	doc,
	getDoc,
	getFirestore,
	query,
	where
} from 'firebase/firestore';

class Service {
	/**
	 * Initializes the Firestore service with a specific collection.
	 *
	 * @param {string} collection - The Firestore collection name.
	 */
	constructor(collection) {
		this.collection = collection;
		this.db = getFirestore();
	}

	/**
	 * Retrieves all active documents status is true from the collection.
	 *
	 * @returns {Promise<Array>} A list of active documents.
	 * @throws {Error} If an error occurs during fetching.
	 */
	async get() {
		try {
			const clt = collection(this.db, this.collection);
			const q = query(clt, where('status', '==', true));
			const querySnapshot = await getDocs(q);
			const data = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			return data;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Retrieves a single active document that matches the given field and value.
	 * @param {Object} params - An object with a single key-value pair to query.
	 * @returns {Promise<Object|null>} The matching document or null if not found.
	 * @throws {Error} If an error occurs during fetching.
	 */
	async getOne(params) {
		try {
			const clt = collection(this.db, this.collection);

			const field = Object.keys(params)[0];
			const value = params[field];
			const q = query(
				clt,
				where(field, '==', value),
				where('status', '==', true)
			);

			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) return null;

			const doc = querySnapshot.docs[0];
			return { id: doc.id, ...doc.data() };
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Retrieves multiple active documents by their IDs.
	 * @param {Array<string>} ids - List of document IDs to fetch.
	 * @returns {Promise<Array>} A list of matching documents.
	 * @throws {Error} If an error occurs during fetching.
	 */
	async getByIds(ids) {
		try {
			if (!ids.length) return [];

			const clt = collection(this.db, this.collection);
			const q = query(
				clt,
				where('__name__', 'in', ids),
				where('status', '==', true)
			);
			const querySnapshot = await getDocs(q);
			const data = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));

			return data;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Retrieves a single document by its ID if it is active.
	 * @param {string} id - The document ID.
	 * @returns {Promise<Object|null>} The document data or null if not found.
	 * @throws {Error} If an error occurs during fetching.
	 */
	async getById(id) {
		try {
			const ref = doc(this.db, this.collection, id);
			const docSnap = await getDoc(ref);
			if (docSnap.exists()) {
				const data = docSnap.data();
				return data.status ? data : null;
			} else {
				return null;
			}
		} catch (error) {
			throw error;
		}
	}
}

export default Service;
