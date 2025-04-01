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
      <Drawer opened={opened} onClose={close} position="top" size="xs">
        {/* Drawer content */}
        <NavItem />
      </Drawer>
    </>
  );
}
