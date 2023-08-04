import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const SubscriptionCard = () => {
  return (
    <>
      <Typography variant="h5" sx={{
  marginBottom: '20px',
  mt: '20px',
  ml: '20px',
  justifyContent: 'center',
  textAlign: 'center', // Center-align the text
  color: '#D2042D', // Change the text color to attract attention
fontWeight : '300'  
  // Add any other styling properties you think will enhance the appeal
}}>
  Discover the Best Deals of the Season! 
</Typography>
      <Grid container spacing={2} sx={{ marginTop: '30px' }}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              marginLeft: '10px',
              marginRight: '10px',
              justifyContent: 'center',
              boxShadow: '0px 4px 8px rgba(210, 4, 45, 0.1)',
              borderRadius: '10px',
              backgroundColor: '#D2042D', 
              color : '#fff'
            }}
          >
            <CardContent>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                5 visits plan
              </Typography>
              <Typography variant="subtitle1">Rs. 999/-</Typography>
              <Typography variant="body1">Exclusive of taxes</Typography>
              <Typography variant="body1">5+ visits + 1000 credits</Typography>
              <Typography variant="body1">Valid for a year</Typography>
              <Button variant="contained" color="secondary" style={{ backgroundColor: '#ffd300 ',  color : '#D2042D' }}>
  Proceed to Buy
</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              marginLeft: '20px',
              marginRight: '20px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              backgroundColor: '#D2042D', 
              color : '#fff'
            }}
          >
            
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                20 visits plan 
              </Typography>
              <Typography variant="h5" sx={{ marginBottom: '20px' , color : '#ffd300 ' , fontWeight : 500}}>
               Best Seller 
              </Typography>
              <Typography variant="subtitle1">Rs. 3999/-</Typography>
              <Typography variant="body1">Exclusive of taxes</Typography>
              <Typography variant="body1">20+ visits + 4000 credits</Typography>
              <Typography variant="body1">Valid for a year</Typography>
              <Button variant="contained" color="secondary" style={{ backgroundColor: '#ffd300 ' , color : '#D2042D'}}>
  Proceed to Buy
</Button>
            </CardContent>
              
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              marginLeft: '10px',
              marginRight: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              borderColor: '#D2042D',
              backgroundColor: '#D2042D', 
              color : '#fff'
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                1 visits plan
              </Typography>
              <Typography variant="subtitle1">Rs. 299/-</Typography>
              <Typography variant="body1">Exclusive of taxes</Typography>
              <Typography variant="body1">1+ visits + 200 credits</Typography>
              <Typography variant="body1">Valid for a year</Typography>
              <Button variant="contained" color="secondary" style={{ backgroundColor: '#ffd300 ' ,  color : '#D2042D'}}>
  Proceed to Buy
</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SubscriptionCard;
