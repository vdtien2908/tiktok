import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, key) => <MenuItem key={key} data={item} />);
    };
    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(Attrs) => (
                <div tabIndex="-1" className={cx('menu-list')}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
