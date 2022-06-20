import { useRef, useState, useEffect } from "react";
import useAuth from "../../utilities/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import axios from "../../utilities/axios";
import FormComp from "../form/FormComp";
const LOGIN_URL = "../auth";

const SignUp = () => {
   return (
      <>
         <FormComp />
      </>
   );
};

export default SignUp;
