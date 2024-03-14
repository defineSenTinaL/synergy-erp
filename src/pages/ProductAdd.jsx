import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import categories from "../data/category";
import { addProduct } from "../store/features/productSlice";
import { nanoid } from 'nanoid';
import toast from "react-hot-toast";

const ProductAdd = () => {
  const [productName, setProductName] = React.useState("");
  const [productCategory, setProductCategory] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [productQuantity, setProductQuantity] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // // Dispatch the addProduct action with the form data
    dispatch(
      addProduct({
        id: nanoid(),
        name: productName,
        category: productCategory,
        price: parseFloat(productPrice),
        stock: parseInt(productQuantity, 10),
      })
    );

    toast.success("Product add successfully!")

    //Reset form fields after submission
    setProductName("");
    setProductCategory("");
    setProductPrice("");
    setProductQuantity("");
  };

  return (
    <div className="mx-5 mt-16">
      <Card color="transparent" shadow={false}>
        <CardHeader
          variant="gradient"
          color="blue-gray"
          className="mb-1 p-6 flex flex-col justify-center items-center"
        >
          <Typography variant="h4" color="white">
            Add Product
          </Typography>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <form className="mt-8 mb-2 w-full md:px-32" onSubmit={handleSubmit}>
            <div className="mb-5 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Name
              </Typography>
              <Input
                type="text"
                size="lg"
                placeholder="product title"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Select Category
              </Typography>
              <Select
                label="Select Category"
                value={productCategory}
                onChange={(value) => setProductCategory(value)}
              >
                {categories.map((category) => (
                  <Option key={category.categoryId} value={category.name}>{category.name}</Option>
                ))}
              </Select>
            </div>
            <div className="mb-1 flex flex-col gap-6 w-10">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Price
              </Typography>
              <Input
                type="number"
                size="lg"
                placeholder="Product price"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Stock (Quantity)
              </Typography>
              <Input
                type="number"
                size="lg"
                placeholder="product quantity"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              />
            </div>

            <Button type="submit" variant="gradient" className="mt-6 md:w-52" fullWidth>
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductAdd;
