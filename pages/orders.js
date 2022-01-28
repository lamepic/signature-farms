import { Tabs } from "antd";
import AddOrder from "../components/Orders/AddOrder";
import CompletedOrders from "../components/Orders/CompletedOrders";
import PendingOrders from "../components/Orders/PendingOrders";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function Orders() {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Pending Orders" key="1">
          <PendingOrders />
        </TabPane>
        <TabPane tab="Completed Orders" key="2">
          <CompletedOrders />
        </TabPane>
        <TabPane tab="Add Order" key="3">
          <AddOrder />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Orders;
