import { useEffect } from 'react';

function DMCABadge() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href='//www.dmca.com/Protection/Status.aspx?ID=dea6bea1-7fc3-4db5-b24b-1f1b3d0460f0'
      title='DMCA.com Protection Status'
      className='dmca-badge'
    >
      <img
        src='https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=dea6bea1-7fc3-4db5-b24b-1f1b3d0460f0'
        alt='DMCA.com Protection Status'
      />
    </a>
  );
}

export default DMCABadge;
