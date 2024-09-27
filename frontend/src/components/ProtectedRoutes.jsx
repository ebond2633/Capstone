import React from "react";
import { Routes as R, Route } from "react-router-dom";
import { Login, Register, AuthWrapper, SingleItem, Cart } from "./";
import Products from "./Products"; // Fixed import statement
import Home from "./Home";
// import bgImage from "../assets/bgImage.jpeg";
import ContactForm from ".components/ContactForm";
import PaymentForms from ".components/PaymentForms";
import StripeContainer from "./StripeContainer";


function ProtectedRoutes({ isLoggedIn, handleLogin }) {
  return (
    <R>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<SingleItem />} />
      <Route path="/products" element={<Products />} /> {/* Fixed syntax error */}
      <Route path="/contactform" element={<ContactForm />} />
      <Route path="/PaymentForm" element={<PaymentForms />} />
      <Route path="/stripeContainer" element={<StripeContainer />} />
      <Route path="/bgImage" element={<img src={greenImage} alt="bgImage" />} />
      <Route 
        path="/login"
        element={
          <AuthWrapper title="Login">
            <Login handleLogin={handleLogin} />
          </AuthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <AuthWrapper title="Register">
            <Register />
          </AuthWrapper>
        }
      />
    </R>
  );
}

export default ProtectedRoutes;