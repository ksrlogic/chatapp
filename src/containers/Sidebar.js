import { connect } from "react-redux";
import SideBarComponent from "../components/Sidebar";

export const Sidebar = connect((state) => {
  return {
    users: state.users,
  };
}, {})(SideBarComponent);
