import moment from "moment";

const SenderChat = (props) => {
  return (
    <>
      <div className="j-c-e receiver-chat">
        <div className="chat">{props.msg}</div>
        <div className="time f-d-c j-c-e">
          {moment(props.time).format("LT")}
        </div>
      </div>
      <style jsx="true">{`
        .j-c-e .chat {
          background: var(--mint);
          max-width: 350px;
          margin: 8px;
          padding: 8px 16px;
          border-radius: 16px 16px 0px 16px;
        }
        .time {
          font-size: 12px;
          margin-bottom: 5px;
        }
      `}</style>
    </>
  );
};

export default SenderChat;
