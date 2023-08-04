import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

import bookIcon from "../media/boking.jpg";
import payIcon from "../media/pay.jpg";
import workingIcon from "../media/working.jpg";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "10%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#D2042D", my: 3 }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#696969",
            textAlign: "center",
          }}
        >
          Everything you need to know when you want to buy, rent or sell - All
          in one place
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <img src={bookIcon} alt="buyIcon" style={{
            height: '200px',
            width: '250px',

          }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "600",
              fontSize: "20px",
              color: "#D2042D",
              my: 1,
            }}
          >
            Book A Space 
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#696969" }}
            >
              How to buy
            </Typography>
            <ArrowRightAltIcon style={{ color: "#696969" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={payIcon} alt="buyIcon" style={{
            height: '200px',
            width : '200px',
          }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "600",
              fontSize: "20px",
              color: "#D2042D",
              my: 1,
            }}
          >
            Pay & Recive invoice 
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#696969" }}
            >
              How to rent
            </Typography>
            <ArrowRightAltIcon style={{ color: "#696969" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={workingIcon} alt="buyIcon" style={{
            height : '200px', 
            width : '200px',
          }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "600",
              fontSize: "20px",
              color: "#D2042D",
              my: 1,
            }}
          >
            Start working          
     </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#696969" }}
            >
              How to sell
            </Typography>
            <ArrowRightAltIcon style={{ color: "#696969" }} />
          </Box>
        </GuideBox>
      </GuidesBox>

      <CustomButton
        backgroundColor="#D2042D"
        color="#fff"
        buttonText="See Full Guides"
        guideBtn={true}
      />
    </Box>
  );
};

export default Guide;
