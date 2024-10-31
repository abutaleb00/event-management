import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mt-3 p-3">
        <div className="row p-2">
          <div className="col-md-6 p-3 my-auto text-center">
            <h3>
              <b>
                Event Booking <br /> POC
              </b>
            </h3>
            <br />
            <p>- Project By Ganesh Bondla</p>
          </div>
          <div className="col-md-6 p-3">
            <p>
              This is a poc of event registration <br />
              <br />
              Tech used in this project :<br />
              <br />
              <b>HTML</b>
              <br />
              <b>CSS</b>
              <br />
              <b>REACT JS</b>
              <br />
              <b>NODE JS</b>
              <br />
              <b>EXPRESS JS</b>
              <br />
              <b>MySQL DB</b>
              <br />
            </p>
            <p>
              Dynamically developed with REST APIS in Node with MySQL database
            </p>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="text-center">
          <p>Copy @ Ganesh Bondla - 2023</p>
        </div>
      </div>
    </>
  );
};

export default Home;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Event Management Registration</title>
//   <script src="https://cdn.tailwindcss.com"></script>
// </head>
// <body class="bg-gray-100">

//   <!-- Header Section -->
//   <div class="bg-cover bg-center h-64" style="background-image: url('https://via.placeholder.com/1200x300');">
//     <div class="bg-black bg-opacity-50 h-full flex items-center justify-center">
//       <h1 class="text-white text-4xl font-bold">Event Management Registered</h1>
//     </div>
//   </div>

//   <!-- Call to Action Section -->
//   <div class="bg-yellow-400 text-center py-8">
//     <h2 class="text-3xl font-bold">Join Our Event!</h2>
//     <p class="mt-2 text-lg text-gray-800">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//     </p>
//   </div>

//   <!-- Registration Form -->
//   <div class="flex justify-center py-12">
//     <form class="bg-white p-8 shadow-lg rounded-md w-full max-w-lg">
//       <h3 class="text-2xl font-semibold mb-6 text-center">Registration Form</h3>
      
//       <div class="mb-4">
//         <label class="block text-sm font-medium mb-2">First Name</label>
//         <input type="text" class="w-full border border-gray-300 p-2 rounded-md" placeholder="First Name">
//       </div>

//       <div class="mb-4">
//         <label class="block text-sm font-medium mb-2">Last Name</label>
//         <input type="text" class="w-full border border-gray-300 p-2 rounded-md" placeholder="Last Name">
//       </div>

//       <div class="mb-4">
//         <label class="block text-sm font-medium mb-2">Mobile No</label>
//         <input type="text" class="w-full border border-gray-300 p-2 rounded-md" placeholder="Mobile No">
//       </div>

//       <div class="mb-4">
//         <label class="block text-sm font-medium mb-2">Email ID</label>
//         <input type="email" class="w-full border border-gray-300 p-2 rounded-md" placeholder="Email ID">
//       </div>

//       <div class="mb-4">
//         <label class="block text-sm font-medium mb-2">Member Type</label>
//         <input type="text" class="w-full border border-gray-300 p-2 rounded-md" placeholder="Member Type">
//       </div>

//       <div class="mb-4">
//         <label class="block text-sm font-medium mb-2">Membership Number</label>
//         <input type="text" class="w-full border border-gray-300 p-2 rounded-md" placeholder="Membership Number">
//       </div>

//       <div class="mb-6">
//         <label class="block text-sm font-medium mb-2">Will you have guest with you?</label>
//         <div class="flex items-center space-x-4">
//           <label class="flex items-center">
//             <input type="radio" name="guest" class="mr-2" value="yes"> Yes
//           </label>
//           <label class="flex items-center">
//             <input type="radio" name="guest" class="mr-2" value="no"> No
//           </label>
//         </div>
//       </div>

//       <button type="submit" class="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
//         Register Now
//       </button>
//     </form>
//   </div>

//   <!-- Footer Section -->
//   <footer class="bg-blue-900 text-white py-8">
//     <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
//       <div>
//         <h4 class="font-bold mb-4">About</h4>
//         <ul>
//           <li><a href="#" class="text-gray-300 hover:underline">About Us</a></li>
//           <li><a href="#" class="text-gray-300 hover:underline">Our Mission</a></li>
//           <li><a href="#" class="text-gray-300 hover:underline">Blog</a></li>
//           <li><a href="#" class="text-gray-300 hover:underline">Careers</a></li>
//         </ul>
//       </div>
//       <div>
//         <h4 class="font-bold mb-4">Customer Support</h4>
//         <ul>
//           <li><a href="#" class="text-gray-300 hover:underline">Request a Catalogue</a></li>
//           <li><a href="#" class="text-gray-300 hover:underline">Returns</a></li>
//           <li><a href="#" class="text-gray-300 hover:underline">Contact Us</a></li>
//           <li><a href="#" class="text-gray-300 hover:underline">Shipping</a></li>
//         </ul>
//       </div>
//       <div>
//         <h4 class="font-bold mb-4">My Account</h4>
//         <ul>
//           <li><a href="#" class="text-gray-300 hover:underline">My Account</a></li>
//           <li><a href="#" class="text-gray-300 hover:underline">My Quote</a></li>
//           <li><a href="#" class="text-gray-300 hover:underline">Forgot Password</a></li>
//           <li><a href="#" class="text-gray-300 hover:underline">Request a Price Beat</a></li>
//         </ul>
//       </div>
//       <div>
//         <h4 class="font-bold mb-4">Contact Info</h4>
//         <p>Email: <a href="mailto:info@maanrishfa.com" class="text-gray-300 hover:underline">info@maanrishfa.com</a></p>
//         <p>Phone: 1304 974 396</p>
//         <div class="mt-4">
//           <span>Follow Us:</span>
//           <div class="flex space-x-4 mt-2">
//             <a href="#" class="text-gray-300 hover:text-white">FB</a>
//             <a href="#" class="text-gray-300 hover:text-white">IG</a>
//             <a href="#" class="text-gray-300 hover:text-white">TW</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </footer>

// </body>
// </html>

