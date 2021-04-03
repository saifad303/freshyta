import React from "react";

function SignIn() {
  return (
    <>
      <div
        className="modal fade"
        id="userModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                <i className="fab fa-facebook-f"></i> Sign Up or Login with
                <span>Facebook</span>
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg btn-block"
              >
                <i className="fas fa-envelope"></i> Login with{" "}
                <span>Email</span>
              </button>

              <div className="or">
                <div className="left-line"></div>
                <div className="content">or</div>
                <div className="right-line"></div>
              </div>
              {/* <!-- or --> */}

              <div className="middle-content">
                <p>please enter yout mobile phone number</p>
              </div>

              <div className="phone-login">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="images/flag.png"
                        height="30"
                        width="30"
                        alt=""
                      />
                    </span>
                    <span className="input-group-text">+88 </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                </div>
              </div>

              <button
                type="button"
                className="btn btn-success btn-lg btn-block"
              >
                sign up / login
              </button>
            </div>
            {/* <!-- modal body --> */}
            <div className="modal-footer">
              Something write here by <a href="#">Admin</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
