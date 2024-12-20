import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';

const labTestData = [
    {
        id: 1,
        name: "Blood Tests",
    },
    {
        id: 2,
        name: "CTScans",
    },
    {
        id: 3,
        name: "Radiology Reports",
    },
    {
        id: 4,
        name: "X-Rays",
    },
    {
        id: 5,
        name: "Urine Test",
    },
]
function LabResults() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "30px 16px",
        marginTop: "24px",
        
      }}
    >
        <h2 style={{margin:'0'}}>Lab Results</h2>
        <List sx={{maxHeight: '150px', overflow:'auto', scrollbarWidth:'thin'}} >
           {labTestData.map((tests) => (
           <div key={tests.id}>
            <ListItem disableGutters sx={{p: 0}}>
                <ListItemButton disableGutters>
                    <ListItemText primary={tests.name} sx={{ pl: 2}}></ListItemText>
                    <ListItemIcon > <SaveAltOutlinedIcon /> </ListItemIcon>
                </ListItemButton>
            </ListItem>
            </div>
            ))}
        </List>
    </Box>
  )
}

export default LabResults
