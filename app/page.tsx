"use client";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Navigation/Nav";
import useAppContext from "@/components/utils/hooks/useAppContext";
import useFormatEventData from "@/components/utils/hooks/useFormatEvent";
import useGetter from "@/components/utils/hooks/useGetter";
import { useContext, useEffect } from "react";

export default function Home() {
  const { setEvents, setOrganizer } = useAppContext();
  const { data: eventData } = useGetter(
    "event/user-events/66d8d5ee16a12f0832b9d48d?page=1&size=100"
  );
  const events = useFormatEventData(eventData?.data);
  const { data: user } = useGetter("user/public?usernameSlug=chileo");

  useEffect(() => {
    if (events?.length) {
      setEvents(events);
    }
    if (user?.data) {
      setOrganizer(user?.data);
    }
  }, [events, user?.data]);

  return (
    <>
      <main className="min-h-[2000px]">
        <Nav />
        <section className="  w-full mx-auto">
          <Hero />
        </section>
      </main>
    </>
  );
}
