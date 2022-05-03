// class Category {
//   constructor(id, title, color) {
//     this.id = id;
//     this.title = title;
//     this.color = color;
//   }
// }

// export default Category;

const Category = (id, title, color) => {
  return {
    id,
    title,
    color,
  };
};

export default Category;

// Are these the same thing??? Yes, they are.
// Class based VS Functional Components
