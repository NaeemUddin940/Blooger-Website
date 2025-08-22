"use client";
import { useBlogContext } from "../../../context/BlogContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const { formData, setFormData, setAllPosts } = useBlogContext();
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postsCollectionRef = collection(db, "posts");
      const docRef = await addDoc(postsCollectionRef, {
        ...formData,
        _id: doc.id,
      });

      setAllPosts((prev) => [
        ...prev,
        { ...formData, firestoreId: docRef.id }, // Realtime UI update
      ]);

      console.log("✅ Post added to Firestore successfully!");

      setFormData({
        id: "",
        status: "",
        category: "",
        title: "",
        author: "",
        description: "",
        content: "",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        image: "",
      });

      router.push("/admin/all-posts");
    } catch (error) {
      console.error("❌ Error adding post:", error);
    }
  };

  return (
    <div className=" bg-background p-6 sm:p-8 rounded-lg shadow-2xl w-full overflow-y-auto h-full mb-5 ">
      <div className="max-w-7xl">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Create New Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4  gap-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-foreground mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border-2 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter post title"
                required
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-foreground mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border-2 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required>
                <option value="">Select a status</option>
                <option value="featured">Featured</option>
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="normal">Normal</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-foreground mb-1">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="e.g., Jane Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-foreground mb-1">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="For Testing Purpous Use Only Unsplash Image Address"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-foreground mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="A brief summary of the post..."></textarea>
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-foreground mb-1">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows="5"
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Full article content..."></textarea>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="submit"
              className="px-6 py-2 cursor-pointer bg-teal-500 text-white font-bold rounded-full shadow-lg hover:bg-teal-600 transition-colors">
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
