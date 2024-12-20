import React from "react";
import {List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, IconButton, Stack, Box } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

const patients = [
    {
        id: 1,
        name: "John Doe",
        gender: "Male",
        age: 30,
        image: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        name: "Jane Smith",
        gender: "Female",
        age: 28,
        image: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 3,
        name: "Sam Brown",
        gender: "Male",
        age: 35,
        image: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        id: 4,
        name: "Lisa White",
        gender: "Female",
        age: 24,
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        id: 5,
        name: "Michael Green",
        gender: "Male",
        age: 40,
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        id: 6,
        name: "Emily Johnson",
        gender: "Female",
        age: 33,
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        id: 7,
        name: "David Lee",
        gender: "Male",
        age: 29,
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        id: 8,
        name: "Sophia Williams",
        gender: "Female",
        age: 27,
        image: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        id: 9,
        name: "James Taylor",
        gender: "Male",
        age: 32,
        image: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        id: 10,
        name: "Olivia Harris",
        gender: "Female",
        age: 26,
        image: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        id: 11,
        name: "William Moore",
        gender: "Male",
        age: 45,
        image: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      {
        id: 12,
        name: "Charlotte King",
        gender: "Female",
        age: 38,
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
  ];
function PatientList() {
  return (
    <React.Fragment>
        <Box sx={{backgroundColor:'#ffffff', borderRadius:'16px', paddingBottom:'20px'}}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' py={0}>
                <h2 style={{ paddingLeft:'16px', m: 0}} >Patients</h2>
                <IconButton sx={{height: '40px'}} >
                    <SearchIcon  />
                </IconButton>
            </Stack>
            <List sx={{height:'calc(100vh - 235px)', overflow:'auto', scrollbarWidth:'thin', mr:'5px'}} >
            {patients.map((person) => (
                <div key={person.id}>
                <ListItem>
                    
                    <ListItemAvatar>
                    <Avatar alt={person.name} src={person.image} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={person.name}
                    secondary={
                        <Typography variant="body2" color="textSecondary">
                        {person.gender}, {person.age} 
                        </Typography>
                    }
                    />
                    <IconButton edge="end" aria-label="more">
                        <MoreVertIcon fontSize='small'/>
                    </IconButton>
                </ListItem>
                </div>
            ))}
            </List>
        </Box>
    </React.Fragment>
  );
}

export default PatientList;
