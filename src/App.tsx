import HeaderComponent from './components/header/header';
import AppRoutes from './components/routes/routes';
import { useDispatch } from 'react-redux';
import { setLoggedInEmployee, setLoggedInEmployeeDetails } from './redux-slices/employee';
import { useEffect } from 'react';
import { getEmployee } from './services/employee.service';
import React from 'react';

function App() {
  // This is until login is implemented
  const dispatch = useDispatch();
  dispatch(setLoggedInEmployee('f837eb08-9939-4b05-b297-628296bf02ce'))
  const loggedInEmployee = 'f837eb08-9939-4b05-b297-628296bf02ce';
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect( () => {
        console.log("into the use effect of app component");
        const fetchEmployeeDetails = async () => {
            const loggedInEmployeeDetails = await getEmployee(loggedInEmployee);
            dispatch(setLoggedInEmployeeDetails(loggedInEmployeeDetails));
            setIsLoading(false);
        };
        fetchEmployeeDetails();
  }, [loggedInEmployee])

  return (    
    <div className="App">
      {isLoading ? <div>Loading...</div> : null}
      {!isLoading && 
      <>
        <HeaderComponent></HeaderComponent>
        <AppRoutes></AppRoutes>
      </>
      }
    </div>
  );
}

export default App;