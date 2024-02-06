import React, { useRef } from "react";
import "../styles/login.scss";
import {Link} from 'react-router-dom';

const Login = () => {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

  const handleLoginClick = () => {
    containerRef.current.classList.remove("active");
  };

  const handleRegisterClick = () => {
    containerRef.current.classList.add("active");
  };

  return (
    <div className="login-container" id="login-container" ref={containerRef}>
      <div className="form-container sign-up">
        <form>
          <h1 className="text-4xl">Create Account</h1>
          <div className="social-icons">
            <a href="#" class="icon">
              <i class="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span className="text-2xl">or use your email for registration</span>
          <div class="form__group field">
              <input type="input" class="form__field" placeholder="Name" required=""/>
              <label for="name" class="form__label">Name</label>
          </div>
          <div class="form__group field">
              <input type="input" class="form__field" placeholder="E-Mail" required=""/>
              <label for="name" class="form__label">E-Mail</label>
          </div>
          <div class="form__group field">
              <input type="input" class="form__field" placeholder="Password" required=""/>
              <label for="name" class="form__label">Password</label>
          </div>
          <Link to='/home'><button>Sign Up</button></Link>
          
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1 className="text-4xl">Sign In</h1>
          <div className="social-icons">
            <a href="#" class="icon">
              <i class="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <div class="form__group field">
              <input type="input" class="form__field" placeholder="E-Mail" required=""/>
              <label for="name" class="form__label">E-Mail</label>
          </div>
          <div class="form__group field">
              <input type="input" class="form__field" placeholder="Password" required=""/>
              <label for="name" class="form__label">Password</label>
          </div>
          <a href="#">Forget Your Password?</a>
          <Link to ='/home'><button>Sign In</button></Link>
          
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className="text-4xl">Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button id="login" ref={loginBtnRef} onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className="text-4xl">Welcome, Friend!</h1>
            <p>Enter your personal details to use all site features</p>
            <button
              id="register"
              ref={registerBtnRef}
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;