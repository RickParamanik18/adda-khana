import { Button, Form, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../components/FormItems";
import bgPic from "../assets/bg3.jpg";
import isAuth from "../utils/auth.util";
import { __getCookie, __setCookie } from "../utils/cookie.util";

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/auth`,
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
      <div className="login">
        <div className="pic" style={{ background: `url(${bgPic})` }}></div>
        <div className="a-i-c j-c-c">
          <div className="login-card">
            <Form onFinish={submitHandler}>
              <div className="item">
                <h1>Log-in</h1>
              </div>
              <div className="item">
                <FormInput
                  name={"email"}
                  placeholder={"Enter Email"}
                  required={true}
                  message="Email is mandetory"
                />
              </div>
              <div className="item">
                <FormInput
                  name={"password"}
                  placeholder={"Enter Password"}
                  required={true}
                  message="Password is mandetory"
                />
              </div>
              <div className="item">
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <style jsx="true">{`
        .login {
          height: 100vh;
          display: grid;
          grid-template-columns: 60% 40%;
        }
        .login .pic {
          background-repeat: no-repeat !important;
          background-size: cover !important;
        }
        .login-card {
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

export default Login;
