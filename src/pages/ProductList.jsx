import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { deleteProduct } from "../store/features/productSlice";

const TABLE_HEAD = ["Name", "Category", "Price", "Stock", "Edit"];

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    // // Dispatch the addProduct action with the form data
    dispatch(deleteProduct(productId));

    toast.success("Product deleted successfully!");
  };
  return (
    <div className="mx-5 mt-16">
      <Card>
        <CardHeader variant="gradient" color="blue-gray" className="mb-8 p-6">
          <Typography variant="h3" color="white">
            Products list
          </Typography>
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
              {products.map(({ id, name, category, price, stock }, key) => {
                const className = `py-3 px-5 ${
                  key === products.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={name}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {category}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {price}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {stock}
                      </Typography>
                    </td>
                    <td className={className}>
                      <div className="flex gap-4">
                        <Typography
                          as="a"
                          href={`edit/${id}`}
                          className="text-xs font-semibold text-blue-gray-900"
                        >
                          Edit
                        </Typography>
                        <Typography
                          as="a"
                          className="text-xs font-semibold text-blue-gray-900"
                          onClick={() => handleDelete(id)}
                          style={{ cursor: "pointer" }}
                        >
                          Delete
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductList;
