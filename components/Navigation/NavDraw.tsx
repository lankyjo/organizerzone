import {} from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import NavItem from "./NavItem";

export default function NavDraw({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        lockScroll={false}
        position="top"
        size="30%"
        styles={{
          body: {
            // backgroundColor: "red",
            backgroundColor: "rgba(75, 85, 99, 1)", // Slight transparency
            paddingTop: "10px",
            // backdropFilter: "blur(1px)",
          },
          overlay: {
            backgroundColor: "transparent", // Slight transparency
          },
          content: {
            backgroundColor: "transparent", // Slight transparency
          },
          header: {
            backgroundColor: "transparent", // Slight transparency
          },
          // close: {
          //   backgroundColor: "black",
          // },
        }}
      >
        <div>
          {/* Drawer content */}
          <NavItem />
        </div>
      </Drawer>
    </>
  );
}
