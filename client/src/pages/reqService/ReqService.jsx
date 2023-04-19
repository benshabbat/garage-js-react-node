import "./reqService.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReqService } from "../../features/user/userSlice";
import CancelIcon from "@mui/icons-material/Cancel";

const ReqService = ({handelClick , carId}) => {
  const { user } = useSelector((state) => state.user);
  const ADMIN = "63e14deca4340e45d23f20b2";
  const [formData, setFormData] = useState({
    from: user._id,
    to: ADMIN,
    title: "",
    description: "",
  });


  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const car = user?.cars.find((c) => c._id === carId);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createReqService(formData));
  };
  return (
    <div className="r-service-background">
      <div className="r-service-container">
        <form className="r-service-form" onSubmit={onSubmit}>
        <CancelIcon onClick={handelClick} className="review-close" />
          <label className="contact-label">
            <span>Title</span>
            <input
              placeholder="title"
              className="form-control"
              type="text"
              name="title"
              onChange={handleChange}
              required
            />
          </label>
          <label className="r-service-label">
            <span>Description</span>
            <textarea
              rows={8}
              placeholder="description"
              className="form-control"
              type="text"
              name="description"
              value={car?.numberPlate}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReqService;
