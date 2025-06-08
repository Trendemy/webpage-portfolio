import { courseService } from '@services';
import { useFetch, useTitle } from '@hooks';
import { contact, courses, sections } from '@data';
import {
   Benefits,
   Contact,
   CourseContent,
   CourseHero,
   CourseIntroduction,
   FeaturedCourses,
   Goal,
   LecturerCourse,
   SliderSection,
   StudentFeedback,
   WhoShouldJoin
} from '@app/sections';
import LoadingPage from '../Loading';

const CoursePage = () => {
   const { loading, data } = useFetch(courseService);
   useTitle(data?.name || 'Khóa học');
   if (loading || !data) return <LoadingPage />;

   const {
      heroSection,
      introduceSection,
      goalSection,
      contentSection,
      valueSection,
      joinSection,
      teacherSection,
      feedbackSection,
      graduationSection,
      productSection
   } = data || {};

   return (
      <>
         {heroSection && (
            <CourseHero
               title={heroSection?.title}
               highlightTitle={heroSection?.highlightTitle}
               description={heroSection?.description}
               images={heroSection?.images}
            />
         )}

         {introduceSection && (
            <CourseIntroduction
               title={introduceSection?.title}
               highlightTitle={introduceSection?.highlightTitle}
               description={introduceSection?.description}
               images={introduceSection?.images}
               animation='fade-up'
            />
         )}

         {goalSection && (
            <Goal
               title={goalSection?.title}
               subtitle={goalSection?.subtitle}
               data={goalSection?.content}
               images={goalSection?.images}
               animation='fade-up'
            />
         )}
         {contentSection && (
            <CourseContent
               title={contentSection?.title}
               subtitle={contentSection?.subtitle}
               data={contentSection?.chapters}
               animation='fade-up'
            />
         )}

         {valueSection && (
            <Benefits
               title={valueSection?.title}
               subtitle={valueSection?.subtitle}
               data={valueSection?.content}
               images={valueSection?.images}
               animation='fade-up'
            />
         )}

         {joinSection && (
            <WhoShouldJoin
               title={joinSection?.title}
               objects={joinSection?.objects}
               images={joinSection?.images}
               animation='fade-up'
            />
         )}

         {graduationSection && (
            <SliderSection
               title={graduationSection?.title}
               subtitle={graduationSection?.subtitle}
               images={graduationSection?.images}
               section={sections.graduation.id}
            />
         )}

         {teacherSection && (
            <LecturerCourse
               title={teacherSection?.title}
               subtitle={teacherSection?.subtitle}
               lecturers={teacherSection?.teachers}
               animation='fade-up'
            />
         )}

         {feedbackSection && (
            <StudentFeedback
               title={feedbackSection?.title}
               subtitle={feedbackSection?.subtitle}
               feedbacks={feedbackSection?.feedbacks}
               images={feedbackSection?.images}
               animation='fade-up'
            />
         )}

         {productSection && (
            <SliderSection
               title={productSection?.title}
               subtitle={productSection?.subtitle}
               images={productSection?.images}
               section={sections.product.id}
            />
         )}

         <FeaturedCourses courses={courses} animation='fade-up' />
         <Contact
            title={contact.title}
            subtitle={contact.subtitle}
            image={contact.image}
            animation='fade-up'
         />
      </>
   );
};

export default CoursePage;
