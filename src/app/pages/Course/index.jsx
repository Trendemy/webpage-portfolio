import { courseService } from '~/services';
import { useFetch, useTitle } from '~/hooks';
import { contact, courses, sections } from '~/data';
import {
    Benefits,
    ContactSection,
    CourseContent,
    BannerCourse,
    CourseIntroduction,
    CoursesSection,
    GoalSection,
    LecturerCourse,
    SliderSection,
    StudentFeedback,
    WhoShouldJoin
} from '~/app/sections';
import LoadingPage from '~/app/pages/Loading';
import ErrorPage from '~/app/pages/Error';

const CoursePage = () => {
    const { loading, data } = useFetch(courseService);
    useTitle(data?.name || 'Khóa học');
    if (loading) return <LoadingPage />;
    if (!data) return <ErrorPage />;

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
                <BannerCourse
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
                <GoalSection
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
            <CoursesSection courses={courses} animation='fade-up' />
            <ContactSection
                title={contact.title}
                subtitle={contact.subtitle}
                image={contact.image}
                animation='fade-up'
            />
        </>
    );
};

export default CoursePage;
