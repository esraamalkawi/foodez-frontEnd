import Categories from "./Categories";

import { useSelector } from "react-redux";

const Menu = () => {
  const categories = useSelector((state) => state.categories.categories);
  let list = categories.map((category) => (
    <Categories category={category} key={category.id} />
  ));
  return (
    <>
      hiiii
      <div>{list}</div>
    </>
  );
};
export default Menu;
