import { Drawer } from "@mantine/core";
import NavItem from "./NavItem";

export default function NavDraw({
  opened,
  close,
  setOpenModal,
}: {
  opened: boolean;
  close: () => void;
  setOpenModal: (val: boolean) => void;
}) {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        lockScroll={false}
        position="top"
        size="45%"
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
          <button
            id="CTA"
            onClick={() => {
              close();
              setOpenModal(true);
            }}
            className="px-5 text-white py-2 mt-4 bg-primary rounded-3xl cursor-pointer duration-300 hover:text-white "
          >
            Create Event
          </button>
        </div>
      </Drawer>
    </>
  );
}
