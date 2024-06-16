import "./layout.scss";

export const metadata = {
  title: "Parallel Routes",
};
export default function Layout({ children, post, team }) {
  return (
    <div className="Parallel">
      <h1>Parallel Route</h1>
      <div className="container">
        <div className="left">{team}</div>
        <div className="main">{children}</div>
        <div className="right">{post}</div>
      </div>
    </div>
  );
}
