import React, { useReducer } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import styled from "styled-components";

import useAuth from "../../utilities/useAuth";

import { toast } from "react-toastify";

import { db } from "../../firebase/FirebaseAuth";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`;

const user = {
   email: "",
   password: "",
};

const Login = () => {
   const navigate = useNavigate();

   const fireAuth = getAuth();
   const { auth, setAuth } = useAuth();

   // Reducer
   const [userData, dispatch] = useReducer(reducer, user);

   function reducer(userData, { type, payload }) {
      switch (type) {
         case "email":
            return { ...userData, email: payload };
         case "password":
            return { ...userData, password: payload };

         default:
            throw new Error(`Unknown action type: ${type}`);
      }
   }

   // FIREBASE REF

   // HANLDER

   const userSubmit = async () => {
      console.log("CLicked");
      await signInWithEmailAndPassword(
         fireAuth,
         userData.email,
         userData.password
      )
         .then((userCredential) => {
            // Signed in
            const userID = userCredential.user.uid;
            setAuth({ uid: userID });
            window.localStorage.setItem("uid", auth.uid);
            console.log("Logged IN", auth);

            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         });
      navigate("/userpage", { replace: true });
   };

   return (
      <>
         <Container>
            <Form>
               <FormGroup row>
                  <Label for="email" sm={2}>
                     Email
                  </Label>
                  <Col sm={10}>
                     <Input
                        id="email"
                        name="email"
                        placeholder="Email..."
                        value={userData.email}
                        onChange={(e) => {
                           dispatch({
                              type: "email",
                              payload: e.target.value,
                           });
                        }}
                     />
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="password" sm={2}>
                     Password
                  </Label>
                  <Col sm={10}>
                     <Input
                        id="password"
                        name="password"
                        placeholder="Password..."
                        value={userData.password}
                        onChange={(e) => {
                           dispatch({
                              type: "password",
                              payload: e.target.value,
                           });
                        }}
                     />
                  </Col>
               </FormGroup>
               {/* SUBMIT BUTTON */}
               <FormGroup check row>
                  <Col
                     sm={{
                        offset: 2,
                        size: 10,
                     }}
                  >
                     <Button onClick={userSubmit}>Login</Button>
                  </Col>
               </FormGroup>
            </Form>
         </Container>
      </>
   );
};

export default Login;
