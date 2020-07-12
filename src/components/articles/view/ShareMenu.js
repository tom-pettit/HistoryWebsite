import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';


export default function ShareMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" color='inherit' onClick={handleClick}>
            <ShareIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><IconButton href='https://twitter.com/intent/tweet?text=%40BrumafriendHist%20' target='_blank'><TwitterIcon/></IconButton>Tweet Brumafriend!</MenuItem>
        <MenuItem onClick={handleClose}><IconButton><FileCopyIcon/></IconButton>Copy the URL above to share!</MenuItem>
      </Menu>
    </div>
  );
}