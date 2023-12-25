const CustomMenu = ({ categories }: { categories: string[] }) => (
  <>
    {categories.map((category) => (
      <div className="menu">{category}</div>
    ))}
  </>
);

export default CustomMenu;
