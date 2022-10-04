import { FaEllipsisV } from "react-icons/fa";

const ReceiverTopBar = ({ pic }) => {
  return (
    <>
      <div className="j-c-s-b a-i-c reciever-topbar">
        <div className="pic">
          <img
            src={pic}
            alt=""
            height={50}
            width={50}
          />
        </div>
        <div className="dots c-pointer">
          <FaEllipsisV />
          <div className="options">
            <ul>
              <li className="c-pointer">Info</li>
              <li className="c-pointer">Delete Chat</li>
              <li className="c-pointer">Block</li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx="true">{`
        .pic {
          border-radius: 50%;
          overflow: hidden;
        }
        .reciever-topbar {
          background: var(--smoke);
          padding: 10px;
          box-shadow: 7px 0px 10px var(--granite);
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

export default ReceiverTopBar;
