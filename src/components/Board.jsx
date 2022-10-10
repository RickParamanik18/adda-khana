import SenderChat from "./SenderChat";
import ReceiverChat from "./ReceiverChat";
import { Form, Button } from "antd";
import { FormInput } from "./FormItems";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import wallpaper from "../assets/wallpaper1.jpg";
import { useSelector } from "react-redux";
import getEpocTime from "../utils/helper.util";
import { __getCookieValue } from "../utils/cookie.util";

const Board = () => {
  const [disabled, setDisabled] = useState(true);
  const [currentMsg, setCurrentMsg] = useState([]);
  const [form] = Form.useForm();
  const bottomRef = useRef(null);
  const socket = useSelector((state) => state.setSocket);
  const receiverId = useSelector((state) => state.setReceiver);
  let data = __getCookieValue("ak-sender-data");
  let senderId = data.data.uid;

  const sendBtnToggleHandler = () => {
    form.getFieldValue("msg").trim().length
      ? setDisabled(false)
      : setDisabled(true);
  };

  const sbmitHandler = ({ msg }) => {
    socket.emit("send-msg", receiverId, msg);
    setCurrentMsg((prev) => [
      ...prev,
      { uid: receiverId, msg, time: getEpocTime() },
    ]);
    form.resetFields();
    setDisabled(true);
  };

  useEffect(() => {
    socket.on("new-msg", (msg) => {
      setCurrentMsg((prev) => [
        ...prev,
        { uid: senderId, msg, time: getEpocTime() },
      ]);
    });
  }, []);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMsg]);

  return (
    <>
      <div className="f-d-c j-c-s-b board">
        <div
          className="chats"
          style={{
            background: `linear-gradient(#ffffffaa,#ffffffbb),url(${wallpaper})`,
          }}
        >
          {currentMsg.map((data, index) => {
            return senderId === data.uid ? (
              <SenderChat msg={data.msg} time={data.time} key={index} />
            ) : (
              <ReceiverChat msg={data.msg} time={data.time} key={index} />
            );
          })}
          <div ref={bottomRef} />
        </div>
        <div className="text">
          <Form form={form} onFinish={sbmitHandler}>
            <div className="a-i-c j-c-c">
              <FormInput
                name={"msg"}
                placeholder={"Enter your message here"}
                onChange={sendBtnToggleHandler}
              />
              &nbsp;
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                disabled={disabled}
              >
                <RiSendPlane2Fill />
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <style jsx="true">{`
        .chats {
          height: 80vh;
          overflow: scroll;
          background-repeat: no-repeat !important;
          background-size: cover !important;
        }
        .text {
          margin-top: 5px;
        }
        .board {
          padding: 0px 10px;
        }
      `}</style>
    </>
  );
};

export default Board;
