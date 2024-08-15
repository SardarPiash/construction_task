import React from "react";

const Card = ({ name, email, phone, msg, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Submission Successful!</h2>
          <button
            className="text-gray-600 hover:text-gray-800 transition ease-in-out duration-300"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="space-y-4">
          <p>Dear {name},</p>
          <p>
            Your response, "<em>{msg}</em>," has been successfully submitted. We
            will reach out to you via email at <strong>{email}</strong> or by
            phone at <strong>{phone}</strong> as soon as possible.
          </p>
          <p>Thank you for contacting us.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
