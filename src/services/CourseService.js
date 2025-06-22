import Service from '~/services/Service';

class CourseService extends Service {
    // Initializes the CourseService with the "courses" collection.
    constructor() {
        super('courses');
    }

    /**
     * Retrieves a list of courses grouped by their type.
     *
     * @returns {Promise<Array>} A list of course groups with titles and paths
     * @throws {Error} If an error occurs during fetching.
     */
    async getSubs() {
        try {
            const courses = await this.get();
            return courses.map((course) => ({
                title: course.type,
                subs: courses
                    .filter(({ type }) => type === course.type)
                    .map(({ name, slug }) => ({
                        title: name,
                        path: `/khoa-hoc/${slug}`
                    }))
            }));
        } catch (error) {
            throw error;
        }
    }
}
export default new CourseService();
