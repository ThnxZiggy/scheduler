import React from "react";
import { render } from "@testing-library/react";
import Appointment from "components/Appointment";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
  it("does something it is supposed to do", () => {
    //does something
  });

  it("Does something else", () => {
    //does something
  });
});

describe("Empty", () => {
  it("renders without crashing", () => {
    render(<Empty />);
  });
 
});

describe("Show", () => {
  it("renders without crashing", () => {
    render(<Show />);
  });
});
