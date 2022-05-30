import "./styles.css";

// custom
import Form from "@Components/form";
import Uploader from "@Components/uploader";

// antd
import { Typography, Card } from "antd";

function App() {
  return (
    <div className="container">
      <div className="container-item-1">
        <Typography.Title level={1} style={{ color: "white" }}>
          Sample Form
        </Typography.Title>
        <Card className="form-card">
          <Form></Form>
        </Card>
      </div>
      <div className="container-item-2">
        <Uploader></Uploader>
      </div>
    </div>
  );
}

export default App;
