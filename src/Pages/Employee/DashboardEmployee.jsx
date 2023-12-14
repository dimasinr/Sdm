import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import { Typography, Card, CardActions, Button, CardContent } from '@mui/material'


function DashboardEmployee() {
  return (
    <SideBar>
        <Card sx={{ minWidth: 275 }} className='shadow-card'>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              dasjdasojd
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </SideBar>
    )
}

export default DashboardEmployee
