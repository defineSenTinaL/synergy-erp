import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
  Popover,
  PopoverHandler,
  Input,
  PopoverContent,
  Dialog,
  DialogHeader,
  DialogBody,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import status from "../data/status";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteOrder, updateOrder } from "../store/features/orderSlice";

const TABLE_HEAD = ["Order Id", "Customer name", "Date", "Status"];

const Order = () => {
  const orders = useSelector((state) => state.orders);

  const [date, setDate] = React.useState(new Date());
  const [selectedDateOrders, setSelectedDateOrders] = React.useState(orders);
  const [selectedStatus, setSelectedStatus] = React.useState("");
  const [openEdit, setOpen] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setSelectedDateOrders(orders);
  }, [orders]);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setOpen(!openEdit); // Use openEdit instead of open
  };
  
  const handleView = (order) => {
    setSelectedOrder(order);
    setOpenView(!openView); // Use openView for toggling
  };

  const onChange = (nextValue) => {
    setDate(nextValue);

    // Filter orders based on the selected date
    const filteredOrders = orders.filter((order) => {
      const orderDate = new Date(order.date);
      return orderDate.toDateString() === nextValue.toDateString();
    });

    setSelectedDateOrders(filteredOrders);
  };

  const isoDate = date.toISOString().split("T")[0];

  const handleUpdate = (e) => {
    e.preventDefault();

    // // Dispatch the update order action
    dispatch(
      updateOrder({
        orderId: selectedOrder.orderId,
        customerName: selectedOrder.customerName,
        date: selectedOrder.date,
        status: selectedStatus,
      })
    );

    setOpen(false);

    toast.success("Order updated successfully!");
    //navigate("/order");
  };

  const handleDelete = (id) => {
    // // Dispatch the addProduct action with the form data
    dispatch(deleteOrder(id));

    toast.success("Order deleted successfully!");
  };

  return (
    <div className="mx-5 mt-16">
      <Card>
        <CardHeader
          variant="gradient"
          color="blue-gray"
          className="mb-8 p-6 flex flex-col md:flex-row justify-betweengap-16"
        >
          <Typography variant="h3" color="white">
            Orders
          </Typography>
          <Popover>
            <PopoverHandler>
              <div className="pt-5 md:w-56">
                <Input
                  label="Select a Date"
                  onChange={() => null}
                  value={isoDate}
                  color="white"
                  className="text-md font-semibold"
                />
              </div>
            </PopoverHandler>
            <PopoverContent>
              <Calendar onChange={onChange} value={date} />
            </PopoverContent>
          </Popover>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {TABLE_HEAD.map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selectedDateOrders.map(
                ({ orderId, customerName, date, status }, key) => {
                  const className = `py-3 px-5 ${
                    key === orders.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={orderId}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {orderId}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {customerName}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          value={status}
                          color={
                            status === "Delivered"
                              ? "green"
                              : status === "Cancelled"
                              ? "amber"
                              : status === "Processing"
                              ? "blue-gray"
                              : "cyan"
                          }
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <div className="flex gap-4">
                          <Typography
                            as="a"
                            className="text-xs font-semibold text-blue-gray-600"
                            onClick={() =>
                              handleEdit({
                                orderId,
                                customerName,
                                date,
                                status,
                              })
                            }
                            style={{ cursor: "pointer" }}
                          >
                            Edit
                          </Typography>
                          <Typography
                            as="a"
                            className="text-xs font-semibold text-blue-gray-600"
                            onClick={() =>
                              handleView({
                                orderId,
                                customerName,
                                date,
                                status,
                              })
                            }
                            style={{ cursor: "pointer" }}
                          >
                            View
                          </Typography>
                          <Typography
                            as="a"
                            className="text-xs font-semibold text-blue-gray-900"
                            onClick={() => handleDelete(orderId)}
                            style={{ cursor: "pointer" }}
                          >
                            Delete
                          </Typography>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Dialog open={openEdit} handler={handleEdit}>
        <DialogHeader>Edit Order</DialogHeader>
        <DialogBody className="pt-0">
          <Card className="w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Order# {selectedOrder.orderId}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Customer Name: {selectedOrder.customerName}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Date: {selectedOrder.date}
              </Typography>
              <Select
                label="Select Status"
                value={selectedOrder.status}
                onChange={(value) => setSelectedStatus(value)}
              >
                {status.map((status) => (
                  <Option key={status.id} value={status.name}>
                    {status.name}
                  </Option>
                ))}
              </Select>
            </CardBody>
            <Button
              type="submit"
              variant="gradient"
              className="my-6 mx-5 w-52"
              fullWidth
              onClick={handleUpdate}
            >
              Submit
            </Button>
          </Card>
        </DialogBody>
      </Dialog>
      <Dialog open={openView} handler={handleView}>
        <DialogHeader>Order View</DialogHeader>
        <DialogBody className="pt-0">
          <Card className="w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Order# {selectedOrder.orderId}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Customer Name: {selectedOrder.customerName}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Date: {selectedOrder.date}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Status: {selectedOrder.status}
              </Typography>
            </CardBody>
          </Card>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Order;
