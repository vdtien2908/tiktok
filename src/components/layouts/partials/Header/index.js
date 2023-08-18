/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

// src public
import images from '~/assets/images';

// Components
import {
    UploadIcon,
    UserIcon,
    CoinIcon,
    SettingIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    QuestionIcon,
} from '~/components/Icons';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Menu';
import Image from '~/components/image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <CoinIcon />,
        title: 'Coin',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/profile',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([...searchResult, 'Kết quả 1']);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikToK" />
                </div>
                <div className={cx('search-wrapper')}>
                    <TippyHeadless
                        interactive
                        visible={searchResult.length > 0}
                        render={(Attrs) => (
                            <div tabIndex="-1" className={cx('search-result')}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Account
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
                    </TippyHeadless>
                </div>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[(0, 200)]} content="Upload Video">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Button primary>Log In</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? USER_MENU : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="1https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1692500400&x-signature=yXrjHe5ep3V3UdBQhXbQCUD7f00%3D"
                                alt="User name"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
