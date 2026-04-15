import React, { useState } from "react";
import ErrorPopup from "./ErrorPopup";

const ContactForm = () => {
  const [subject, setSubject] = useState<string>("Sales Inquiry");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const inputClass = (error?: string) =>
    `w-full mt-1 border rounded-lg px-4 py-3 outline-none ${
      error
        ? "border-red-500 focus:ring-red-400"
        : "focus:ring-2 focus:ring-purple-400"
    }`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ ...form, subject });
      setShowSuccessPopup(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setShowErrorPopup(true);
    }
  };

  return (
    <div>
      <div className="p-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">First Name</label>
          <input
            placeholder="John"
            className={inputClass(errors.firstName)}
            value={form.firstName}
            onChange={(e) =>
            setForm({ ...form, firstName: e.target.value })
              }
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input
               placeholder="Doe"
                className={inputClass(errors.lastName)}
                value={form.lastName}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
               placeholder="john@example.com"
              className={inputClass(errors.email)}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
                placeholder="+1234 567 8900"
              className="w-full mt-1 border rounded-lg px-4 py-3"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">
              Select Subject
            </label>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Sales Inquiry",
                "Book a Demo",
                "Partnership",
                "Consultation Request",
              ].map((item) => {
                const isActive = subject === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSubject(item)}
                    className={`border rounded-xl px-4 py-3 flex items-center gap-3
                      transition-all duration-300
                      focus-visible:ring-2 focus-visible:ring-purple-400
                      ${
                        isActive
                          ? "border-purple-500 bg-purple-50 text-purple-600 shadow-md scale-[1.02]"
                          : "border-gray-300 hover:border-purple-300"
                      }`}
                  >
                    <span
                      className={`h-5 w-5 rounded-full border flex items-center justify-center
                        transition-all duration-300
                        ${isActive ? "border-purple-500" : "border-gray-400"}`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full bg-purple-500
                          transition-transform duration-300
                          ${isActive ? "scale-100" : "scale-0"}`}
                      />
                    </span>

                    <span className="font-medium">{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className={inputClass(errors.message)}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      {showErrorPopup && (
        <ErrorPopup
          type="error"
          onClose={() => setShowErrorPopup(false)}
        />
      )}

      {showSuccessPopup && (
        <ErrorPopup
          type="success"
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
    </div>
  );
};

export default ContactForm;
