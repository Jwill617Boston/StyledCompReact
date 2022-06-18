import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
   Button,
   Form,
   FormGroup,
   Label,
   Input,
   FormText,
   Col,
} from "reactstrap";

import {
   getAuth,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
} from "firebase/auth";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import styled from "styled-components";

import useAuth from "../../utilities/useAuth";

import { toast } from "react-toastify";

import { db } from "../../firebase/FirebaseAuth";

const Container = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`;

const user = {
   firstName: "",
   lastName: "",
   email: "",
   password: "",
};

const FormComp = () => {
   const fireauth = getAuth();
   const { auth, setAuth } = useAuth();

   // Reducer
   const [userData, dispatch] = useReducer(reducer, user);

   function reducer(userData, { type, payload }) {
      switch (type) {
         case "email":
            return { ...userData, email: payload };
         case "password":
            return { ...userData, password: payload };
         case "firstName":
            return { ...userData, firstName: payload };
         case "lastName":
            return { ...userData, lastName: payload };

         default:
            throw new Error(`Unknown action type: ${type}`);
      }
   }

   // FIREBASE REF

   const navigate = useNavigate();
   console.log("userData", userData);
   console.log("auth", auth);
   console.log("auth UID", auth.uid);

   // HANLDER

   const userSubmit = async () => {
      console.log("CLicked");

      await createUserWithEmailAndPassword(
         fireauth,
         userData.email,
         userData.password
      )
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
         });

      await onAuthStateChanged(fireauth, (user) => {
         if (user) {
            const uid = user.uid;
            console.log(uid);
            const userAuthData = {
               uid,
               firstName: userData.firstName,
               lastName: userData.lastName,
            };

            setAuth(userAuthData);
            console.log("auth", auth);
            toast(`User has uploaded`, {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
            });

            // ...
         } else {
            // User is signed out
            // ...
         }
      });

      const userFileName = auth.uid.toString();

      const userCollectionRef = collection(db, userFileName);

      await addDoc(userCollectionRef, {
         ...auth,
         Timestamp: serverTimestamp(),
      });
   };

   return (
      <>
         <Container>
            <Form>
               <FormGroup row>
                  <Label for="firstName" sm={2}>
                     First Name:
                  </Label>
                  <Col sm={10}>
                     <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name..."
                        value={userData.firstName}
                        onChange={(e) => {
                           dispatch({
                              type: "firstName",
                              payload: e.target.value,
                           });
                        }}
                     />
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="lastName" sm={2}>
                     Last Name:
                  </Label>
                  <Col sm={10}>
                     <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name..."
                        value={userData.lastName}
                        onChange={(e) => {
                           dispatch({
                              type: "lastName",
                              payload: e.target.value,
                           });
                        }}
                     />
                  </Col>
               </FormGroup>
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
                     <Button onClick={userSubmit}>Sign Up</Button>
                  </Col>
               </FormGroup>
            </Form>
         </Container>
      </>
   );
};

export default FormComp;
