import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import {Search, AccountCircle} from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const HeaderComponent = () => {
    function addProps(index:number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const [value, setValue] = React.useState(0);
    const handleChange = (event:any, newValue:number) => {
        setValue(newValue);
    };
    return (
        <div className="header-container flex place-content-between mx-4">
            <div className="tabs-container">
                <Tabs value={value} onChange={handleChange} aria-label="all-tabs">
                    <Tab className="text-xs! font-bold!" label="Home" {...addProps(0)} />
                    <Tab className="text-xs! font-bold!" label="My proposals" {...addProps(1)} />
                    <Tab className="text-xs! font-bold!" label="Notifications" {...addProps(2)} />
                </Tabs>
            </div>
            <div className="search-login-container flex items-center gap-2">                            
                    <TextField id="outlined-basic" variant="outlined"  placeholder='Home'
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                            },
                            htmlInput: {                                
                                className: 'p-1!'
                            }
                        }}
                    />
                    <AccountCircle></AccountCircle>
            </div>
        </div>
    );
}

export default HeaderComponent;