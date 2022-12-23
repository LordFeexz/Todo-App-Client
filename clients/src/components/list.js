import "../styles/List.css";

export default function List() {
  return (
    <section className="container flex-wrap list-wrapper">
      <h1 className="task">All Task</h1>
      <div className="list">
        <h4>Favorites</h4>
        <h4>Groceries</h4>
        <h4>Work</h4>
        <h4>Study</h4>
        <h4>Sport</h4>
      </div>
      <h4 className="new">+New Category</h4>
    </section>
  );
}
