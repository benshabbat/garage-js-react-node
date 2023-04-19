import "./account.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";
import { logout, reset } from "../../features/auth/authSlice";
import ReqService from "../reqService/ReqService";

const Account = () => {
  const { _id } = useSelector((state) => state.auth.user);
  const { user, isError, message } = useSelector((state) => state.user);
  const [carId, setCarId] = useState("");
  const [openModel, setOpenModel] = useState(false);

  const handelClick = (e) => {
    console.log(e.target.value);
    setCarId(e.target.value);
    setOpenModel(!openModel);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onServices = (e) => {
    console.log(e.target.value);
    const carId = e.target.value;
    navigate(`/services/car/${carId}`);
  };
  // const onReqServices = (e) => {
  //   const carId = e.target.value;
  //   navigate(`/services/req/${carId}`);
  // };
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!_id) {
      // navigate("/login");
      dispatch(logout());
      dispatch(reset());
    }
    dispatch(getUser(_id));
  }, []);
  return (
    <>
      <h3 className="h-title">user id from local storage: {_id ? _id : null}</h3>
      <h1 className="h-title">{`hello ${user?.username}`}</h1>
      <h2 className="title">Your cars</h2>

      <table className="table">
        <thead className="table-head">
          <tr className="table-row">
            <th>mark</th>
            <th>brand</th>
            <th>model</th>
            <th>numberPlate</th>
            <th>km</th>
            {/* <th>owner</th> */}
            <th>last treatment</th>
            <th>history service</th>
            <th>Request Service</th>
          </tr>
        </thead>
        <tbody>
          {user?.cars?.[0]?._id &&
            user?.cars?.map((car) => {
              const dateArray = car.updatedAt.slice(0, 10).split("-");
              const [year, month, day] = dateArray;
              return (
                <tr key={car._id} className="table-row">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{car.brand.split("-")[0]}</td>
                  <td>{car.brand.split("-")[1]}</td>
                  <td>{car.numberPlate}</td>
                  <td>{car.km}</td>
                  {/* <td>{car.updatedAt}</td> */}
                  <td>{`${day}/${month}/${year}`}</td>
                  <td>
                    <button value={car._id} onClick={onServices}>
                      services
                    </button>
                  </td>
                  <td>
                    <button value={car._id} onClick={handelClick}>
                      req services
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {openModel && <ReqService carId={carId} handelClick={handelClick} />}
    </>
  );
};

export default Account;
