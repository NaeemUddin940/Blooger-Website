import React from "react";

export default function MailForm() {
  return (
    <div>
      {" "}
      <div className=" mb-4">
        <h3 className="text-md font-bold mb-2">Mailchimp Form</h3>
        <p className="text-sm text-gray-400 mb-4">
          Subscribe to our mailing list to get the new updates.
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full p-3 rounded-lg bg-background text-foreground text-sm border-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="mt-3 w-full p-3 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
