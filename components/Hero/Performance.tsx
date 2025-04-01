import { Avatar, Box, Text } from "@mantine/core";
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
    <Box className="  flex md:flex-col gap-6   ">
      <Avatar.Group>
        {images?.map((image, index) => (
          <Avatar
            key={index}
            src={image}
            className="    rounded-full "
            size="lg"
          />
        ))}
      </Avatar.Group>
      <div className="      flex     gap-5    w-full items-center">
        <div>
          <h3 className=" text-2xl md:text-4xl font-extrabold self-center ">
            {count}
            <span className=" text-sm font-extrabold  ">+</span>
          </h3>
        </div>
        <div>
          <h5 className=" text-lg md:text-2xl  font-normal md:font-bold        self-center   ">
            {title}
          </h5>
        </div>
      </div>
    </Box>
  );
}
