import broCode from "./assets/bro-code.jpg";
function Card() {
  return (
    <div className="card">
      <img className="img" src={broCode} alt="bro code profile"></img>
      <h2>Pheakdey</h2>
      <p>I am a youtuber and developer.</p>
    </div>
  );
}
export default Card;
