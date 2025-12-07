import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import './header.scss';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const HeaderComponent = () => {
    function addProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="header-container">
            <div className="tabs-container">
                <Tabs value={value} onChange={handleChange} aria-label="all-tabs">
                    <Tab className="tab-item" label="Home" {...addProps(0)} />
                    <Tab className="tab-item" label="My proposals" {...addProps(1)} />
                    <Tab className="tab-item" label="Notifications" {...addProps(2)} />
                </Tabs>
            </div>
            <div className="search-login-container">                            
                    <TextField id="outlined-basic" variant="outlined"  placeholder='Home'
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                )
                            },
                        }}
                    />
            </div>
        </div>
    );
}

export default HeaderComponent;