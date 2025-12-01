import author from '~/assets/images/admin.webp';
import dataPower from '~/assets/images/data-power.jpg';
import dataUnlocked from '~/assets/images/data-unlocked.jpg';
import smartAI from '~/assets/images/smart-ai.jpg';
import investing from '~/assets/images/investing-fundamentals.jpg';
import insights from '~/assets/images/insights.jpg';
import crafting from '~/assets/images/crafting.jpg';
import shine from '~/assets/images/toa-sang.png';
import newEnglish from '~/assets/images/new-english.png';
import newDataAnalysis from '~/assets/images/new-data-analysis.png';
import DA1 from '~/assets/images/DA2025-1.png';
import DA2 from '~/assets/images/DA2025-2.png';
import DA3 from '~/assets/images/DA2025-3.png';
import DA4 from '~/assets/images/DA2025-4.png';
import DA5 from '~/assets/images/DA2025-5.png';
import EFI1 from '~/assets/images/EFI1.png';
import EFI2 from '~/assets/images/EFI2.png';
import EFI3 from '~/assets/images/EFI3.png';
import EFI4 from '~/assets/images/EFI4.png';
import EFI5 from '~/assets/images/EFI5.png';

const courses = [
   {
      id: 1,
      thumbnail: dataPower,
      avatar: author,
      author: 'GV. Lê Hoàng Việt Tuấn',
      lesson: 'Data Power Play',
      number: 10,
      student: 150,
      star: 5.0
   },
   {
      id: 2,
      thumbnail: dataUnlocked,
      avatar: author,
      author: 'GV. Lê Hoàng Việt Tuấn',
      lesson: 'Data Queries Unlocked',
      number: 12,
      student: 200,
      star: 4.8
   },
   {
      id: 3,
      thumbnail: smartAI,
      avatar: author,
      author: 'GV. Lê Hoàng Việt Tuấn',
      lesson: 'Smart Work with AI',
      number: 15,
      student: 300,
      star: 4.9
   },
   {
      id: 4,
      thumbnail: investing,
      avatar: author,
      author: 'GV. Lê Hoàng Việt Tuấn',
      lesson: 'Investing Fundamentals',
      number: 12,
      student: 200,
      star: 5.0
   },
   {
      id: 5,
      thumbnail: insights,
      avatar: author,
      author: 'GV. Lê Hoàng Việt Tuấn',
      lesson: 'From Code to Insights',
      number: 12,
      student: 200,
      star: 4.9
   },
   {
      id: 6,
      thumbnail: crafting,
      avatar: author,
      author: 'GV. Lê Hoàng Việt Tuấn',
      lesson: 'Crafting Data Stories',
      number: 12,
      student: 200,
      star: 5.0
   }
];

const newCourses = {
   title: 'Một loạt khóa học đột phá sẽ ra mắt khám phá đầu tiên tại đây',
   highlightTitle: 'đột phá',
   image: shine,
   data: [
      {
         id: 'data-analysis',
         title: 'Data Analysis',
         courses: [
            {
               id: 1,
               image: newDataAnalysis,
               name: 'Khóa học Data Analysis',
               lecturer: 'Giảng viên',
               mode: 'Hình thức Online',
               duration: 'Thời gian',
               content: {
                  title: 'Data Analysis',
                  sub: 'Đừng bỏ lỡ cơ hội bứt phá sự nghiệp',
                  desc: 'Bạn có biết, hơn 20 khóa học Phân tích Dữ liệu của chúng tôi đã khai giảng và giúp hàng nghìn người tìm được việc làm mơ ước? Hãy khám phá ngay để nâng tầm kỹ năng, tăng tốc thu nhập.',
                  images: [DA1, DA2, DA3, DA4, DA5],
                  link: 'https://docs.google.com/forms/d/1yYMsVE2tL0SbwHeedK59oyNhBl0g7UEBv83AuU8qs40/viewform?fbclid=IwY2xjawMj9clleHRuA2FlbQIxMABicmlkETFTbkU5Nmk2YUZCQ0VPcUh6AR6NdmtpeIkZ4WtdoWlcb_ny5-x0cg0psipjflUMalKRvUTepsklGkZxfHS_pg_aem_hG0XVWRVRgZpX9Sww3snMA&edit_requested=true'
               }
            }
         ]
      },
      {
         id: 'english',
         title: 'English',
         courses: [
            {
               id: 1,
               image: newEnglish,
               name: 'Khóa học English For IT',
               lecturer: 'Giảng viên',
               mode: 'Hình thức Online',
               duration: 'Thời gian',
               content: {
                  title: 'English for IT',
                  sub: 'Đừng để sự nghiệp IT của bạn chững lại vì giao tiếp!',
                  desc: 'Khóa học English for IT (E4IT) tại Trendemy là chìa khóa giúp bạn làm chủ mọi cuộc họp quan trọng, từ stand-up hằng ngày đến báo cáo bug. Đặc biệt, Chương 2: Track & Talk tập trung chuyên sâu vào kỹ năng giao tiếp trong team, đảm bảo tiếng nói và kinh nghiệm của bạn được lắng nghe, giúp sự nghiệp bứt phá và thăng tiến trong ngành IT.',
                  images: [EFI1, EFI2, EFI3, EFI4, EFI5],
                  link: 'https://docs.google.com/forms/d/1MBb7X7rVeUw1SkgVLplXtAlP6GhIUNXsBP3e9YdR1Xk/previewResponse'
               }
            }
         ]
      },
      { id: 'ai', title: 'AI', courses: [] }
   ]
};

export { courses, newCourses };
