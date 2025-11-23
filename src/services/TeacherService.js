import Service from '~/services/Service';

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

         const grouped = teachers.reduce((acc, teacher) => {
            const key = teacher.specialized;
            if (!acc[key]) acc[key] = [];
            acc[key].push(teacher);
            return acc;
         }, {});

         return Object.entries(grouped).map(([specialized, group]) => ({
            title: specialized,
            subs: group.map(({ name, slug }) => ({
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
