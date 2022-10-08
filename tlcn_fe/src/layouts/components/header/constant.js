import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import {
    imgCate2,
    imgCate3,
    imgCate4,
    imgCate5,
    imgCate6,
    imgCate7,
    imgCate8,
    imgCate9,
    imgCate10,
    imgCate11,
    imgCate12,
    imgCate13,
} from '~/assets/images';

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
const menuCate = [
    {
        context: 'Vi điều khiển - Nhúng',
        img: imgCate2,
    },
    {
        context: 'Module ứng dụng',
        img: imgCate3,
    },
    {
        context: 'Cảm biến',
        img: imgCate4,
    },
    {
        context: 'Linh kiện điện tử',
        img: imgCate5,
    },
    {
        context: 'IC chức năng',
        img: imgCate6,
    },
    {
        context: 'Thiết bị chế tạo',
        img: imgCate7,
    },
    {
        context: 'Dụng cụ - phụ kiện',
        img: imgCate8,
    },
    {
        context: 'Connector',
        img: imgCate9,
    },
    {
        context: 'Sản phẩm combo',
        img: imgCate10,
    },
    {
        context: 'Nam châm đất hiếm',
        img: imgCate11,
    },
    {
        context: 'Phụ kiện điện thoại',
        img: imgCate12,
    },
    {
        context: 'Phụ kiện máy tính',
        img: imgCate13,
    },
];

export { cx, actions, navItems, menuCate };
