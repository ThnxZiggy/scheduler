import React from "react";
import { render } from "@testing-library/react";
import Appointment from "components/Appointment";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});
