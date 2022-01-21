import {
    FaFacebook,
    FaInstagram,
    FaBell,
    FaQuestionCircle,
    FaGlobe, 
    FaSearch, 
    FaShoppingCart
} from 'react-icons/fa';
import '../styles/ShopeeHeader.scss';
import '../styles/ShopeeHeader.css';
import logo from '../logo.png';
import {Link} from 'react-router-dom';

const recommendList = [
    'Túi Xách Nữ',
    'Váy',
    'Áo Khoác',
    'Chân Váy',
    'Giày',
    'Áo Thun',
    'Áo Croptop',
    'Dép'
];

function ShopeeHeader() {
    return (
        <div className='shopee'>
            <div className="nav">
                <div className="center">
                    <div className="top">
                        <ul className="left">
                            <li> 
                                <a>Kênh Người Bán</a>
                            </li>
                            <li> 
                                <a>Trở thành Người bán Shopee</a>
                            </li>
                            <li> 
                                <a>Tải Ứng Dụng</a>
                            </li>
                            <li> 
                                Kết nối
                                <a className='icon'><FaFacebook/></a>
                                <a className='icon'><FaInstagram/></a>
                            </li>
                        </ul>
                        <ul className="right">
                            <li> 
                                <a><span className='icon'><FaBell/></span>Thông Báo</a>
                            </li>
                            <li> 
                                <a><span className='icon'><FaQuestionCircle/></span>Hỗ Trợ</a>
                            </li>
                            <li> 
                                <a><span className='icon'><FaGlobe/></span>Tiếng Việt</a>
                            </li>
                            <li> 
                                <a className='signup'>Đăng Ký</a>
                            </li>
                            <li> 
                                <a>Đăng Nhập</a>
                            </li>
                        </ul>
                    </div>
                    <div className='bottom'>
                        {/* <img className='shopee-icon' src='https://w7.pngwing.com/pngs/640/479/png-transparent-shopee-application-icon-shopee-indonesia-discounts-and-allowances-coupon-shopping-e-commerce-shopee-text-retail-orange-thumbnail.png' ></img> */}
                        <div className="header__logo">
                            <img width={200} src={logo}/>                       
                        </div>
                        <div className='search'>
                            <form>
                                <input type='text' className='search-input' placeholder='VOUCHER MALL 50K'></input>
                                <button className='search-btn' ><FaSearch/></button>
                            </form>
                            <ul>
                                {recommendList.map(str => <li key={Math.random()*10000}>{str}</li>)}
                            </ul>
                        </div>
                        <a className='buy-btn'><FaShoppingCart/></a>
                    </div>
                </div>
            </div>
            <Link to="/" className='back-main'>to Main Page</Link>
        </div>
    );
}
export default ShopeeHeader;