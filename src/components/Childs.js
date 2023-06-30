import Link from "next/link";
function Childs(props) {
  const { childs } = props;
  return (
    <>
      <h1>Child Lists</h1>
      <ul>
        {childs.map((child) => (
          <li key={child.id}>
            <Link href={`/childs/${child.id}`}>{child.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Childs;
