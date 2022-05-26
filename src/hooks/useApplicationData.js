import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => setState({ ...state, day });
  // const setDay2 = function (day) {
  //   setState({...state, day})
  // }
  // const setDays = (days) => setState((prev) => ({ ...prev, days }));

  const countSpots = (state, appointments) => {
    const currentDay = state.days.find((day) => day.name === state.day);
    const appointmentIDs = currentDay.appointments;

    const spots = appointmentIDs.filter(
      (id) => !appointments[id].interview
    ).length;

    return spots;
  };

  const updateSpots = (state, appointments) => {
    const updatedDays = [...state.days];
    const updatedDay = { ...state.days.find((day) => day.name === state.day) };

    const spots = countSpots(state, appointments);
    updatedDay.spots = spots;
    const updatedDayIndex = state.days.findIndex(
      (day) => day.name === state.day
    );
    updatedDays[updatedDayIndex] = updatedDay;

    return updatedDays;
  };

  useEffect(() => {
    const daysURL = `/api/days`;
    const appointmentsURL = `/api/appointments`;
    const interviewersURL = `/api/interviewers`;
    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewersURL),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const bookInterview = function (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const spotCount = updateSpots(state, appointments);

    const newState = {
      ...state,
      appointments,
      days: spotCount,
    };

    const bookedInterviewURL = `/api/appointments/${id}`;
    return axios.put(bookedInterviewURL, { interview }).then(() => {
      setState(newState);
    });
  };

  const cancelInterview = function (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const spotCount = updateSpots(state, appointments);

    const interviewToCancelURL = `/api/appointments/${id}`;
    return axios.delete(interviewToCancelURL).then(() => {
      setState({
        ...state,
        appointments,
        days: spotCount,
      });
    });
  };

  const editInterview = function (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const newState = {
      ...state,
      appointments,
    };

    const bookedInterviewURL = `/api/appointments/${id}`;
    return axios.put(bookedInterviewURL, { interview }).then((res) => {
      setState(newState);
    });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
    editInterview,
  };
}
