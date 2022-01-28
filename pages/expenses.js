import { Tabs } from "antd";
import Feed from "../components/Expenses/Feed";

const { TabPane } = Tabs;

function Expenses() {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Feed" key="1">
          <Feed />
        </TabPane>
        <TabPane tab="Crates" key="2"></TabPane>
        <TabPane tab="Medicine" key="3"></TabPane>
      </Tabs>
    </div>
  );
}

export default Expenses;
