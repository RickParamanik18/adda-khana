import { Button, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../components/FormItems";
import bgPic from "../assets/bg3.jpg";
import axios from "axios";
import { __setCookie } from "../utils/cookie.util";
import { useEffect } from "react";
import isAuth from "../utils/auth.util";

const Signin = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/add`,
      e
    );

    if (result.data.status) {
      message.success(result.data.msg, 3);
      __setCookie("ak-sender-data", result.data.token, 5, "day");
      navigate("/");
    } else {
      message.error(result.data.msg, 3);
    }
  };

  useEffect(() => {
    if (isAuth()) navigate("/");
  }, []);

  return (
    <>
      <div className="signin">
        <div className="pic" style={{ background: `url(${bgPic})` }}></div>
        <div className="a-i-c j-c-c">
          <div className="signin-card">
            <Form onFinish={submitHandler}>
              <div className="item">
                <h1>Sign-in</h1>
              </div>
              <div className="item">
                <FormInput
                  name={"name"}
                  placeholder={"Enter Name"}
                  required={true}
                />
              </div>
              <div className="item">
                <FormInput
                  name={"email"}
                  placeholder={"Enter Email"}
                  required={true}
                />
              </div>
              <div className="item">
                <FormInput
                  name={"password"}
                  type="password"
                  placeholder={"Enter Password"}
                  required={true}
                />
              </div>
              <div className="item">
                <Button type="primary" htmlType="submit">
                  Signin
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <style jsx="true">{`
        .signin {
          height: 100vh;
          display: grid;
          grid-template-columns: 60% 40%;
        }
        .signin .pic {
          background-repeat: no-repeat !important;
          background-size: cover !important;
        }
        .signin-card {
          padding: 30px;
          box-shadow: 5px 2px 10px var(--granite);
        }
        .item {
          margin: 20px 0px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Signin;
