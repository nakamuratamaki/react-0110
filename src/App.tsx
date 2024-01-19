import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li
          className="list-one"
          style={{
            paddingBottom: "20px",
            borderRadius: "20px",
            boxShadow: "rgb(51 51 51 / 30%) 2px 2px 5px",
          }}
        >
          <div
            className="list-one-image"
            style={{
              background:
                "url(https://images.unsplash.com/photo-1554984908-85d5698d1628?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) center / cover",
              width: "350px",
              height: "350px",
              borderRadius: "20px 20px 0px 0px",
              position: "relative",
            }}
          >
            <p
              className="list-one-title"
              style={{
                textAlign: "left",
                position: "absolute",
                bottom: "-10px",
                left: "0px",
                padding: "5px 20px",
                color: "white",
                fontSize: "25px",
                lineHeight: "1",
                fontWeight: "bold",
              }}
            >
              一太郎 26
              <br />
              <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                群馬県
              </span>
            </p>
          </div>
          <p
            style={{
              textAlign: "left",
              fontSize: "15px",
              lineHeight: "1",
              padding: "0 20px",
            }}
          >
            はじめまして！鳥を採るのが得意です。
          </p>
          <LikeButton />
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
function LikeButton() {
  return <span>いいね</span>;
}
export default App;
