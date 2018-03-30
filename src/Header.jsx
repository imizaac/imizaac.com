import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Link } from 'react-router-dom';

const undoLinkStyling = {
  textDecoration: 'none',
  color: 'inherit'
};

const Header = (props: { left: Function, history: Any }) => {
  return (
    <div>
      <AppBar
        zDepth={3}
        style={{ position: 'fixed' }}
        title={
          <Link to="/" style={undoLinkStyling}>
            ImIzaac
          </Link>
        }
        onLeftIconButtonClick={props.left}
      />
      <Toolbar />
    </div>
  );
};

export default Header;
