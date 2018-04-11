import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class NavItems extends React.Component {
  constructor(props) {
    super(props);

    //this.toggle = this.toggle.bind(this);
    this.state = {
      leftLinks: [
        { to: "vms", text: "VMs" },
        { to: "templates", text: "Templates" },
        { to: "create-vm", text: "Create VM" },
        { to: "history", text: "History" }
      ],
      rightLinks: [{ to: "logout", text: "Logout" }]
    };
  }

  render() {
    return (
      <div>
        <Navbar color="light" expand="sm" light>
          <NavbarBrand href="/"> VMEmperor </NavbarBrand>

          <Nav className="ml-auto" navbar>
            {this.state.leftLinks.map(({ to, text }) => {
              return (
                <NavItem>
                  <NavLink href={to}>{text}</NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
