export default function Matches({ count }) {
  const array = new Array(count).fill("🦴");
  return (
    <ul>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}{" "}
    </ul>
  );
}
