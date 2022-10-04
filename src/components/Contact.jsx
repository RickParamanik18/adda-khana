import axios from "axios";
import { useEffect, useState } from "react";
import { setReceiver } from "../actions/index";
import { useDispatch } from "react-redux";

const Contact = ({ details }) => {
  const [contactData, setContactData] = useState({});
  const dispatch = useDispatch();
  // const setReceiver = () => {};

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/user/get`, {
  //       params: { uid },
  //     })
  //     .then((resp) => setContactData(resp.data.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <div
        className="j-c-s-b a-i-c contact"
        onClick={() => (details ? dispatch(setReceiver(details?.uid)) : null)}
      >
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
