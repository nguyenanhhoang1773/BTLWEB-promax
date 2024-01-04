import {
  faFacebook,
  faLinkedin,
  faXTwitter,
  faYoutube,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="flex text-white mt-[40px]">
      <div className="mt-[10px]] ">
        <h3 className="text-yellow-400 text-[22px] font-[600]">
          Tổng đài hỗ trợ
        </h3>
        <ul>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Gọi mua hàng 1900.2024
          </li>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Gọi khiếu nại 1900.2003
          </li>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Gọi bảo hành 1900.2029
          </li>
        </ul>
      </div>
      <div className="mt-[10px]] ml-[20px] flex-1">
        <h3 className="text-yellow-400 text-[22px] font-[600]">
          Thông tin và chính sách
        </h3>
        <ul>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Mua hàng và thanh toán Online
          </li>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Mua hàng trả góp Online
          </li>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Chính sách giao hàng
          </li>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Tra thông tin bảo hành
          </li>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Tra cứu hoá đơn điện tử
          </li>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Thông tin hoá đơn mua hàng
          </li>
          <li className="hover:text-yellow-400 hover:underline hover:cursor-pointer">
            Trung tâm bảo hành chính hãng
          </li>
        </ul>
      </div>
      <div className="mt-[10px]] ml-[20px]">
        <h3 className="text-yellow-400 text-[22px] font-[600]">
          Kết nối với chúng tôi
        </h3>
        <FontAwesomeIcon
          className="hover:scale-110 hover:cursor-pointer text-[20px]"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          className="hover:scale-110 hover:cursor-pointer text-[20px] ml-[8px]"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="hover:scale-110 hover:cursor-pointer text-[20px] ml-[8px]"
          icon={faTiktok}
        />
        <FontAwesomeIcon
          className="hover:scale-110 hover:cursor-pointer text-[20px] ml-[8px]"
          icon={faLinkedin}
        />
        <FontAwesomeIcon
          className="hover:scale-110 hover:cursor-pointer text-[20px] ml-[8px]"
          icon={faXTwitter}
        />
        <FontAwesomeIcon
          className="hover:scale-110 hover:cursor-pointer text-[20px] ml-[8px]"
          icon={faYoutube}
        />
      </div>
    </div>
  );
}

export default Footer;
