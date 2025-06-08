import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Initializes AOS (Animate On Scroll) for smooth scrolling animations.
 *
 * @constant {Object} AOS - AOS configuration instance.
 * - `duration: 2000` → Sets the animation duration to **2 seconds**.
 * - `offset: 200` → Triggers animations **200px** before the element enters the viewport.
 * - `once: true` → Ensures animations run **only once** per element.
 */
export default AOS.init({
	duration: 2000,
	offset: 200,
	once: true
});
