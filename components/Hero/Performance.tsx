import { Avatar } from "@mantine/core";
import React, { useEffect, useState } from "react";

export default function Performance({
  count,
  title,
  images,
}: {
  count: number;
  title: string;
  images: [string, string, string];
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 2);

    if (value >= count) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [value, count]);

  return (
    <div className="relative -z-10 flex md:flex-col gap-4">
      <Avatar.Group>
        {images?.map((image, index) => (
          <Avatar
            key={index}
            src={image}
            className="rounded-full border-4 border-[white] "
            size={65}
            radius="xl"
            styles={{
              root: {
                border: "2px solid white",
              },
            }}
          />
        ))}
      </Avatar.Group>
      <div className="flex gap-4  items-center max-w-[14rem]">
        <div>
          <h3 className=" text-base md:text-3xl font-extrabold self-center ">
            {value}
            <span className=" text-sm font-extrabold  ">+</span>
          </h3>
        </div>
        <div>
          <h5 className=" text-sm md:text-xl font-normal md:font-bold        self-center   ">
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
}
