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

         const grouped = courses.reduce((acc, course) => {
            const key = course.type;
            if (!acc[key]) acc[key] = [];
            acc[key].push(course);
            return acc;
         }, {});

         return Object.entries(grouped).map(([type, group]) => ({
            title: type,
            subs: group.map(({ name, slug }) => ({
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
