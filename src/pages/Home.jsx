import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatBoard from "../components/ChatBoard";
import Contacts from "../components/Contacts";
import isAuth from "../utils/auth.util";
import { __getCookieValue } from "../utils/cookie.util";

const Home = () => {
  const [senderData, setSenderData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth()) navigate("/login");
    const data = __getCookieValue("ak-sender-data");
    setSenderData(data.data);
  }, []);
  return (
    <>
      <div className="top-container">
        <Contacts data={senderData} />
        <ChatBoard />
      </div>
      <style jsx="true">{`
        .top-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
      `}</style>
    </>
  );
};

export default Home;
