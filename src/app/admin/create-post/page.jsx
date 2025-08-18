"use client";
import { useBlogContext } from "../../../context/BlogContext";
import { Checkbox } from "../../../components/ui/checkbox";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase"; 

export default function page() {
  const { formData, setFormData, allposts } = useBlogContext();
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
      // Firestore "posts" collection reference
      const postsCollectionRef = collection(db, "posts");

      // Add formData as a new document
      await addDoc(postsCollectionRef, {
        ...formData,
        id: Date.now().toString(),
      });

      console.log("✅ Post added to Firestore successfully!");

      // Reset formData
      setFormData({
        id: "",
        isFeatured: false,
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
        isLatest: false,
        isPopular: false,
      });
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
                htmlFor="category"
                className="block text-sm font-medium text-foreground mb-1">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="e.g., TECHNOLOGY, SPORTS"
                required
              />
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
                placeholder="https://placehold.co/800x600"
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
          <div className="flex flex-wrap gap-4 pt-2">
            <span className="text-red-400">
              Featured Post have to Only One!
            </span>
            <div className="flex gap-3  items-center">
              <Checkbox
                className="cursor-pointer size-5 peer"
                id="isFeatured"
                name="isFeatured"
                disabled={
                  !formData.isFeatured &&
                  allposts
                    .filter((post) => post.category === formData.category)
                    .some((post) => post.isFeatured)
                }
                checked={formData.isFeatured}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, isFeatured: checked }))
                }
              />
              <label
                className="peer-disabled:text-red-400 text-white"
                htmlFor="isFeatured">
                Featured
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox
                className="cursor-pointer size-5"
                id="isLatest"
                name="isLatest"
                checked={formData.isLatest}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, isLatest: checked }))
                }
              />
              <label htmlFor="isLatest">Latest</label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox
                className="cursor-pointer size-5"
                id="isPopular"
                name="isPopular"
                checked={formData.isPopular}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, isPopular: checked }))
                }
              />
              <label htmlFor="isPopular">Popular</label>
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
