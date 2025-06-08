import Service from './Service';

class TeacherService extends Service {
	// Initializes the TeacherService with the "teachers" collection.
	constructor() {
		super('teachers');
	}

	/**
	 * Retrieves a list of teachers grouped by their specialization.
	 * @returns {Promise<Array>} A list of teacher groups with titles and paths
	 * @throws {Error} If an error occurs during fetching
	 */
	async getSubs() {
		try {
			const teachers = await this.get();
			return teachers.map((teacher) => ({
				title: teacher.specialized,
				subs: teachers
					.filter(({ specialized }) => specialized === teacher.specialized)
					.map(({ name, slug }) => ({
						title: name,
						path: `/giang-vien/${slug}`
					}))
			}));
		} catch (error) {
			throw error;
		}
	}
}

export default new TeacherService();
