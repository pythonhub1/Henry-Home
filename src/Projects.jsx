import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from "react";
import logo from './leams1.jpeg';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'


function Projects() {
    let navigate = useNavigate();

    return (
            <>
                <style>
                    {`
                    body {
                    font-family: Arial, sans-serif;
                     background-color: lightblue;
                    `}
                </style>
                <Stack
                    direction="column"
                    justifyContent="center"
                    spacing={4}
                >
                    <center><Typography variant="h3">My Projects</Typography></center>


                    <Button variant="text" onClick={() => navigate('/inventions/my-drone/')} sx={{textTransform: 'none'}}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            spacing={4}

                            sx={{padding: 1, border: 3, borderColor: 'primary.main', borderRadius: '16px'}}
                        >
                            <img src={logo}  alt="hi" width="30%" height="30%"/>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                spacing={2}
                            >
                                <Typography variant="h4">My Drone</Typography>
                                <Typography>
                                    A big drone, great for drone hobbiest who are okay with flying
                                    drones. You can attach a camera for the drone to take pictures.
                                    The drone can carry 35 pounds. The drone weighs 10 pounds.
                                </Typography>
                            </Stack>
                        </Stack>
                    </Button>
                    <Button variant="text" onClick={() => navigate('/Henry-Home/')} sx={{textTransform: 'none'}}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            spacing={4}

                            sx={{padding: 1, border: 3, borderColor: 'primary.main', borderRadius: '16px'}}
                        >
                            <img src={logo}  alt="hi" width="30%" height="30%"/>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                spacing={2}
                            >
                                <Typography variant="h4">Levitating Clock</Typography>
                                <Typography>
                                    ??? ?????? ????? ???? ????? ????? ,??????  ?????! ???????, ????, ?????. ?????????????????????????????????????????????????
                                </Typography>
                            </Stack>
                        </Stack>
                    </Button>

                </Stack>

            </>

    );
}
export default Projects