export default function List({ category }) {
  return (
    <section className="container flex-wrap list-wrapper">
      <div>
        <h4>{category.name}</h4>
      </div>
    </section>
  );
}
