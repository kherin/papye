import React from "react";
import { Form, Input, Checkbox } from "antd";
import { fieldsConfig } from "@Shared/config";

// styles
import "./styles.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function InputForm({ form }) {
  return (
    <Form {...formItemLayout} form={form} name="sample_form">
      {fieldsConfig.map((name, label, type) =>
        constructFormItem(name, label, type)
      )}
    </Form>
  );
}

function constructFormItem({ name, label, type }) {
  return (
    <Form.Item key={name} name={name} label={label}>
      {(() => {
        switch (type) {
          case "input_text":
            return <Input key={name} />;
          case "input_label":
            return <span>{label}</span>;
          case "input_checkbox":
            return <Checkbox checked={false} />;
          default:
            return <span>{label}</span>;
        }
      })()}
    </Form.Item>
  );
}
