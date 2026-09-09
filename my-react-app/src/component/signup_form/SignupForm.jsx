import React, { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    age: null,
    isSubscribed: false, // This is a checkbox
  });

  const handleChange = (e) => {
    // Grab name, value, type, and checked from e.target
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      // If it's a checkbox, use 'checked' (true/false). Otherwise, use 'value' (text/numbers).
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* 1. Regular Text Input */}
      <label>
        Username:
        <input
          type="text"
          name="username"
          //   value={formData.username}
          onChange={handleChange}
        />
      </label>

      <br />

      {/* 2. Number Input */}
      <label>
        Age:
        <input
          type="number"
          name="age"
          //   value={formData.age}
          onChange={handleChange}
        />
      </label>

      <br />

      {/* 3. Checkbox */}
      <label>
        <input
          type="checkbox"
          name="isSubscribed"
          checked={formData.isSubscribed} // Checkboxes use 'checked' instead of 'value'
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>

      {/* Live Preview */}
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
}
