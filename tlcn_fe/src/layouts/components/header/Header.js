import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faMagnifyingGlass,
    faCaretRight,
} from '@fortawesome/free-solid-svg-icons';

import { cx, actions, navItems, menuCate } from './constant';
import { imgLogo } from '~/assets/images';

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('wrapper')}>
                    <div className={cx('logo')}>
                        <img src={imgLogo} alt='logo' />
                    </div>

                    <div className={cx('wrapper-right')}>
                        {/* Search */}
                        <div className={cx('wrapper-input')}>
                            <input
                                className={cx('input')}
                                placeholder='Tìm kiếm sản phẩm...'
                            />
                            <button className={cx('btn-search')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>

                        {/* Actions */}
                        <div className={cx('wrapper-actions')}>
                            {actions.map((item, index) => (
                                <button
                                    key={index}
                                    className={cx('action-item')}
                                >
                                    <FontAwesomeIcon
                                        className={cx('action-item__icon')}
                                        icon={item.icon}
                                    />
                                    <span>{item.context}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className={cx('navigation')}>
                <div className={cx('grid', 'wide')}>
                    <button className={cx('nav-item', 'nav-item--head')}>
                        <div className={cx('nav-item__context--head')}>
                            <FontAwesomeIcon
                                className={cx('nav-item__icon')}
                                icon={faBars}
                            />
                            <span>Danh mục sản phẩm</span>
                        </div>
                        <ul className={cx('menu')}>
                            {menuCate.map((item, index) => (
                                <li key={index} className={cx('menu-item')}>
                                    <div className={cx('menu-item__left')}>
                                        <img
                                            className={cx('menu-item__img')}
                                            src={item.img}
                                            alt={item.context}
                                        />
                                        <span
                                            className={cx('menu-item__context')}
                                        >
                                            {item.context}
                                        </span>
                                    </div>
                                    <FontAwesomeIcon
                                        className={cx('menu-item__icon')}
                                        icon={faCaretRight}
                                    />
                                </li>
                            ))}
                        </ul>
                    </button>

                    {navItems.map((item, index) => (
                        <button key={index} className={cx('nav-item')}>
                            <span>{item}</span>
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
