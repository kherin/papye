import React from "react";
import { Form, Input } from "antd";

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

const fieldsConfig = [
  {
    name: "roll_no",
    label: "Roll No.",
  },
  {
    name: "first_name",
    label: "First Name",
  },
  {
    name: "middle_name",
    label: "Middle Name",
  },
  {
    name: "last_name",
    label: "Last Name",
  },
  {
    name: "date_of_birth",
    label: "Date Of Birth",
  },
  {
    name: "age",
    label: "Age",
  },
  {
    name: "adhar_no",
    label: "Adhar No.",
  },
  {
    name: "mobile_number",
    label: "Mobile Number",
  },
  {
    name: "address",
    label: "Address",
  },
  {
    name: "pin_code",
    label: "Pin Code",
  },
  {
    name: "city",
    label: "City",
  },
];

export default function InputForm() {
  const [form] = Form.useForm();
  return (
    <Form {...formItemLayout} form={form} name="sample_form">
      {fieldsConfig.map((name, label) => constructFormItem(name, label))}
    </Form>
  );
}

function constructFormItem({ name, label }) {
  return (
    <Form.Item key={name} name={name} label={label}>
      <Input />
    </Form.Item>
  );
}
