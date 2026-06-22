import { useEffect, useState } from 'react';

export default function useVisible(ref) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => 
            {
                if (entry.isIntersecting){
                    setIsVisible(true)
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1
            }
        );
        observer.observe(ref.current);
    }, [ref]);
    return isVisible
}