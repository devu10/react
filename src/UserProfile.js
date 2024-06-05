import dev from "./assets/img.png";
export const UserProfile = () => {
  const cssStyle = { color: "red", fontSize: "3rem" };
  return (
    <div className="card">
      <div className="img">
        <img src={dev} alt="" width="100px"></img>
      </div>
      <div className="info">
        <h2 className="text-danger">devendra</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          perspiciatis asperiores neque voluptatibus ex culpa rem minima tempore
          deleniti voluptas, maiores nesciunt quasi est nobis nihil ipsam
          necessitatibus eligendi exercitationem.
        </p>
        <img src="./im.jpg" width={"100%"}></img>
      </div>
    </div>
  );
};
