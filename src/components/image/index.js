import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/bassets/images';
import style from './Image.module.scss';

function Image({ src, alt, className, ...prods }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };

    return (
        <img
            {...prods}
            className={classNames(style.wrapper, className)}
            src={fallBack || src}
            ref={ref}
            alt={alt}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
