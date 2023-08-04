import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const WhyChooseUs = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#D2042D",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3),
      width: "100%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    margin: theme.spacing(0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0),
    },
  }));

  const IconBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  });

  return (
    <CustomBox>
      <CustomContainer>
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontWeight: "700", marginBottom: 2 }}
          >
            Why Choose myHQ?
          </Typography>

          <Box sx={{ my: 2 }}>
            <IconBox>
              <WorkIcon sx={{ fontSize: 30, color: "#fff", mr: 2 }} />
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Largest Coverage
              </Typography>
            </IconBox>
            <Typography variant="body1" style={{ color : "#fff"}}>
              An expansive network of 300+ coworking spaces, you’re sure to
              find what you’re looking for
            </Typography>
          </Box>

          <Box sx={{ my: 2 }}>
            <IconBox>
              <MonetizationOnIcon sx={{ fontSize: 30, color: "#fff", mr: 2 }} />
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Lowest Price Guarantee
              </Typography>
            </IconBox>
            <Typography variant="body1" style={{ color : "#fff"}}>
              If you find a lower price, we’ll beat that by an additional 5%
              discount
            </Typography>
          </Box>

          <Box sx={{ my: 2 }}>
            <IconBox>
              <ThumbUpAltIcon sx={{ fontSize: 30, color: "#fff", mr: 2 }} />
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Money Back Guarantee
              </Typography>
            </IconBox>
            <Typography variant="body1" style={{ color : "#fff"}}>
              Get a 100% refund within 7 days, if you are unhappy with the space
            </Typography>
          </Box>

          <Box sx={{ my: 2 }}>
            <IconBox>
              <LocationOnIcon sx={{ fontSize: 30, color: "#fff", mr: 2 }} />
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Hassle-Free
              </Typography>
            </IconBox>
            <Typography variant="body1" style={{ color : "#fff"}}>
              Sit back, as our team of experts find you a space in your
              preferred location & budget
            </Typography>
          </Box>
        </Box>
      </CustomContainer>
    </CustomBox>
  );
};

export default WhyChooseUs;

