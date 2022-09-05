import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ModalComponents from "components/Modal.components";
import { getScheduleAPI } from "API/ClassSchedule";
import moment from "moment";
import Loading from "components/loading/Loading";

const CalendarComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const [edit, setEdit] = useState(false);
  const [addSchedule, setAddSchedule] = useState({
    day: "",
    start_time: "",
    end_time: "",
    employee_id: "",
    product_id: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getScheduleAPI();
      setData(res);
    };
    fetchData();
  }, []);

  const handleDateClick = (arg) => {
    setShow(true);
    {
      data?.find((item) => {
        if (moment(item.start_time).format("YYYY-MM-DD") === arg.dateStr) {
          setAddSchedule({
            ...addSchedule,
            day: item.day,
            start_time: item.start_time,
            end_time: item.end_time,
            employee_id: item.employee_id,
            product_id: item.product_id,
            id: item.id
          });
          setEdit(true);
        } else {
          setEdit(false);
        }
        //   moment(item.start_time).format("YYYY-MM-DD") === arg.dateStr
        //     ? (setAddSchedule({
        //         ...addSchedule,
        //         day: item.day,
        //         start_time: item.start_time,
        //         end_time: item.end_time,
        //         employee_id: item.employee_id,
        //         product_id: item.product_id,
        //         id: item.id
        //       }),
        //       setEdit(true))
        //     : setEdit(false);
      });
    }
  };

  console.log(edit, "< Edit");

  const dataEvent = data?.map((i) => ({
    ...i,
    title: i.product_id,
    date: i.start_time,
    id: i.id
  }));

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FullCalendar
            height={500}
            events={dataEvent}
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={handleDateClick}
          />
          <ModalComponents
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            show={show}
            data={data}
            edit={edit}
            setShow={setShow}
            addSchedule={addSchedule}
            setAddSchedule={setAddSchedule}
          />
        </>
      )}
    </>
  );
};

export default CalendarComponent;
