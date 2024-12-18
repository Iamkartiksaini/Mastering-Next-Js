import QueryProviderComponent from "@/stores/ReactQuery/page";
import "./style.scss";
export const metadata = {
  title: "TanStack-Query",
};

export default function Layout({ children, users }) {
  return (
    <QueryProviderComponent>
      <div className="Query">
        <aside>{users}</aside>
        {children}
      </div>
    </QueryProviderComponent>
  );
}
