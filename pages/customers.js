import { Tabs } from "antd";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Customers() {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Customers" key="1">
          Content of Tab Pane 1
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Customers;
