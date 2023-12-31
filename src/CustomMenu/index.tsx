const CustomMenu = ({ categories }: { categories: string[] }) => {
  throw new Error("카테고리 정보를 불러올 수 없습니다.");

  return (
    <>
      {categories.map((category) => (
        <div key={category} className="menu">
          {category}
        </div>
      ))}
    </>
  );
};

export default CustomMenu;
