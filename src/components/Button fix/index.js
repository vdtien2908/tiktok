import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    onClick,
    leftIcon,
    rightIcon,
    className,
    ...passProds
}) {
    let Comp = 'button';

    const _prods = {
        onClick,
        ...passProds,
    };

    // Delete event listen when button is disabled
    if (disabled) {
        Object.keys(_prods).forEach((key) => {
            if (key.startsWith('on') && typeof _prods[key] === 'function') {
                delete _prods[key];
            }
        });
    }

    if (to) {
        _prods.to = to;
        Comp = Link;
    } else if (href) {
        _prods.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });
    return (
        <Comp className={classes} {..._prods}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
