import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Portal from '~/components/Portal';
import poster from '~/assets/images/english_poster.png';
import { cn } from '~/utils';

function Poster({ open, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <Portal>
      <div
        className='fixed inset-0 size-full bg-black/50 z-20'
        onClick={onClose}
      />
      <div className='fixed top-1/2 left-1/2 flex w-lg max-w-4/5 -translate-1/2 z-20'>
        <button
          className={cn(
            'absolute top-0 right-0 border-none rounded-full bg-primary translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ease cursor-pointer md:p-4 p-2.5',
            'hover:bg-secondary-2',
            'after:content after:absolute after:md:h-[15px] after:md:w-[2.5px] after:h-[10px] after:w-[1.5px] after:top-1/2 after:left-1/2 after:bg-white after:-translate-1/2 after:rotate-45',
            'before:content before:absolute before:md:h-[15px] before:md:w-[2.5px] before:h-[10px] before:w-[1.5px] before:top-1/2 before:left-1/2 before:bg-white before:-translate-1/2 before:-rotate-45'
          )}
          onClick={onClose}
        />
        <img src={poster} alt='poster' className='rounded-xl' />
      </div>
    </Portal>
  );
}

Poster.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Poster;
