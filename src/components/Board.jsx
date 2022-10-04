import SenderChat from "./SenderChat";
import ReceiverChat from "./ReceiverChat";
import { Form, Button } from "antd";
import { FormInput } from "./FormItems";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useState } from "react";
import wallpaper from "../assets/wallpaper1.jpg";

const Board = () => {
  const [disabled, setDisabled] = useState(true);
  const [form] = Form.useForm();

  const sendBtnToggleHandler = () => {
    form.getFieldValue("msg").trim().length
      ? setDisabled(false)
      : setDisabled(true);
  };

  return (
    <>
      <div className="f-d-c j-c-s-b board">
        <div
          className="chats"
          style={{
            background: `linear-gradient(#ffffffaa,#ffffffbb),url(${wallpaper})`,
          }}
        >
          <SenderChat msg={"Hi"} />
          <ReceiverChat msg={"Hello"} />
          <SenderChat msg={"How are you ??"} />
          <ReceiverChat msg={"I am good"} />
          <SenderChat msg={"Great!!"} />
          <ReceiverChat msg={"But who are you??"} />
          <SenderChat msg={"I am your school friend"} />
          <ReceiverChat msg={"Rohit??"} />
          <SenderChat msg={"Nope"} />
          <ReceiverChat msg={"Sakshi??"} />
        </div>
        <div className="text">
          <Form form={form}>
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
