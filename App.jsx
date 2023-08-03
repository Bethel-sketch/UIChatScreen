import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Frame16 from "./components/Frame16";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|chatscreen)">
          <div className="container-center-horizontal">
            <form className="chatscreen screen" name="form1" action="form1" method="post">
              <div className="overlap-group-container">
                <div className="overlap-group1">
                  <div className="frame-15"></div>
                  <div className="overlap-group4">
                    <h1 className="title valign-text-middle">Money Mentor</h1>
                    <img
                      className="back-btn"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/backbtn@2x.png"
                      alt="BackBtn"
                    />
                    <img
                      className="fin-bot-2"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/finbot-2@2x.png"
                      alt="FinBot 2"
                    />
                    <div className="frame-4">
                      <div className="ellipse-1"></div>
                      <div className="online valign-text-middle">Online</div>
                    </div>
                    <img
                      className="line-3"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/line-3.svg"
                      alt="Line 3"
                    />
                  </div>
                </div>
                <div className="overlap-group3">
                  <div className="frame-16">
                    <img
                      className="line"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/line-1.svg"
                      alt="Line 1"
                    />
                    <img
                      className="line"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/line-2.svg"
                      alt="Line 2"
                    />
                  </div>
                  <img
                    className="fin-bot-4"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/finbot-4@2x.png"
                    alt="FinBot 4"
                  />
                  <div className="frame-16-1">
                    <p className="hello-how-can-i-help-you valign-text-middle nunito-bold-black-16px">
                      Hello, how can I help you?
                    </p>
                  </div>
                </div>
              </div>
              <div className="frame-16-2">
                <p className="hi-finbot-what-is-a-roth-ira valign-text-middle nunito-bold-mercury-16px">
                  Hi Finbot, what is a Roth IRA?
                </p>
              </div>
              <div className="overlap-group2">
                <div className="frame-1">
                  <img
                    className="line-1"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/line-1-1.svg"
                    alt="Line 1"
                  />
                  <img
                    className="line-1"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/line-2-1.svg"
                    alt="Line 2"
                  />
                </div>
                <img
                  className="fin-bot-5"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/finbot-5@2x.png"
                  alt="FinBot 5"
                />
                <Frame16 />
              </div>
              <div className="frame-16-3">
                <p className="how-much-can-i-contr valign-text-middle nunito-bold-mercury-16px">
                  How much can I contribute to a Roth IRA each year?
                </p>
              </div>
              <div className="overlap-group">
                <div className="frame-1">
                  <img
                    className="line-2"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/line-1-2.svg"
                    alt="Line 1"
                  />
                  <img
                    className="line-2"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/line-2-2.svg"
                    alt="Line 2"
                  />
                </div>
                <img
                  className="fin-bot-6"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/finbot-4@2x.png"
                  alt="FinBot 6"
                />
                <Frame16 />
              </div>
              <div className="frame-15-1">
                <input
                  className="write-your-message"
                  name="writeyourmessage"
                  placeholder="Write your message..."
                  type="text"
                />
                <a href="javascript:SubmitForm('form1')">
                  <img
                    className="submitbtn"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64cbe46774252cafed7b5b98/releases/64cbeeeb2275becbe4eaf1ce/img/submitbtn@2x.png"
                    alt="submitbtn"
                  />
                </a>
              </div>
            </form>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
