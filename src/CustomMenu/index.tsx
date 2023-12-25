const CustomMenu = ({ categories }: { categories: string[] }) => (
  <>
    {categories.map((category) => (
      <div key={category} className="menu">
        {category}
      </div>
    ))}
  </>
);

export default CustomMenu;
