import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Form, Input, InputNumber, Button, Col, Row } from "antd";

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
};

function AddOrder() {
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
                  <Row>
                    <Col>
                      <Form.Item name={["user", "quantity"]} label="Quantity">
                        <Form.Item noStyle>
                          <InputNumber min={1} max={999999} />
                        </Form.Item>
                      </Form.Item>
                    </Col>

                    <Col className="ms-4">
                      <Form.Item name={["user", "price"]} label="Price">
                        <Form.Item noStyle>
                          <InputNumber min={1} max={999999} />
                        </Form.Item>
                      </Form.Item>
                    </Col>
                  </Row>
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

export default AddOrder;
