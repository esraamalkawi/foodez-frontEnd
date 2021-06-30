import IngrediantItem from "./IngrediantItem";

import { useSelector } from "react-redux";

const Ingrediants = () => {
  const ingrediants = useSelector((state) => state.ingrediants.ingrediants);
  let list = ingrediants.map((ingrediant) => (
    <IngrediantItem ingrediant={ingrediant} key={ingrediant.id} />
  ));
  return (
    <>
      ingrediaaaaaants
      <div>{list}</div>
    </>
  );
};

export default Ingrediants;
