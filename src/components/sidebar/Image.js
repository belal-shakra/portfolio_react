import SidebarImage from "../../assets/imgs/me-2021.jpg";


export default function Image() {
  return (
    <>
      <div className="me">
        <div className="img">
          <img src={SidebarImage} alt="my-pic" />
        </div>
        <div className="name">
          <h1 className="title">
            Belal Shakra
          </h1>
        </div>
      </div>
    </>
  );
}
