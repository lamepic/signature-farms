import { useState } from "react";
import { Button } from "antd";
import Image from "next/image";
import { Card, CardBody, CardText, CardTitle, Table } from "reactstrap";
import AddFeedForm from "./AddFeedForm";

const tableData = [
  {
    name: "Martin Gover",
    quantity: "40",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
    price: "1000",
  },
  {
    name: "Gulshan Gover",
    quantity: "100",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
    price: "1000",
  },
  {
    name: "Pavar Gover",
    quantity: "400",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
    price: "1000",
  },
  {
    name: "234",
    quantity: "20",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
    price: "1000",
  },
];

function Feed() {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };
  return (
    <div>
      <Card>
        <CardTitle tag="h6" className="p-3 mb-0">
          <Button
            type="primary"
            onClick={() => {
              setVisible(true);
            }}
          >
            Add Feed Expense
          </Button>
        </CardTitle>
        <CardBody>
          <div className="table-responsive">
            <Table className="text-nowrap mt-3 align-middle" borderless>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((tdata, index) => (
                  <tr key={index} className="border-top">
                    <td>
                      <h6 className="mb-0">{tdata.name}</h6>
                    </td>
                    <td>{tdata.quantity}</td>
                    <td>{tdata.price}</td>
                    <td>{tdata.deliveryStatus}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
      <AddFeedForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}

export default Feed;
