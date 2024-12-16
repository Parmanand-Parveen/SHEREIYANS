import React, { useState } from 'react';

function Feedback({ feedback, setFeedback }) {
  const initialForm = {
    name: "",
    rating: "",
    email: "",
    feedback_type: "",
    feedback: "",
  };

  const [form, setForm] = useState(initialForm);

  const formHandler = (e) => {
    if(form === initialForm){
      
    }
    e.preventDefault();
    setFeedback([...feedback, form]);
    setForm(initialForm);
  };

  localStorage.setItem("feedback", JSON.stringify(feedback));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4">
      <form
        onSubmit={formHandler}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Feedback Form</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Feedback Type</label>
            <select
              value={form.feedback_type}
              onChange={(e) => setForm({ ...form, feedback_type: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select feedback type</option>
              <option value="customer_support">Customer Support</option>
              <option value="delivery">Delivery</option>
              <option value="product_quality">Product Quality</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Rating</label>
            <select
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Feedback</label>
            <textarea
              value={form.feedback}
              onChange={(e) => setForm({ ...form, feedback: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your feedback here..."
              rows="4"
            ></textarea>
          </div>
        </div>

        <button
          onKeyDown={(e) => e.key === "Enter" && formHandler(e)}
          
          disabled={!form.feedback_type || !form.rating || !form.name || !form.email || !form.feedback}
          type="submit"
          className={`w-full bg-blue-500 text-white font-medium py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            !form.feedback_type || !form.rating || !form.name || !form.email || !form.feedback
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Feedback;
