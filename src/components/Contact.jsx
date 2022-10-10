import axios from "axios";
import { useEffect, useState } from "react";
import { setReceiver } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { __getCookieValue } from "../utils/cookie.util";

const Contact = ({ details }) => {
  const [contactData, setContactData] = useState({});
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.setSocket);
  // const setReceiver = () => {};

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/user/get`, {
  //       params: { uid },
  //     })
  //     .then((resp) => setContactData(resp.data.data))
  //     .catch((err) => console.log(err));
  // }, []);
  const createRoom = () => {
    if (details) {
      let receiverId = details?.uid;
      dispatch(setReceiver(receiverId));

      // let senderId = __getCookieValue("ak-sender-data").data.uid;
      // socket.emit("create-room", senderId);
      socket.emit("create-room", receiverId);
    }
  };
  // useEffect(() => {
  //   socket.on("new-msg", (msg) => {
  //     console.log(msg);
  //   });
  // }, [socket]);
  return (
    <>
      <div className="j-c-s-b a-i-c contact" onClick={createRoom}>
        <img
          src={details?.pic}
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />
        <div>{details?.name}</div>
      </div>
      <style jsx="true">{`
        .contact {
          background: var(--olive);
          padding: 8px;
          margin: 12px 0px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};

export default Contact;
