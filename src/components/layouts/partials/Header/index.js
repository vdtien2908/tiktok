import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([...searchResult, 'Kết quả 1']);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikToK" />
                </div>
                <div className={cx('search-wrapper')}>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(Attrs) => (
                            <div tabIndex="-1" className={cx('search-result')}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Acount
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input
                                placeholder="Search account and videos"
                                spellCheck={false}
                            />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon
                                icon={faSpinner}
                                className={cx('loading')}
                            />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary>Log In</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
