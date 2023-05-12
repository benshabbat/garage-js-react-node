import { useState } from "react";
import { createReqService } from "../../Utils";
import { OpenModel, Form } from "..";
const ReqService = ({ handelClick, car, isOpen, user }) => {
  const [formData, setFormData] = useState({
    from: user?._id,
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      description: car?.numberPlate.toString(),
    }));
    if (formData?.description) {
      await createReqService(formData);
      handelClick();
    }
  };
  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Request Service"
          inputs={[
            { name: "title", type: "text", value: car?.numberPlate.toString() },
            {
              name: "description",
              type: "text",
            },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default ReqService;
