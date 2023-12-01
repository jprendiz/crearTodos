import './TodosLoading.css';

function TodosLoading() {

  const skeleton = () => (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );

  return (
    <>
      {skeleton()};
      {skeleton()};
      {skeleton()};
    </>
  );
}

export {TodosLoading}