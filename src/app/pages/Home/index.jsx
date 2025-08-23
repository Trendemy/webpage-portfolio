import { useTitle } from '~/hooks';
import {
    HeroSection,
    ContactSection,
    CoreValues,
    FAQSection,
    CoursesSection,
    MissionVision,
    ReasonSection,
    Statistics,
    StudentFeedback,
    BreakthroughCoursesSection
} from '~/app/sections';
import {
    contact,
    coreValues,
    courses,
    faq,
    feedbacks,
    hero,
    newCourses,
    reason,
    statistics,
    visionMission
} from '~/data';

const HomePage = () => {
    useTitle('Về chúng tôi');

    return (
        <>
            <HeroSection
                title={hero.title}
                highlightTitle={hero.highlightTitle}
                description={hero.description}
                image={hero.image}
            />
            <BreakthroughCoursesSection
                title={newCourses.title}
                highlightTitle={newCourses.highlightTitle}
                image={newCourses.image}
                data={newCourses.data}
                animation='fade-up'
            />
            <MissionVision
                titles={[visionMission.visionTitle, visionMission.missionTitle]}
                descriptions={[
                    visionMission.visionDescription,
                    visionMission.missionDescription
                ]}
                images={[visionMission.visionImage, visionMission.missionImage]}
                animation='fade-up'
            />
            <CoreValues
                title={coreValues.title}
                subtitle={coreValues.subtitle}
                values={coreValues.content}
                images={coreValues.images}
                animation='fade-up'
            />
            <CoursesSection courses={courses} animation='fade-up' />
            <ReasonSection
                title={reason.title}
                subtitle={reason.subtitle}
                description={reason.description}
                reasons={reason.content}
                images={reason.images}
                animation='fade-up'
            />
            <Statistics data={statistics} />
            <StudentFeedback
                title={feedbacks.title}
                subtitle={feedbacks.subtitle}
                images={feedbacks.images}
                feedbacks={feedbacks.content}
                animation='fade-up'
            />
            <FAQSection
                title={faq.title}
                questions={faq.content}
                images={faq.images}
                animation='fade-up'
            />
            <ContactSection
                title={contact.title}
                subtitle={contact.subtitle}
                image={contact.image}
                animation='fade-up'
            />
        </>
    );
};

export default HomePage;
