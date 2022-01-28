import { Tabs } from "antd";
import AddCustomer from "../components/AddCustomer";
import CustomerTable from "../components/CustomerTable";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Customers() {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Customers" key="1">
          <CustomerTable />
        </TabPane>
        <TabPane tab="Add Customer" key="2">
          <AddCustomer />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Customers;
