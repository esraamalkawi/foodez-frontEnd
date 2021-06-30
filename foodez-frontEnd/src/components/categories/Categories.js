import { Link } from "react-router-dom";
import Ingrediants from "../ingrediants/Ingrediants";

const Categories = (props) => {
  //   const categories = useSelector((state) => state.categories.categories);
  return (
    <div>
      <Link to={`/categories/${props.category.id}`}>
        <img src={props.category.image} />
      </Link>
      <p>{props.category.name}</p>
      {/* <div className="col-12">
        <Ingrediants ingrediants={category.ingrediants} />
      </div> */}
    </div>
  );
};

export default Categories;
