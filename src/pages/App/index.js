import "./styles.css";

import Form from "@Components/form";
import Uploader from "@Components/uploader";

function App() {
  return (
    <div class="container">
      <div class="container-item-1">
        <Form></Form>
      </div>
      <div class="container-item-2">
        <Uploader></Uploader>
      </div>
    </div>
  );
}

export default App;
