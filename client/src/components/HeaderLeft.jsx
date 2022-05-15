import {
  Box,
  Dialog,
  DialogContent,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HeaderLeft = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <ul>
        <li>
          <Link className="cart_icons" to="/cart">
            <Box>
              <span>3</span>
              <i className="las la-shopping-cart"></i>
            </Box>
          </Link>
        </li>
        <li className="login-popup" onClick={handleClickOpen}>
          <i className="lar la-user"></i>
        </li>
        <li>
          <Link to="/product">
            <i className="lar la-heart"></i>
          </Link>
        </li>
      </ul>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="user login & register area"
                >
                  <Tab label="Login" {...a11yProps(0)} />
                  <Tab label="Register" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Typography variant="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                  autem impedit cupiditate maxime quia quibusdam incidunt facere
                  labore nemo dicta modi, deserunt nisi odio praesentium tempora
                  dolorem sapiente veniam veritatis.
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography variant="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                  autem impedit cupiditate maxime quia quibusdam incidunt facere
                  labore nemo dicta modi, deserunt nisi odio praesentium tempora
                  dolorem sapiente veniam veritatis.
                </Typography>
              </TabPanel>
            </Box>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default HeaderLeft;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
