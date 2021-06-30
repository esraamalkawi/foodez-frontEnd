const IngrediantItem = (props) => {
  return (
    <div>
      <img src={props.ingrediant.image} />
      <p>{props.ingrediant.name}</p>
      <p>{props.ingrediant.details}</p>
    </div>
  );
};

export default IngrediantItem;
