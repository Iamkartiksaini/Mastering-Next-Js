import Header from "@/components/Header/header";
import { Fragment } from "react";
import "../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="main-container">{children}</div>
    </Fragment>
  );
}
