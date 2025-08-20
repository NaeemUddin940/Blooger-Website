

// export default function page() {
//   return (
//     <div>
//        <div
//           className={cn(
//             `fixed inset-y-0 right-0 w-80 md:w-96 bg-background p-6 shadow-xl transform transition-transform duration-300  ${
//               statusPostId ? "translate-x-0" : "translate-x-full"
//             } text-gray-500 mt-5`
//           )}>
//           <button
//             className="absolute cursor-pointer group top-4 right-4 "
//             onClick={() => setStatusPostId(null)}>
//             <XIcon className="group-hover:text-red-500 " />
//           </button>
//           {selectedPost ? (
//             <div>
//               <h3 className="text-3xl font-bold mb-4 text-blue-700 dark:text-teal-500">
//                 Post Details
//               </h3>
//               <p className="text-lg mb-2 text-gray-700 dark:text-gray-200">
//                 <span className="font-semibold">Post Title:</span>{" "}
//                 {selectedPost.title}
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 <span className="font-semibold">Author:</span>{" "}
//                 {selectedPost.author}
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 <span className="font-semibold">Current Status:</span>{" "}
//                 {selectedPost.status.toUpperCase()}
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 <span className="font-semibold">Current Category:</span>{" "}
//                 {/* {selectedPost.category.toUpperCase() || "Uncategorized"} */}
//               </p>

//               <h4 className="text-xl font-bold mb-4 mt-6">Change Status</h4>
//               <div className="space-y-3">
//                 <button
//                   onClick={() => handleSetStatus(selectedPost.id, "featured")}
//                   className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-200 font-semibold">
//                   Featured এ সেট করুন
//                 </button>
//                 <button
//                   onClick={() => handleSetStatus(selectedPost.id, "latest")}
//                   className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 font-semibold">
//                   Latest এ সেট করুন
//                 </button>
//                 <button
//                   onClick={() => handleSetStatus(selectedPost.id, "popular")}
//                   className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200 font-semibold">
//                   Popular এ সেট করুন
//                 </button>
//                 <button
//                   onClick={() => handleSetStatus(selectedPost.id, "normal")}
//                   className="w-full bg-gray-400 text-white py-3 rounded-lg shadow-md hover:bg-gray-500 transition-colors duration-200 font-semibold">
//                   Normal এ সেট করুন
//                 </button>
//               </div>

//               <h4 className="text-xl font-bold mb-4 mt-6">Change Category</h4>
//               <div className="space-y-3">
//                 {category.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() =>
//                       handleSetCategory(selectedPost.id, category.title)
//                     }
//                     className={cn(
//                       "w-full py-3 bg-teal-500 text-black rounded-lg shadow-md hover:opacity-80 transition-colors duration-200 font-semibold",
                      
//                     )}>
//                     {category.title.charAt(0).toUpperCase() +
//                       category.title.slice(1)}{" "}
//                     এ সেট করুন
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
//               <p>Select a post</p>
//             </div>
//           )}
//         </div>
//     </div>
//   );
// }
