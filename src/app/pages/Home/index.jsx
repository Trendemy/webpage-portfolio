import { useTitle } from '@hooks';
import {
  Banner,
  Base,
  Contact,
  CoreValues,
  FAQ,
  FeaturedCourses,
  MissionVision,
  Reason,
  Statistics,
  StudentFeedback
} from '@app/sections';
import {
  base,
  contact,
  coreValues,
  courses,
  faq,
  feedbacks,
  hero,
  reason,
  statistics,
  visionMission
} from '@data';

const HomePage = () => {
  useTitle('Về chúng tôi');

  return (
    <>
      <Banner
        title={hero.title}
        highlightTitle={hero.highlightTitle}
        description={hero.description}
        image={hero.image}
      />
      <Base
        title={base.title}
        highlightTitle={base.highlightTitle}
        description={base.description}
        images={base.images}
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
      <FeaturedCourses courses={courses} animation='fade-up' />
      <Reason
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
      <FAQ
        title={faq.title}
        questions={faq.content}
        images={faq.images}
        animation='fade-up'
      />
      <Contact
        title={contact.title}
        subtitle={contact.subtitle}
        image={contact.image}
        animation='fade-up'
      />
    </>
  );
};

export default HomePage;
