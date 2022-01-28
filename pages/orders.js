import { Tabs } from "antd";
import PendingOrders from "../components/Orders/PendingOrders";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function Orders() {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Orders" key="1">
          <PendingOrders />
        </TabPane>
        <TabPane tab="Add Order" key="2"></TabPane>
      </Tabs>
    </div>
  );
}

export default Orders;
