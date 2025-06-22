import core2 from '~/assets/images/brown-coast.webp';
import core1 from '~/assets/images/core-1.webp';
import core3 from '~/assets/images/smile-girl.webp';
import { People, Setting, Shield } from '~/components/Icons';

const coreValues = {
    title: 'Giá trị cốt lõi',
    content: [
        {
            id: 1,
            icon: Shield,
            title: 'Chất lượng',
            desc: 'Chúng tôi cam kết các khóa học Phân tích dữ liệu, AI, Python luôn cập nhật xu hướng công nghệ mới nhất, đáp ứng chính xác nhu cầu phát triển kỹ năng thực tế của học viên.'
        },
        {
            id: 2,
            icon: Setting,
            title: 'Đổi mới',
            desc: 'Trendemy ứng dụng công nghệ giáo dục tiên tiến, mang đến trải nghiệm học Python, SQL, AI linh hoạt, hiện đại và tối ưu hiệu quả tiếp thu kiến thức.'
        },
        {
            id: 3,
            icon: People,
            title: 'Cộng đồng',
            desc: 'Xây dựng lộ trình học tập cá nhân hóa cho từng học viên trong lĩnh vực Phân tích dữ liệu, AI Agent, Automation Workflow, giúp tối ưu hóa tiềm năng và đạt mục tiêu nhanh chóng.'
        }
    ],
    images: [core1, core2, core3]
};

export default coreValues;
