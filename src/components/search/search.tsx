import SearchIcon from '@mui/icons-material/Search'
import { AccountCircle } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { useSelector } from 'react-redux';


const Search = () => {   
    const currentRoute  = useSelector((state:any) => state.appActions.currentRoute);  

    return (
        <div className="search-login-container flex items-center gap-2">                            
                    <TextField id="outlined-basic" variant="outlined"  placeholder={currentRoute.includes('home')? 'search projects' : 'search'}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
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
    )
}

export default Search;