<<<<<<< HEAD
"use client";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Navigation/Nav";

export default function Home() {
  return (
    <>
      <main className="min-h-[2000px]">
        <Nav />
        <section className=" max-w-[1440px] w-full mx-auto">
          <Hero />
        </section>
      </main>
    </>
  );
}
=======
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home(){
  return(
    <>
    <main className="min-h-[2000px]">
    <Nav/>
    <Hero/>
    </main>
    </>
  )
}
>>>>>>> 77f60b76eae6e13ac7c9b34f2a6478949b1af4f9
