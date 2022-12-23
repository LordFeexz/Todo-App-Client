export default function List({ category }) {
  return (
    <section className="container flex-wrap list-wrapper">
      {/* <h1 className="task">All Task</h1> */}
      <div>
        <h4>{category.name}</h4>
      </div>
      {/* <h4 className="new">+New Category</h4> */}
    </section>
  );
}
