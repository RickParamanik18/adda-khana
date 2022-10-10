import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Board from "./Board";
import DefaultChatBoard from "./defaultChatBoard";
import ReceiverTopBar from "./ReceiverTopBar";

const ChatBoard = () => {
  const [receiverData, setReceiverData] = useState({});
  const receiverId = useSelector((state) => state.setReceiver);

  useEffect(() => {
    if (receiverId) {
      // fetching receiver data
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/get`, {
          params: { uid: receiverId },
        })
        .then((resp) => setReceiverData(resp.data.data))
        .catch((err) => console.log(err));
      // @TODO fetch chat data
    }
  }, [receiverId]);
  // console.log({receiverId})
  return (
    <>
      <div className="chat-board">
        {receiverId ? (
          <>
            <ReceiverTopBar pic={receiverData.pic} />
            <Board />
          </>
        ) : (
          <DefaultChatBoard/>
        )}
      </div>
      <style jsx="true">{``}</style>
    </>
  );
};

export default ChatBoard;
