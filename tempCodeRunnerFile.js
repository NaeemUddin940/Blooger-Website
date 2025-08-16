function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
const text = slugify("Hello World");
console.log(text);
