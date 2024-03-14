import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { PresentationChartBarIcon } from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  ArchiveBoxIcon,
  ListBulletIcon,
  SquaresPlusIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Sidebar({ isDrawerOpen, onToggleDrawer }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => onToggleDrawer(false);

  return (
    <>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              SynergyERP
            </Typography>
          </div>
          <List>
            <Link to={"/dashboard"}>
              <ListItem onClick={closeDrawer}>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <ShoppingCartIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Product Manage
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <Link to={"/product/list"}>
                    <ListItem onClick={closeDrawer}>
                      <ListItemPrefix>
                        <ListBulletIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Product List
                    </ListItem>
                  </Link>
                  <Link to={"/product/add"}>
                    <ListItem onClick={closeDrawer}>
                      <ListItemPrefix>
                        <SquaresPlusIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Add Product
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <ArchiveBoxIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Order Manage
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <Link to={"/order"}>
                    <ListItem onClick={closeDrawer}>
                      <ListItemPrefix>
                        <Square3Stack3DIcon
                          strokeWidth={3}
                          className="h-3 w-5"
                        />
                      </ListItemPrefix>
                      Orders
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
          </List>
        </Card>
      </Drawer>
    </>
  );
}

Sidebar.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  onToggleDrawer: PropTypes.func.isRequired,
};
