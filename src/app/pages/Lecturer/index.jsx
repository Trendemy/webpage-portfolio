import { useFetch, useTitle } from '~/hooks';
import { teacherService } from '~/services';
import { courses } from '~/data';
import {
    BannerLecturer,
    CoursesSection,
    LecturerProfile,
    LecturerRatings,
    SpecialtySkills,
    Statistics,
    Summary
} from '~/app/sections';
import LoadingPage from '~/app/pages/Loading';
import ErrorPage from '~/app/pages/Error';

const LecturerPage = () => {
    const { loading, data } = useFetch(teacherService);
    useTitle(data?.name || 'Giảng viên');
    if (loading) return <LoadingPage />;
    if (!data) return <ErrorPage />;

    const {
        avatar,
        name,
        description,
        countSection,
        overviewSection,
        summarySection,
        coreSection,
        feedbackSection
    } = data;

    return (
        <>
            <BannerLecturer
                avatar={avatar}
                name={name}
                description={description}
            />
            {countSection && <Statistics data={countSection} />}
            {overviewSection && (
                <LecturerProfile
                    avatar={avatar}
                    title={overviewSection?.title}
                    description={overviewSection?.description}
                    animation='fade-up'
                />
            )}
            {summarySection && (
                <Summary
                    title={summarySection?.title}
                    subtitle={summarySection?.subtitle}
                    education={summarySection?.education}
                    experience={summarySection?.experience}
                    animation='fade-up'
                />
            )}
            {coreSection && (
                <SpecialtySkills
                    title={coreSection?.title}
                    subtitle={coreSection?.subtitle}
                    data={coreSection?.content}
                    animation='fade-up'
                />
            )}
            <CoursesSection courses={courses} animation='fade-up' />
            {feedbackSection && (
                <LecturerRatings
                    title={feedbackSection?.title}
                    subtitle={feedbackSection?.subtitle}
                    data={feedbackSection?.feedbacks}
                    animation='fade-up'
                />
            )}
        </>
    );
};

export default LecturerPage;
