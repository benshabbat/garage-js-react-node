import { useState } from "react";
import { createReqService } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import "./contact.css";
const Contact = () => {
  const ADMIN = "63e14deca4340e45d23f20b2";
  const [formData, setFormData] = useState({
    from: "",
    to: ADMIN,
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createReqService(formData));
  };
  return (
    <div id="contact">
      <form className="contact-form" onSubmit={onSubmit}>
        <label className="contact-label">
          <span>Name</span>
          <input
            placeholder="from"
            type="text"
            name="from"
            // value={user?.username}
            onChange={handleChange}
            required
          />
        </label>
        <label className="contact-label">
          <span>Title</span>
          <input
            placeholder="title"
            type="text"
            name="title"
            onChange={handleChange}
            required
          />
        </label>
        <label className="contact-label">
          <span>Description </span>
          <textarea
            rows={8}
            placeholder="description"
            type="text"
            name="description"
            onChange={handleChange}
            row={8}
            required
          />
        </label>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
