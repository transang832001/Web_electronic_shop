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
        context: '(0) Giỏ hàng',
    },
    {
        icon: faUser,
        context: 'Tài khoản',
    },
];
const navItems = ['Trang chủ', 'Mã giảm giá', 'Theo dõi đơn hàng'];
const menuCate = [
    {
        name: 'Vi điều khiển - Nhúng',
        img: imgCate2,
        subMenu: [
            {
                name: 'Kit phát triển',
                subMenu: [
                    '8051',
                    'PIC',
                    'ARM - STM',
                    'Arduino',
                    'Raspberry',
                    'AVR',
                    'Phụ kiện KIT',
                    'NaNo - Pi',
                ],
            },
            {
                name: 'Mạch nạp',
                subMenu: [
                    'Mạch nạp 8051',
                    'Mạch nạp AVR',
                    'Mạch nạp PIC',
                    'Mạch nạp STM-ARM',
                    'Mạch nạp MSP430',
                    'Mạch nạp MSP430',
                ],
            },
            {
                name: 'Vi điều khiển',
                subMenu: [
                    'Vi điều khiển 8051',
                    'Vi điều khiển AVR',
                    'Vi điều khiển STM',
                    'PIC - DSPIC',
                    'Vi điều khiển MSP430',
                ],
            },
        ],
    },
    {
        name: 'Module ứng dụng',
        img: imgCate3,
        subMenu: [
            { name: 'Module RF' },
            { name: 'Module RFID' },
            { name: 'Ethernet/Wifi' },
            { name: 'Bluetooth' },
            { name: 'Camera' },
            { name: 'Sim-GMS/GPRS/GPS/3G' },
            { name: 'Module động cơ' },
            { name: 'Module SD' },
            { name: 'Module VGA' },
            { name: 'Module chuyển đổi' },
            { name: 'Hồng ngoại/Ánh sáng' },
            { name: 'Module relay' },
            { name: 'Module nguồn' },
            { name: 'Matrix phím' },
            { name: 'Module driver' },
            { name: 'Audio/MP3' },
            { name: 'Thời gian/Tạo trễ' },
            { name: 'Vân tay ( Finger-Print )' },
            { name: 'Module AD' },
            { name: 'Module DTMF' },
            { name: 'Module led' },
            { name: 'Khống chế nhiệt độ' },
            { name: 'Đo dòng/Đo áp' },
            { name: 'Máy in 3D' },
            { name: 'Dao động/Phát xung' },
            { name: 'Module tạo sương' },
            { name: 'Module cảm biến' },
        ],
    },
    {
        name: 'Cảm biến',
        img: imgCate4,
        subMenu: [
            { name: 'Cảm biến nhiệt độ' },
            { name: 'Cảm biến độ ẩm' },
            { name: 'Cảm biến chuyển động' },
            { name: 'Cảm biến ánh sáng' },
            { name: 'Cảm biến khí' },
            { name: 'Cảm biến siêu âm' },
            { name: 'Cảm biến màu' },
            { name: 'Cảm biến gia tốc,góc' },
            { name: 'Cảm biến áp suất' },
            { name: 'Cảm biến Từ' },
            { name: 'Cảm biến nước' },
            { name: 'Cảm biến khoảng cách' },
            { name: 'Cảm biến âm thanh' },
            { name: 'Cảm biến rung' },
            { name: 'Load Cell' },
            { name: 'Cảm biến dòng' },
            { name: 'La bàn số' },
            { name: 'Cảm biến nhịp tim' },
            { name: 'Mở cửa/Báo động' },
        ],
    },
    {
        name: 'Linh kiện điện tử',
        img: imgCate5,
        subMenu: [
            {
                name: 'Linh kiện cơ bản',
                subMenu: ['Điện trở', 'Cuộn cảm', 'Tụ điện'],
            },
            {
                name: 'Linh kiện bán dẫn',
                subMenu: [
                    'Diode',
                    'Mosfet & Fets',
                    'Transistor',
                    'Triac-Thy-Diac',
                    'Opto-Photocouplers',
                ],
            },
            {
                name: 'Linh kiện thụ động',
                subMenu: [
                    'Biến trở',
                    'Triết áp',
                    'Loa/Còi báo',
                    'Cầu chì',
                    'Thạch anh',
                    'Relay',
                    'Varistor/Tụ Chống Sét',
                    'Nút nhấn/Công tắc/SW',
                ],
            },
            {
                name: 'Led/Lcd/Text',
                subMenu: [
                    'Led 7 thanh',
                    'Bóng đèn LED',
                    'LCD/Text',
                    'Led Matrix',
                    'Led Công Suất',
                ],
            },
        ],
    },
    {
        name: 'IC chức năng',
        img: imgCate6,
        subMenu: [
            { name: 'IC nguồn' },
            { name: 'Ic real time' },
            { name: 'IC Opam' },
            { name: 'IC giao tiếp' },
            { name: 'IC CD' },
            { name: 'IC công suất' },
            { name: 'IC audio' },
            { name: 'ADC/DAC' },
            { name: 'IC driver' },
            { name: '74HC/ 74LS/ IC số' },
            { name: 'IC mã hóa/Giải mã' },
            { name: 'IC cảm ứng' },
            { name: 'IC can' },
            { name: 'IC khác' },
            { name: 'Đế IC' },
        ],
    },
    {
        name: 'Thiết bị chế tạo',
        img: imgCate7,
        subMenu: [
            {
                name: 'Robot mô hình',
                subMenu: [
                    'Động cơ',
                    'máy bơm/Tạo khí',
                    'Máy bay mô hình',
                    'Mô hình/Xe robot',
                    'Phụ kiện',
                ],
            },
            {
                name: 'Thiết bị hàn',
                subMenu: ['Máy hàn', 'Thiếc hàn', 'Phụ kiện hàn', 'Máy Khò'],
            },
            {
                name: 'Mạch in',
                subMenu: [
                    'Phíp đồng',
                    'PCB/Board Test',
                    'Hóa chất',
                    'Dụng cụ phụ trợ',
                ],
            },
        ],
    },
    {
        name: 'Dụng cụ - phụ kiện',
        img: imgCate8,
        subMenu: [
            {
                name: 'Dụng cụ cầm tay',
                subMenu: [
                    'Kính lúp',
                    'Súng bắn keo',
                    'Máy khoan/Cắt/Mài',
                    'Phụ kiện máy khoan/Máy cắt',
                    'Kìm/Kẹp/Tua vít',
                ],
            },
            {
                name: 'Tản nhiệt/Cách điện',
                subMenu: [
                    'Quạt tản nhiệt',
                    'Nhôm tản nhiệt',
                    'Keo/Mỡ tản nhiệt',
                    'Sò nóng lạnh và phụ kiện',
                ],
            },
            {
                name: 'Hộp các loại',
                subMenu: ['Hộp đựng 1 ngăn', 'Hộp đựng nhiều ngăn'],
            },

            {
                name: 'Thiết bị đo/Kiểm tra',
                subMenu: ['Đồng hồ đo', 'Thước đo', 'Thiết Bị Đo'],
            },

            {
                name: 'Tạo nguồn điện',
                subMenu: [
                    'Nguồn adapter',
                    'Biến áp',
                    'Nguồn tổ ong/Nguồn xung',
                    'Pin, Ắc Quy',
                    'Mạch sạc pin, ắc quy',
                    'Box sạc dự phòng',
                    'Đế pin',
                    'Bộ chuyển đổi điện',
                    'Anten',
                ],
            },
            {
                name: 'Thiết bị gia dụng',
                subMenu: [
                    'Thiết bị an toàn',
                    'Remote- Điều Khiển',
                    'Túi Đựng Dụng Cụ',
                ],
            },
        ],
    },
    {
        name: 'Connector',
        img: imgCate9,
        subMenu: [
            {
                name: 'Dây kết nối',
                subMenu: [
                    'Dây đồng/Dây điện',
                    'Dây cáp nối',
                    'Dây bus, Dây Buộc',
                    'Dây co nhiệt, chịu nhiệt',
                ],
            },
            {
                name: 'Cổng kết nối',
                subMenu: [
                    'Terminal',
                    'Jack DC',
                    'Cổng USB',
                    'Header',
                    'Audio',
                    'Cổng DB-DP',
                    'IDE - IDC',
                    'Jumper',
                ],
            },
            {
                name: 'Phụ kiện',
                subMenu: [
                    'Cọc đồng/Cọc nhựa',
                    'Kẹp cá sấu/ Móc',
                    'Socket',
                    'Ốc - Vít',
                ],
            },
        ],
    },
    {
        name: 'Sản phẩm combo',
        img: imgCate10,
        subMenu: [
            { name: 'Combo máy hàn' },
            { name: 'Combo máy khoan' },
            { name: 'Sản phẩm DIY' },
            { name: 'Combo khác' },
        ],
    },
    {
        name: 'Nam châm đất hiếm',
        img: imgCate11,
    },
    {
        name: 'Phụ kiện điện thoại',
        img: imgCate12,
        subMenu: [
            { name: 'Pin Sạc' },
            { name: 'Cáp Sạc' },
            { name: 'Thẻ Nhớ' },
            { name: 'Loa' },
            { name: 'Giá Đỡ Điện Thoại' },
            { name: 'Chuột/ Bàn Phím' },
            { name: 'Ống Kinh Điện Thoai' },
        ],
    },
    {
        name: 'Phụ kiện máy tính',
        img: imgCate13,
        subMenu: [{ name: 'Dây Nguồn' }],
    },
];

export { cx, actions, navItems, menuCate };
