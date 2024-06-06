export const MyForm = () => {
  return (
    <form action="" className="card">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          required
          placeholder="name"
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
