import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { __deleteCookie } from "../utils/cookie.util";

const SenderTopBar = (props) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    __deleteCookie("ak-sender-data");
    navigate("/login");
  };
  
  return (
    <>
      <div className="j-c-s-b a-i-c sender-topbar">
        <div className="pic c-pointer">
          <img src={props.pic} alt="" height={50} width={50} />
        </div>
        <div className="dots c-pointer">
          <FaEllipsisV />
          <div className="options">
            <ul>
              <li className="c-pointer">Theme</li>
              <li className="c-pointer" onClick={logoutHandler}>
                Log Out
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx="true">{`
        .pic {
          border-radius: 50%;
          overflow: hidden;
        }
        .sender-topbar {
          margin-bottom: 20px;
        }
        .dots {
          position: relative;
        }
        .options {
          position: relative;
          z-index: 999;
          background: white;
          position: absolute;
          right: 0px;
          min-width: 150px;
          padding: 10px;
          box-shadow: 2px 2px 5px #515151;
          display: none;
        }
        .options ul {
          list-style: none;
          padding: 0px;
        }
        .options ul li {
          padding: 3px 15px;
        }
        .options ul li:hover {
          background: var(--granite);
        }
        .dots:hover .options {
          display: block;
        }
      `}</style>
    </>
  );
};

export default SenderTopBar;
