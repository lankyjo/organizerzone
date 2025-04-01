"use client";
import { useContext } from "react";
import { TempValueContext } from "../contextAPI/TempValueContext";

const useAppContext = () => {
  return useContext(TempValueContext);
};

export default useAppContext;
export type TempValueType = {
  val: string;
  setVal: (val: string) => void;
  organizer: OrganizerProps;
  setOrganizer: (organizer: OrganizerProps) => void;
  events: EventProps[];
  setEvents: (events: EventProps[]) => void;
};
