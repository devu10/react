import { useRef } from "react";
export const MyForm = () => {
  const addressRef = useRef("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(addressRef.current.value);
  };

  const handleChangeForm = (e) => {
    const str = e.target.value;
    console.log(str);
  };
  console.log(addressRef);
  return (
    <form action="" className="card" onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-3"
          required
          placeholder="name"
          onChange={handleChangeForm}
        ></input>
        <input
          type="text"
          className="form-control"
          required
          placeholder="email"
          ref={addressRef}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
