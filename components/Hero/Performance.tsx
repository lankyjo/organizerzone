import { Avatar, Box } from "@mantine/core";
import React from "react";

export default function Performance({
  count,
  title,
  images,
}: {
  count: number;
  title: string;
  images: [string, string, string];
}) {
  return (
    <Box className="  flex md:flex-col gap-4 items-start ">
      <Avatar.Group>
        {images?.map((image, index) => (
          <Avatar
            key={index}
            src={image}
            className="rounded-full border-4"
            size="lg"
          />
        ))}
      </Avatar.Group>
      <div className="flex gap-4  items-center">
        <div>
          <h3 className=" text-base md:text-3xl font-extrabold self-center ">
            {count}
            <span className=" text-sm font-extrabold  ">+</span>
          </h3>
        </div>
        <div>
          <h5 className=" text-sm md:text-xl font-normal md:font-bold        self-center   ">
            {title}
          </h5>
        </div>
      </div>
    </Box>
  );
}
