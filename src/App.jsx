import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header ,Container } from "./components/index";
import { Outlet } from "react-router-dom";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between ">
      <div className="w-full block">
        <Header />
        <Container>
          <main>
          TODO:
          <Outlet />
          </main>
        </Container>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
    </div>
  );
}
