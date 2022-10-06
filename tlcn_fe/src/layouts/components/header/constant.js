import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const actions = [
    {
        icon: faBasketShopping,
        context: '(0) Sản phẩm giỏ hàng',
    },
    {
        icon: faUser,
        context: 'Tài khoản',
    },
];

const navItems = ['Trang chủ', 'Mã giảm giá', 'Theo dõi đơn hàng'];

export { cx, actions, navItems };
