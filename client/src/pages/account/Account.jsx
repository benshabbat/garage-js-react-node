import "./account.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReqService from "../../components/create/ReqService";
import useOpenModel from "../../hooks/useOpenModel";

const Account = ({user}) => {
  const [car, setCar] = useState();
  const [handleReqService, isOpenReqService] = useOpenModel();

  const handelCar = (e) => {
    const { value } = e.target;
    console.log(e.target.value);
    setCar(user?.cars.find((c) => c._id === value));
    handleReqService();
  };

  const navigate = useNavigate();

  const onServices = (e) => {
    const { value } = e.target;
    console.log(e.target.value);
    // setCar(user?.cars.find((c) => c._id === value));
    navigate(`/services/car/${value}`);
  };
  return (
    <>
      <div className="table-container">
        <section className="table__header">
          <h1>{`hello ${user?.username}`}</h1>
          <h2 className="title">Your cars</h2>
          <div className="input-group">
            <input type="search" placeholder="Search Data..." />
          </div>
        </section>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>brand</th>
                <th>numberPlate</th>
                <th>km</th>
                <th>history service</th>
                <th>Request Service</th>
              </tr>
            </thead>
            <tbody>
              {user?.cars?.[0]?._id &&
                user?.cars?.map((car) => {
                  return (
                    <tr key={car._id}>
                      <td>{car.brand}</td>
                      <td>{car.numberPlate}</td>
                      <td>{car.km}</td>
                      <td>
                        <button value={car._id} onClick={onServices}>
                          services
                        </button>
                      </td>
                      <td>
                        <button value={car._id} onClick={handelCar}>
                          req services
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </div>
      {
        <ReqService
          car={car}
          handelClick={handleReqService}
          isOpen={isOpenReqService}
          user={user}
        />
      }
    </>
  );
};

export default Account;
