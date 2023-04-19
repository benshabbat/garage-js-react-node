import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) navigate("/login");
  // }, [user, navigate]);

  return (
    <>
      <section className="heading">
        {user&&<h1>Welcome {user && user.username}</h1>}
      </section>
    </>
  );
};

export default Dashboard;
