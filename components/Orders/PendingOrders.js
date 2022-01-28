import Image from "next/image";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user2,
    name: "Martin Gover",
    quantity: "40",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
    price: "1000",
  },
  {
    avatar: user3,
    name: "Gulshan Gover",
    quantity: "100",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
    price: "1000",
  },
  {
    avatar: user4,
    name: "Pavar Gover",
    quantity: "400",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
    price: "1000",
  },
  {
    avatar: user5,
    name: "234",
    quantity: "20",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
    price: "1000",
  },
];

const PendingOrders = () => {
  return (
    <Card>
      <CardBody>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delivery Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <Image
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
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
  );
};

export default PendingOrders;
