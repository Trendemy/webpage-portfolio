import { useEffect, useState } from 'react';
import { courseService, teacherService } from '@services';
import { sections } from '@data';
import { logger } from '@utils';

const useRoutes = () => {
   const [courseSubs, setCourseSubs] = useState([]);
   const [teacherSubs, setTeacherSubs] = useState([]);

   useEffect(() => {
      (async () => {
         try {
            const [courses, teachers] = await Promise.all([
               courseService.getSubs(),
               teacherService.getSubs()
            ]);
            setCourseSubs(courses);
            setTeacherSubs(teachers);
         } catch (error) {
            logger('get subs', error);
         }
      })();
   }, []);

   return [
      {
         path: '/',
         title: 'Về chúng tôi',
         sections: [
            sections.base,
            sections.vision,
            sections.values,
            sections.courses,
            sections.reason,
            sections.feedback,
            sections.faq,
            sections.contact
         ]
      },
      {
         path: '/khoa-hoc',
         title: 'Khóa học',
         redirect: false,
         hasSubs: courseSubs.length > 0,
         subs: courseSubs,
         sections: [
            sections.introduction,
            sections.goal,
            sections.content,
            sections.benefits,
            sections.join,
            sections.teacher,
            sections.feedback,
            sections.product,
            sections.contact
         ]
      },
      {
         path: '/giang-vien',
         title: 'Giảng viên',
         redirect: false,
         subs: teacherSubs,
         hasSubs: teacherSubs.length > 0,
         sections: [
            sections.introduction,
            sections.education,
            sections.expertise,
            sections.courses,
            sections.feedback
         ]
      }
   ];
};

export default useRoutes;
