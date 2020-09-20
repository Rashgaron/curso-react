import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../actions/authActions";
import Carrito from "../../assets/Logo/shopping-basket.png";
const Header = () => {
  const dispatch = useDispatch();
  const isEmpty = useSelector((state) => state.firebaseReducer.auth.isEmpty);

  const handleClick = () => {
    dispatch(logOutAction());
  };

  return (
    <>
      <div className="row justify-content-end bg-dark text-light p-1 align-items-center">
        <div className="col-2 col-md-1 icon text-center">
          <Link to="carrito">
            <img
              src={Carrito}
              alt="instagram"
              className="w-50 w-lg-25"
              width="20%"
            ></img>
          </Link>
        </div>
        {!isEmpty ? (
          <div className="col-auto">
            {/* eslint-disable-next-line */}
            <button className="btn btn-danger btn-sm" onClick={handleClick}>
              SignOut
            </button>
          </div>
        ) : (
          <>
            <div className="col-auto">
              <Link to="/signIn" className="btn btn-success">
                SignIn
              </Link>
            </div>
            <div className="col-auto">
              <Link to="/logIn" className="btn btn-primary btn-sm">
                LogIn
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="row">
        <Navbar></Navbar>
      </div>
    </>
  );
};

export default Header;
