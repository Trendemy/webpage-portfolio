import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Card from '~/components/Feedbacks/Card';

/**
 * Feedbacks Component
 *
 * - Displays a **carousel** of user feedback.
 * - Auto-scrolls every **3 seconds** when in view.
 * - Pauses **5 seconds** when user manually selects a feedback.
 * - Uses **react-intersection-observer** to detect visibility.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array} [props.data=[]] - List of feedback items.
 * @param {string} props.data[].avatar - User's avatar image URL.
 * @param {string} props.data[].name - User's name.
 * @param {string} props.data[].role - User's role/title.
 * @param {string} props.data[].feedback - User's feedback text.
 */
const Feedbacks = ({ data = [] }) => {
    const settings = {
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        Array.isArray(data) &&
        data.length > 0 && (
            <Slider {...settings}>
                {data.map((item, index) => (
                    <Card
                        key={index}
                        avatar={item.avatar}
                        name={item.name}
                        role={item.role}
                        desc={item.feedback}
                    />
                ))}
            </Slider>
        )
    );
};

Feedbacks.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            feedback: PropTypes.string.isRequired
        })
    )
};

export default Feedbacks;
