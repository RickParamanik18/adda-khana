import chatPic from "../assets/chat2.jpg";
const DefaultChatBoard = () => {
  return (
    <>
      <div className="default-chat-board a-i-c j-c-c">
        <img src={chatPic} height={400} width={400} />
      </div>
      <style jsx="true">{`
        .default-chat-board {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default DefaultChatBoard;
