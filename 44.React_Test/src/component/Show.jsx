import React from "react";

function Show({ feedback }) {
  const calculateAverage = (type) => {
    const filteredFeedback = feedback.filter((item) => item.feedback_type === type);
    const total = filteredFeedback.reduce((sum, item) => sum + Number(item.rating), 0);
    return (total / (filteredFeedback.length || 1)).toFixed(1);
  };

  const rating = calculateAverage("customer_support");
  const delivery = calculateAverage("delivery");
  const product = calculateAverage("product_quality");

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Feedback Summary</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-600">Customer Support</h3>
            <p className="text-xl font-bold text-blue-800">{rating}/5</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-600">Delivery</h3>
            <p className="text-xl font-bold text-green-800">{delivery}/5</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-yellow-600">Product Quality</h3>
            <p className="text-xl font-bold text-yellow-800">{product}/5</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-gray-700">Total Feedback: {feedback.length}</h3>
        </div>

        <div className="space-y-4">
          {feedback.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-lg bg-white shadow-sm"
            >
              <p className="text-gray-700">
                <span className="font-medium">Name:</span> {item.name}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Rating:</span> {item.rating}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> {item.email}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Feedback Type:</span> {item.feedback_type}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Feedback:</span> {item.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Show;
