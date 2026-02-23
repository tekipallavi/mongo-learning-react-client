import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProjects } from '../../services/projects.service';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const Home: React.FC = () => {
    const loggedInEmployeeDetails = useSelector((state: any) => state.employee.loggedInEmployeeDetails);
    const loggedInEmployee = useSelector((state: any) => state.employee.loggedInEmployee);
    const [projects, setProjects] = React.useState<any[]>([]);

    useEffect(() => {
        console.log("into the use effect of home component");
        const fetchProjects = async () => {
            
            const p = await getProjects(loggedInEmployeeDetails.techStack);
            setProjects(p);
            console.log('Projects for logged in employee:', p);
        }
        fetchProjects();
    }, [loggedInEmployee])

    return (
        <div className="home m-4">
            <h1>Hello <span className="font-bold">{loggedInEmployeeDetails.name}</span></h1>
            <p>Here are project matching your skills</p>

            {projects.map((project) => (
                <Box sx={{ minWidth: 275, marginTop: 4, borderRadius: 2 }} key={project.id}>
                    <Card variant="outlined" sx={{ borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h5" >
                                {project.projectName}
                            </Typography>
                            <Typography variant="body2">
                                {project.clientName}
                            </Typography>
                        </CardContent>
                         <CardActions>
                            <Button size="small">View details</Button>
                        </CardActions>
                    </Card>
                </Box>
            ))}

        </div>
    );
};

export default Home;
