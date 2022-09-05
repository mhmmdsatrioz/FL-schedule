import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postScheduleAPI } from "API/ClassSchedule";
import toast from "react-hot-toast";
import { putScheduleAPI } from "API/ClassSchedule";

const WrapperInput = styled.div`
  display: flex;
  padding: 0 2rem;
  width: 100%;
  align-items: center;
  gap: 9px;
  color: white;
  flex-direction: column;

  .wrapper-text {
    width: 100%;

    h1 {
      font-size: 17px;
      font-weight: 600;
      padding: 0;
      margin: 0;
      &:after {
        color: red;
        content: "*";
      }
    }
    input {
      font-weight: 500;
      background: #dfdada;
      border-radius: 5px;
      border: none;
      width: 100%;
      padding: 0 15px;
      height: 35px;
      outline: none;

      &::placeholder {
        color: black;
      }
    }
  }
`;

const ModalComponent = ({
  edit,
  addSchedule,
  setAddSchedule,
  show,
  setShow,
  data,
  isLoading,
  setIsLoading
}) => {
  const { day, start_time, end_time, employee_id, product_id } = addSchedule;

  const handleClose = () => {
    setAddSchedule({
      day: "",
      start_time: "",
      end_time: "",
      employee_id: "",
      product_id: ""
    });
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddSchedule({ ...addSchedule, [name]: value });
  };

  const postDataReq = async () => {
    setIsLoading(true);
    await postScheduleAPI(addSchedule).then(({ data }) => {
      toast.success("Success Create Schedule");
      setIsLoading(false);

      setAddSchedule({
        // reset state
        day: "",
        start_time: "",
        end_time: "",
        employee_id: "",
        product_id: ""
      });
      setIsLoading(false);
    });
  };

  const putScheduleReq = async () => {
    await putScheduleAPI(addSchedule).then((res) => {
      console.log(res);
      toast.success("Update Success");
    });
  };

  const handleSubmit = () => {
    console.log(addSchedule);
    if (edit) {
      putScheduleReq();
    }
    postDataReq();
  };

  return (
    <>
      <div>
        <Modal show={show}>
          <Modal.Header
            style={{
              background:
                "radial-gradient(97.61% 55.99% at 50.15% 44.01%, rgba(22, 81, 123, 0.69) 0%, #1E1A36 100%)"
            }}
          >
            <Modal.Title
              style={{ color: "white", textAlign: "center", width: "100%", fontWeight: "700" }}
            >
              Class Schedule
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              background:
                "radial-gradient(97.61% 55.99% at 50.15% 44.01%, rgba(22, 81, 123, 0.69) 0%, #1E1A36 100%)"
            }}
          >
            <WrapperInput className="">
              <div className="wrapper-text">
                <h1 className=" ">Day</h1>
                <input placeholder="Day" value={day} onChange={handleChange} name="day" />
              </div>

              <div className="wrapper-text">
                <h1>Start Time</h1>
                <input
                  placeholder="Start Time"
                  onChange={handleChange}
                  type="date"
                  name="start_time"
                  value={start_time}
                />
              </div>
              <div className="wrapper-text">
                <h1 className="p-0 m-0  after:text-red-500 after:content-['*'] ">End Time</h1>
                <input
                  placeholder="End Time"
                  onChange={handleChange}
                  name="end_time"
                  type="date"
                  value={end_time}
                  className="w-full bg-gray-300 focus:outline-none border-none h-8 rounded px-2"
                />
              </div>

              <div className="wrapper-text">
                <h1>Employee Name</h1>
                <input
                  placeholder="Employee Name"
                  onChange={handleChange}
                  value={employee_id}
                  name="employee_id"
                />
              </div>

              <div className="wrapper-text">
                <h1>Product Name</h1>
                <input
                  placeholder="Product Name"
                  onChange={handleChange}
                  name="product_id"
                  value={product_id}
                />
              </div>
            </WrapperInput>
          </Modal.Body>
          <Modal.Footer
            style={{
              background:
                "radial-gradient(97.61% 55.99% at 50.15% 44.01%, rgba(22, 81, 123, 0.69) 0%, #1E1A36 100%)"
            }}
          >
            <button
              onClick={handleClose}
              className="bg-red-500 text-white hover:text-white py-2 px-3 rounded"
              style={{
                background: "red",
                color: "white",
                padding: "2rem 3rem",
                borderRadius: "15px",
                border: "none",
                outline: "none"
              }}
            >
              Close
            </button>
            <Button onClick={handleSubmit} type="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default React.memo(ModalComponent);
