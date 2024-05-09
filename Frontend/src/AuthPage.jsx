import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [activeTab, setActiveTab] = useState("home"); // Initialize activeTab state

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page" style={{}}>
      <div style={{ color: "yellow", marginLeft: "40px", fontStyle: "italic" }}>
        <h1>Welcome 👋</h1>
      </div>
      <div className="card">
        <Tabs
          id="controlled-tab-example"
          activeKey={activeTab} // Use activeTab state here
          onSelect={(k) => setActiveTab(k)} // Update activeTab state on tab change
          className="mb-3"
        >
          <Tab className="tab" eventKey="home" title="Login">
            {/* Login Form */}
            <h4 style={{ textAlign: "initial", color: "gray" }}>
              Already have an acount!!!
            </h4>
            <form onSubmit={onLogin}>
              <div className="title">Login</div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="secret"
                placeholder="Password"
                onChange={(e) => setSecret(e.target.value)}
              />
              <button className="btn" type="submit">
                LOG IN
              </button>
            </form>
          </Tab>
          <Tab className="tab" eventKey="profile" title="SignUp">
            {/* Sign Up Form */}
            <h4 style={{ textAlign: "initial", color: "gray" }}>
              Don't have an acount!!!
            </h4>
            <form onSubmit={onSignup}>
              <div className="title">Sign Up</div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="secret"
                placeholder="Password"
                onChange={(e) => setSecret(e.target.value)}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <button className="btn" type="submit">
                SIGN UP
              </button>
            </form>
          </Tab>
        </Tabs>
      </div>

      <style>{`
      .login-page { width: 100%; height: 100vh; padding-top: 4vw; background: linear-gradientbackground-color: #000000;
        background: linear-gradient(
          75deg,
          rgb(20, 23, 33) 0%,
          rgb(20, 23, 33) 50%,
          rgba(20, 23, 33, 0.8) 100%
        );}
      .card { width: 80%; left: calc(10vw - 10px); position: relative; text-align: center; background: none}
      .title { padding-top: 32px; font-size: 22px; color: white; font-weight: 700; }
      input { width: calc(100% - 30%); margin-top: 6px; padding: 8px; background-color: #e6f7ff; outline: none; border: 1px solid #e6f7ff; }
      .tab { margin-top: 12px; width: 100%; padding: 8px}
      .btn {width:50%; margin-top: 12px;padding: 8px; color:white}
      `}</style>
    </div>
  );
};

export default AuthPage;
