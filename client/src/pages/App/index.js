import "./styles.css";

// custom
import InputForm from "@Components/form";
import Uploader from "@Components/uploader";

// antd
import { Typography, Card, Form } from "antd";

function App() {
  const [form] = Form.useForm();
  return (
    <div className="container">
      <div className="container-item-1">
        <Typography.Title level={1} style={{ color: "white" }}>
          Sample Form
        </Typography.Title>
        <Card className="form-card">
          <InputForm form={form}></InputForm>
        </Card>
      </div>
      <div className="container-item-2">
        <Uploader form={form}></Uploader>
      </div>
    </div>
  );
}

export default App;
