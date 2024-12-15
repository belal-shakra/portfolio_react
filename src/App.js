import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import "./assets/css/style.css";

import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch();
  if (loading)
    return (<div class="loader"></div>);
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Sidebar />
      <Main data={data} />
    </>
  );
}

export default App;
