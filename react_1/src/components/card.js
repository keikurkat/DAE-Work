import "./card.css";

export default function Card({ title, author, img }) {
  return (
    <div className="card">
      <img src={img} width={50} height={100} />
      <h1>{author}</h1>
      <p>{profession}</p>
    </div>
  );
}
