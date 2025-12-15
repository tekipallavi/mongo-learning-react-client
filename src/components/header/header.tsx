import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { setCurrentRoute } from '../../redux-slices/app-actions'; 
import Search from '../search/search';
import { useDispatch } from 'react-redux';

const HeaderComponent = () => {
     const [value, setValue] = React.useState(0);
     const navigate = useNavigate();
     const location = useLocation();
     const dispatch = useDispatch();

    React.useEffect(() => {
        // Keep the selected tab in sync with the URL path
        if (location.pathname.startsWith('/my-proposals')) setValue(1);
        else if (location.pathname.startsWith('/notifications')) setValue(2);
        else setValue(0);
    }, [location.pathname]);

    function addProps(index:number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
   
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // update the UI immediately
        setValue(newValue);
         switch (newValue) {
            case 0:
                dispatch(setCurrentRoute('/home'));
                navigate('/home'); // Redirect to Home                
                break;
            case 1:
                dispatch(setCurrentRoute('/my-proposals'));
                navigate('/my-proposals'); // Redirect to My Proposals               
                break;
            case 2:
                dispatch(setCurrentRoute('/notifications'));
                navigate('/notifications'); // Redirect to Notifications                
                break;
            default:
                break;
        }
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
            <Search></Search>
        </div>
    );
}

export default HeaderComponent;