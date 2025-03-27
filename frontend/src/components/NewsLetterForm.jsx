"use client";
import fetchData from "@/api/graphql/fetchData";
import React, { useState } from "react";

const NewsLetterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.includes("@")) errors.email = "Invalid email";
    if (!formData.mobile.match(/^\d{10}$/))
      errors.mobile = "Mobile must be 10 digits";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await fetchData(formData);
        if (response.success) {
          console.log("Form Submitted:", formData);
          setFormData({ name: "", email: "", mobile: "" });
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Subscribe to our Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Mobile Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your mobile number"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterForm;
