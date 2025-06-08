import duongthengoc from '@assets/images/duongthengoc.webp';
import feedback1 from '@assets/images/knowledge-men.webp';
import nguyenbaotran from '@assets/images/nguyenbaotran.webp';
import feedback2 from '@assets/images/study-men.webp';
import truongphuongnha from '@assets/images/truongphuongnha.webp';

const feedbacks = {
   title: 'Cảm nghĩ học viên',
   content: [
      {
         id: 1,
         avatar: duongthengoc,
         name: 'Dương Thế Ngọc',
         role: 'Sinh viên',
         feedback:
            'Trendemy là nền tảng học trực tuyến tuyệt vời với nhiều khóa học đa dạng, giảng viên chuyên nghiệp và giao diện thân thiện. Tôi đã học được nhiều kiến thức bổ ích và nâng cao kỹ năng. Cảm ơn Trendemy đã mang đến trải nghiệm học tập tuyệt vời.'
      },
      {
         id: 2,
         avatar: truongphuongnha,
         name: 'Trương Phương Nhã',
         role: 'Nhân viên Marketing',
         feedback:
            'Chương trình học của Trendemy được thiết kế khoa học, giúp dễ dàng nắm bắt và áp dụng kiến thức. Các bài kiểm tra và thực hành phong phú củng cố hiểu biết. Trendemy đã giúp tôi phát triển toàn diện.'
      },
      {
         id: 3,
         avatar: nguyenbaotran,
         name: 'Nguyễn Bảo Trân',
         role: 'Sinh viên',
         feedback:
            'Trendemy là nền tảng học trực tuyến tuyệt vời với khóa học đa dạng, giảng viên chuyên nghiệp và giao diện thân thiện. Tôi đã học được nhiều kiến thức bổ ích và nâng cao kỹ năng. Cảm ơn Trendemy đã mang đến trải nghiệm học tập tuyệt vời.'
      }
   ],
   images: [feedback1, feedback2]
};

export default feedbacks;
