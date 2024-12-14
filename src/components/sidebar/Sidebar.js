import Image from "./Image";
import IconList from "./IconList";
import List from "./list/List";

export default function Sidebar() {
  return (
    <aside id="aside">
      <div className="container" id="aside-container">
        <Image />

        <IconList />

        <List />
      </div>
    </aside>
  );
}
