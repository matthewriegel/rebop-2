import React from "react";
import NavbarBase from "./NavbarBase";

interface State {
  drawerOpen: boolean;
}

class Navbar extends React.Component<{}> {
  public state: State = {
    drawerOpen: false,
  };

  private closeDrawer = () => {
    this.setState({ drawerOpen: false });
  };

  private openDrawer = () => {
    this.setState({ drawerOpen: true });
  };

  render() {
    const { drawerOpen } = this.state;
    return (
      <NavbarBase
        drawerOpen={drawerOpen}
        onOpenDrawer={this.openDrawer}
        onCloseDrawer={this.closeDrawer}
      />
    );
  }
}

export default Navbar;
