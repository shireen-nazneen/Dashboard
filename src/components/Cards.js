import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, AvatarGroup, Avatar } from '@mui/material';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     </Box>
// );

export default function BasicCard({ Name, discription }) {
  return (
    <div style={{ "width": "15rem", "margin": "10px" }}>
      <Card sx={{ minWidth: 60 }}>
        <CardContent>
          <Alert icon={false} severity="success">{Name}</Alert>
          <Typography variant="h5" component="div">
            {discription}
          </Typography>
          <AvatarGroup max={3}>
            <Avatar alt="Remy Sharp" src="pic1.jpj" />
            <Avatar alt="Travis Howard" src="pic2.jpj" />
            <Avatar alt="Cindy Baker" src="" />
            <Avatar alt="Agnes Walker" src="" />
          </AvatarGroup>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>

  );
}
