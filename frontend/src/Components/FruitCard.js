function FruitCard({ genus, name, family, order }) {
  return (
    <div className="card">
      <div className="text">
        <h2>{name}</h2>
        <p>Genus: {genus}</p>
        <p>Family: {family}</p>
        <p>Order: {order}</p>
      </div>
    </div>
  );
}

export default FruitCard;
