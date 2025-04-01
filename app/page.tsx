"use client";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Navigation/Nav";
import useAppContext from "@/components/utils/hooks/useAppContext";
import useFormatEventData from "@/components/utils/hooks/useFormatEvent";
import useGetter from "@/components/utils/hooks/useGetter";
import { useContext, useEffect } from "react";
import Artist from "@/components/Artist/Artist";
import TicketsSection from "@/components/Ticket-section/TicketsSection";
import CountDown from "@/components/CountDown/CountDown";

export default function Home() {
  const { setEvents, setOrganizer } = useAppContext();
  const { data: eventData } = useGetter(
    `event/user-events/${process.env.NEXT_PUBLIC_USER_ID}`
  );
  const events = useFormatEventData(eventData?.data);
  const { data: user } = useGetter(
    `user/public?usernameSlug=${process.env.NEXT_PUBLIC_USER_NAME}`
  );

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
        <Hero />
        <section className="  w-full ">
          <Artist />
          <TicketsSection />
          <CountDown />
        </section>
      </main>
    </>
  );
}
