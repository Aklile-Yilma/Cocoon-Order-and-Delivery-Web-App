import React from "react";

export default function Footer() {
  const handleChange = () => {};
  const handleClick = () => {};
  return (
    <section className="flex flex-col gap-4  md:flex-row justify-between  p-10 xl:px-30 bg-red-500">
      <div className="flex flex-col">
        <h1>About Us</h1>
        <a>Careers</a>
        <a>Our Values</a>
        <a>Locations</a>
        <a>Blog</a>
        <a>Investors</a>
      </div>
      <div className="flex flex-col">
        <h1>Explore</h1>
        <a>Online Ordering</a>
        <a>Locations</a>
        <a>Nutritional Info</a>
        <a>Gift Cards</a>
      </div>
      <div className="flex flex-col">
        <h1>Inquiries</h1>
        <a>Contact Us</a>
        <a>Be Our Partner</a>
        <a>Press Inquiries</a>
      </div>

      <div>
        <h1>Join Our Mailing List</h1>
        <input
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          required
        />
        <button
          className="bg-black text-white p-2 rounded-md "
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </section>
  );
}
