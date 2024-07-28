import React from 'react';
import { Container, Box, Typography, Grid, Avatar, Paper } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled(Box)({
  backgroundColor: '#f5f5f5',
  padding: '50px 0',
  textAlign: 'center',
});

const TeamMemberCard = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
});

const AboutPage = () => {
  return (
    <Container>
      <HeroSection>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5" component="p" color="textSecondary">
          We are committed to providing the best services to our clients.
        </Typography>
      </HeroSection>

      <Box mt={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" component="p" color="textSecondary">
          Our mission is to deliver high-quality products that bring value to our customers and make their lives easier.
        </Typography>
      </Box>

      <Box mt={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4} mt={3}>
          <Grid item xs={12} sm={6} md={4}>
            <TeamMemberCard>
              <Avatar
                alt="John Doe"
                src="https://via.placeholder.com/150"
                sx={{ width: 80, height: 80, margin: '0 auto 10px auto' }}
              />
              <Typography variant="h6" component="h3">
                John Doe
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CEO
              </Typography>
              <Typography variant="body2" color="textSecondary">
                John is the driving force behind our company. With over 20 years of experience in the industry, he leads our team with passion and dedication.
              </Typography>
            </TeamMemberCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamMemberCard>
              <Avatar
                alt="Jane Smith"
                src="https://via.placeholder.com/150"
                sx={{ width: 80, height: 80, margin: '0 auto 10px auto' }}
              />
              <Typography variant="h6" component="h3">
                Jane Smith
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CTO
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Jane oversees all technical aspects of the company. Her expertise in software development and innovation is unparalleled.
              </Typography>
            </TeamMemberCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamMemberCard>
              <Avatar
                alt="Alice Johnson"
                src="https://via.placeholder.com/150"
                sx={{ width: 80, height: 80, margin: '0 auto 10px auto' }}
              />
              <Typography variant="h6" component="h3">
                Alice Johnson
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CFO
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Alice manages the financial actions of the company. Her strategic insights ensure our financial health and growth.
              </Typography>
            </TeamMemberCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPage;
