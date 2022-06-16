import { useRef, useState, useEffect } from "react";
import useAuth from "../../utilities/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import axios from "../../utilities/axios";
const LOGIN_URL = "../auth";

const Login = () => {
   const { setAuth } = useAuth();

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const userRef = useRef();
   const errRef = useRef();

   const [user, setUser] = useState("");
   const [pwd, setPwd] = useState("");
   const [errMsg, setErrMsg] = useState("");

   useEffect(() => {
      userRef.current.focus();
   }, []);

   useEffect(() => {
      setErrMsg("");
   }, [user, pwd]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.post(
            LOGIN_URL,
            JSON.stringify({ user, pwd }),
            {
               headers: { "Content-Type": "application/json" },
               withCredentials: true,
            }
         );
         console.log(JSON.stringify(response?.data));
         //console.log(JSON.stringify(response));
         const accessToken = response?.data?.accessToken;
         const roles = response?.data?.roles;
         setAuth({ user, pwd, roles, accessToken });
         setUser("");
         setPwd("");
         navigate(from, { replace: true });
      } catch (err) {
         if (!err?.response) {
            setErrMsg("No Server Response");
         } else if (err.response?.status === 400) {
            setErrMsg("Missing Username or Password");
         } else if (err.response?.status === 401) {
            setErrMsg("Unauthorized");
         } else {
            setErrMsg("Login Failed");
         }
         errRef.current.focus();
      }
   };

   const Container = styled.div`
      width: 100%;
      max-width: 420px;
      min-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.4);
   `;

   const Wrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
   `;

   const FormWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-grow: 1;
      padding-bottom: 1rem;
   `;

   return (
      <>
         <Container>
            <Wrapper>
               <section>
                  <p
                     ref={errRef}
                     className={errMsg ? "errmsg" : "offscreen"}
                     aria-live="assertive"
                  >
                     {errMsg}
                  </p>
                  <Wrapper>
                     <h1>Sign In</h1>
                  </Wrapper>

                  <FormWrapper>
                     <form onSubmit={handleSubmit}>
                        <FormWrapper>
                           <label htmlFor="username">Username:</label>
                           <input
                              type="text"
                              id="username"
                              ref={userRef}
                              autoComplete="off"
                              onChange={(e) => setUser(e.target.value)}
                              value={user}
                              required
                           />

                           <label htmlFor="password">Password:</label>
                           <input
                              type="password"
                              id="password"
                              onChange={(e) => setPwd(e.target.value)}
                              value={pwd}
                              required
                           />
                           <button>Sign In</button>
                        </FormWrapper>
                     </form>
                  </FormWrapper>

                  <p>
                     Need an Account?
                     <br />
                     <span className="line">
                        <Link to="/register">Sign Up</Link>
                     </span>
                  </p>
               </section>
            </Wrapper>
         </Container>
      </>
   );
};

export default Login;
