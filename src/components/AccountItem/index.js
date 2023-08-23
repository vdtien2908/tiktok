import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import style from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(style);

function AccountItem({ data }) {
    const { avatar, full_name, check, nickname } = data;
    return (
        <Link to={`/profile/${nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={avatar} alt="Avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{full_name}</span>
                    {check && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <span className={cx('userName')}>@{nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
