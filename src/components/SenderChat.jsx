const SenderChat = (props) => {
  return (
    <>
      <div className="j-c-s">
        <div className="time f-d-c j-c-e">05:32</div>
        <div className="chat">{props.msg}</div>
      </div>
      <style jsx="true">{`
        .chat {
          background: var(--maya);
          max-width: 350px;
          margin: 8px;
          padding: 8px 16px;
          border-radius: 16px 16px 16px 0px;
        }
      `}</style>
    </>
  );
};

export default SenderChat;
