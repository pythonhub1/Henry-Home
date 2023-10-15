import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import React from "react";
import logo from './leams1.jpeg';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
function Drone() {
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

                <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
                    <Typography variant="h4">Discover Our Versatile Drone for Hobbyists</Typography>

                    <Typography variant="h5">Features:</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary={"Aerial Photography: Attach a camera for stunning photos and videos."} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={"Impressive Payload:> Carry up to 35 pounds with ease."} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={"Lightweight: Weighing only 10 pounds, it's easy to handle."} />
                        </ListItem>
                    </List>

                    <Typography variant="body1">Elevate your drone hobby with us. Explore more on our website.</Typography>
                </Paper>


            </>

    );
}
export default Drone