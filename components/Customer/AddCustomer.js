import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Form, Input, InputNumber, Button, Col, Row } from "antd";

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
};

function AddCustomer() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Card>
        <CardBody>
          <div>
            <Row>
              <Col span={12}>
                <Form
                  name="nest-messages"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                  wrapperCol={12}
                >
                  <Form.Item
                    name={["user", "name"]}
                    label="Name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item name={["user", "location"]} label="Location">
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Add
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddCustomer;
