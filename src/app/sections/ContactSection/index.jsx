import { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import { useFormState, useFormSubmit } from '~/hooks';
import { SHEET_DB_CONTACT } from '~/config/env';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import { Button, Input, Image, Textarea } from '~/components/UI';
import { Mail, Phone, User } from '~/components/Icons';

const ContactSection = ({ title = '', image, animation }) => {
    const contentRef = useRef(null);
    const imagesRef = useRef(null);
    const { fields, onInputChange, clearFields } = useFormState({
        fullname: '',
        email: '',
        phone: '',
        content: ''
    });
    const { loading, handleSubmit } = useFormSubmit(
        fields,
        SHEET_DB_CONTACT,
        'Đang gửi...',
        () => {
            clearFields();
            return 'Đã gửi thành công.';
        },
        'Gửi thất bại.'
    );

    useEffect(() => {
        const adjustHeight = () => {
            if (contentRef.current && imagesRef.current) {
                imagesRef.current.style.height = `${contentRef.current.offsetHeight}px`;
            }
        };
        adjustHeight();
        window.addEventListener('resize', adjustHeight);
        return () => window.removeEventListener('resize', adjustHeight);
    }, []);

    return (
        <Section>
            <Element name={sections.contact.id} className='container'>
                <div
                    className='flex justify-center items-center gap-20'
                    data-aos={animation}
                >
                    <div
                        className='relative flex-1 hidden xl:flex after:content after:absolute after:size-44 after:bg-secondary after:rounded-full after:bottom-10 after:-z-1 after:-translate-x-1/2'
                        ref={imagesRef}
                    >
                        <Image
                            src={image}
                            className='w-full rounded-md object-cover'
                            alt='contact img'
                        />
                    </div>
                    <div className='flex-1' ref={contentRef}>
                        <h2 className='heading-2 text-primary uppercase text-center xl:text-left'>
                            {title}
                        </h2>
                        <p className='text-xl font-bold text-center xl:text-left'>
                            Hãy để{' '}
                            <span className='text-brand uppercase'>
                                Trendemy
                            </span>{' '}
                            giúp bạn giải đáp mọi thắc mắc !
                        </p>
                        <form
                            className='flex flex-col gap-5 mt-10'
                            method='POST'
                            onSubmit={handleSubmit}
                        >
                            <Input
                                placeholder='Họ và tên'
                                icon={User}
                                name='fullname'
                                value={fields.fullname}
                                onChange={onInputChange}
                            />
                            <Input
                                placeholder='Email'
                                name='email'
                                icon={Mail}
                                value={fields.email}
                                onChange={onInputChange}
                            />
                            <Input
                                type='tel'
                                placeholder='Số điện thoại'
                                name='phone'
                                icon={Phone}
                                value={fields.phone}
                                onChange={onInputChange}
                            />
                            <Textarea
                                placeholder='Bạn cần tư vấn thêm về Trendemy, vui lòng để lại tin nhắn tại đây...'
                                rows={7}
                                name='content'
                                value={fields.content}
                                onChange={onInputChange}
                            />
                            <div className='text-center xl:text-left'>
                                <Button
                                    type='submit'
                                    primary
                                    disabled={loading}
                                >
                                    Liên hệ tư vấn
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Element>
        </Section>
    );
};

ContactSection.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    animation: PropTypes.string
};
export default ContactSection;
