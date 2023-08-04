import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
const coworkingData = [
  {
    title: 'Coworking space for freelancers and consultants',
    content: 'Freelancers & Business Travellers\nOn demand, Pay per use plans. Work from your nearest myHQ only 2 kms away.',
    imageUrl : "./media/waveX.png",
  },
  {
    title: 'Coworking space for startups',
    content: 'Early stage startups & Non-Profits\nReserved desk or cabin in a shared space. Lowest price guarantee and fully serviced spaces.',
    imageUrl: '', // Add appropriate image URL
  },
  {
    title: 'Coworking space for small business',
    content: 'Growing Companies & Small Businesses\nGet a privately managed, custom office. Take up an entire floor or a shared private space.',
    imageUrl: '', // Add appropriate image URL
  },
  {
    title: 'Shared coworking office space for remote workers',
    content: 'Remote & Mobile Teams\nOn demand, Pay per use plans. Book desks or meeting rooms by the day.',
    imageUrl: '', // Add appropriate image URL
  },
  {
    title: 'Coworking Spaces for Entrepreneurs and business',
    content: 'New and Expanding Businesses\nGet an address for your business anywhere in the country. In-office reception and mailing services.',
    imageUrl: '', // Add appropriate image URL
  },
];

const CoworkingSections = () => {
  return (
    <div style={{ mt: 15, backgroundColor: "#ffebea", py: 10, mb: 15 }}>
      <Typography variant="h4" component="h2" style={{ textAlign: 'center', marginTop: "30px", color: "#D2042D" }}>
        Workspaces for everyone.
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'center', marginTop: "10px" }}>
        Whether you are a freelancer, early-stage start-up, or an enterprise. Find the workspace that's right for you.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {coworkingData.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={section.imageUrl}
                alt={section.title}
              />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {section.title}
                </Typography>
                <Typography variant="body2">{section.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CoworkingSections;
