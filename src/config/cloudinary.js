import { Cloudinary } from '@cloudinary/url-gen';
import { CLOUDINARY_NAME } from '~/config/env';

/**
 * Initializes a Cloudinary instance for managing image uploads and transformations.
 *
 * @constant {Cloudinary} cloudinary - Cloudinary instance configured with cloud name and security settings.
 * - `cloudName: CLOUDINARY_NAME` → Sets the Cloudinary cloud name from environment variables.
 * - `secure: true` → Ensures that all generated URLs use HTTPS for security.
 */
const cloudinary = new Cloudinary({
    cloud: {
        cloudName: CLOUDINARY_NAME
    },
    url: {
        secure: true
    }
});

export default cloudinary;
