import React from "react";

function Show({ feedback }) {
  let customerCount = 0;
  let deliver = 0;
  let productCount = 0;

  feedback.map((item) => {
    if (item.feedback_type === "customer_support") {
      customerCount += Number(item.rating);
    }
    if (item.feedback_type === "delivery") {
      deliver += Number(item.rating);
    }
    if (item.feedback_type === "product_quality") {
      productCount += Number(item.rating);
    }
    return null;
  });

  const rating =
    customerCount /
    (feedback.filter((item) => item.feedback_type === "customer_support")
      .length || 1);
  const delivery =
    deliver /
    (feedback.filter((item) => item.feedback_type === "delivery").length || 1);
  const product =
    productCount /
    (feedback.filter((item) => item.feedback_type === "product_quality")
      .length || 1);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Feedback Summary</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-600">Customer Support</h3>
            <p className="text-xl font-bold text-blue-800">{rating.toFixed(1)}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-600">Delivery</h3>
            <p className="text-xl font-bold text-green-800">{delivery.toFixed(1)}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-yellow-600">Product Quality</h3>
            <p className="text-xl font-bold text-yellow-800">{product.toFixed(1)}</p>
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
