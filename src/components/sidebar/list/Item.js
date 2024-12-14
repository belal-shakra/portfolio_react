
export default function Item({item, id, children}) {
  return (
    <a hRef={`#${id}`} className="nav-link">
      <li className="nav-item">
        { children }
        <span>{ item }</span>
      </li>
    </a>
  );
}
