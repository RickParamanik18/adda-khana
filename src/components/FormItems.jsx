import { Input, Form } from "antd";
import { useState } from "react";

const FormInput = (props) => {
  const {
    size = "large",
    name,
    type = "text",
    placeholder,
    initialValue = "",
    onChange,
    required = false,
    message = "",
  } = props;
  return (
    <Form.Item name={name} initialValue={initialValue} message={message}>
      <Input
        size={size}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </Form.Item>
  );
};

const FormInputSearch = (props) => {
  const { size = "large", name, placeholder, onChange } = props;

  return (
    <Form.Item name={name}>
      <Input size={size} onChange={onChange} placeholder={placeholder} />
    </Form.Item>
  );
};

export { FormInput, FormInputSearch };
