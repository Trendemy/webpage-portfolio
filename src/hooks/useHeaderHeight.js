import { useEffect, useRef, useState } from 'react';

const useHeaderHeight = (onHeightChange) => {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const updateHeaderHeight = () => {
            const height = ref.current?.getBoundingClientRect().height;
            if (height) {
                setOffset(height);
                onHeightChange(height);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, [onHeightChange]);

    return { ref, offset };
};

export default useHeaderHeight;
