import { useCapitalize } from "../../Hooks/useCapitalize";

export default function AdminSidebar({
  selectedPost,
  category,
  handleSetStatus,
  handleSetCategory,
}) {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4 text-blue-700 dark:text-teal-500">
        Post Details
      </h3>
      <p className="text-xl mb-2 text-foreground">
        <span className="font-semibold text-gray-500">Post Title:</span>{" "}
        {selectedPost.title}
      </p>
      <p className="text-lg text-foreground">
        <span className="font-semibold text-gray-500">Author:</span>{" "}
        {selectedPost.author}
      </p>
      <p className="text-lg text-foreground">
        <span className="font-semibold text-gray-500">Current Status:</span>{" "}
        {useCapitalize(selectedPost.status)}
      </p>
      <p className="text-lg text-foreground">
        <span className="font-semibold text-gray-500">Current Category:</span>{" "}
        {useCapitalize(selectedPost.category)}
      </p>

      <h4 className="text-4xl mt-5  font-bold mb-4">Change Status</h4>
      <div className="space-y-3">
        <button
          onClick={() => handleSetStatus(selectedPost._id, "featured")}
          className={`w-full ${
            selectedPost.status === "featured" ? "hidden" : "block"
          } bg-violet-500 text-white py-3 rounded-lg shadow-md hover:bg-violet-600 cursor-pointer transition-colors duration-200 font-semibold`}>
          Set As Featured
        </button>
        <button
          onClick={() => handleSetStatus(selectedPost._id, "latest")}
          className={`w-full ${
            selectedPost.status === "latest" ? "hidden" : "block"
          } bg-fuchsia-500 text-white py-3 rounded-lg shadow-md hover:bg-fuchsia-600 cursor-pointer transition-colors duration-200 font-semibold`}>
          Set As Latest
        </button>
        <button
          onClick={() => handleSetStatus(selectedPost._id, "popular")}
          className={`w-full ${
            selectedPost.status === "popular" ? "hidden" : "block"
          } bg-teal-500 text-white py-3 rounded-lg shadow-md hover:bg-teal-600 cursor-pointer transition-colors duration-200 font-semibold`}>
          Set As Popular
        </button>
        <button
          onClick={() => handleSetStatus(selectedPost._id, "normal")}
          className={`w-full ${
            selectedPost.status === "normal" ? "hidden" : "block"
          } bg-gray-400 text-white py-3 rounded-lg shadow-md hover:bg-gray-500 cursor-pointer transition-colors duration-200 font-semibold`}>
          Set As Normal
        </button>
      </div>

      <h4 className="text-4xl font-bold mb-4 mt-6">Change Category</h4>
      <div className="space-y-3">
        {category.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              handleSetCategory(selectedPost._id, cat.title);
            }}
            className={`w-full ${selectedPost.category === cat.title ? "hidden" : "block"} py-3 bg-teal-500 cursor-pointer text-black rounded-lg shadow-md hover:opacity-80 transition-colors duration-200 font-semibold`}>
            Set as {useCapitalize(cat.title)}
          </button>
        ))}
      </div>
    </div>
  );
}
