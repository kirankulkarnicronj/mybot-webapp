import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import "./cards.css";
export default function Cards({ itemdata, checked }) {
  let IconData = [
    {
      iconimage: "/assets/icons/skill_icon_Attack.png",
      values: itemdata?.attack || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Strength.png",
      values: itemdata?.strength || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Defence.png",
      values: itemdata?.defense || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Ranged.png",
      values: itemdata?.range || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Magic.png",
      values: itemdata?.magic || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Firemaking.png",
      values: itemdata?.firemaking || "",
    },
    // 2nd row
    {
      iconimage: "/assets/icons/skill_icon_Hitpoints.png",
      values: itemdata?.hitpoints || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Agility.png",
      values: itemdata?.agility || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Herblore.png",
      values: itemdata?.herblore || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Thieving.png",
      values: itemdata?.thieving || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Crafting.png",
      values: itemdata?.crafting || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Woodcutting.png",
      values: itemdata?.woodcutting || "",
    },
    // 3rd row
    {
      iconimage: "/assets/icons/skill_icon_Hunter.png",
      values: itemdata?.hunter || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Mining.png",
      values: itemdata?.mining || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Smithing.png",
      values: itemdata?.smithing || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Fishing.png",
      values: itemdata?.fishing || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Cooking.png",
      values: itemdata?.cooking || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Farming.png",
      values: itemdata?.farming || "",
    },
    // 4th
    {
      iconimage: "/assets/icons/skill_icon_Runecraft.png",
      values: itemdata?.runecrafting || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Construction.png",
      values: itemdata?.construction || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Prayer.png",
      values: itemdata?.prayer || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Fletching.png",
      values: itemdata?.fletching || "",
    },
    {
      iconimage: "/assets/icons/skill_icon_Slayer.png",
      values: itemdata?.slayer || "",
    },
  ];
  return (
    <Card sx={{ borderRadius: "13px" }}>
      <CardContent className="card-content">
        <Typography
          variant="h3"
          sx={{ fontSize: "16px", margin: 2 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box className="botsicon" style={{ margin: "-7px 10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30.753"
              height="29.795"
              viewBox="0 0 30.753 29.795"
            >
              <g id="bot" transform="translate(0 0)">
                <g id="Page-1_9_" transform="translate(0 0)">
                  <g id="_x30_10---Chat-Bot-Head" transform="translate(0 0)">
                    <path
                      id="Shape_60_"
                      d="M0,248.437v3.075a1.538,1.538,0,0,0,1.538,1.538H2.05V246.9H1.538A1.538,1.538,0,0,0,0,248.437Z"
                      transform="translate(0 -232.548)"
                      fill="#fe9933"
                    />
                    <path
                      id="Shape_59_"
                      d="M478.379,246.9h-.513v6.151h.513a1.538,1.538,0,0,0,1.538-1.538v-3.075A1.538,1.538,0,0,0,478.379,246.9Z"
                      transform="translate(-449.164 -232.548)"
                      fill="#fe9933"
                    />
                    <path
                      id="Shape_58_"
                      d="M218.455,10.535a2.571,2.571,0,0,1-2.05,2.511v2.614H215.38V13.047a2.563,2.563,0,1,1,3.075-2.511Z"
                      transform="translate(-200.516 -7.973)"
                      fill="#fe9933"
                    />
                    <ellipse
                      id="Oval_17_"
                      cx="1.538"
                      cy="1.538"
                      rx="1.538"
                      ry="1.538"
                      transform="translate(19.989 14.351)"
                      fill="#fe9933"
                    />
                    <ellipse
                      id="Oval_16_"
                      cx="1.538"
                      cy="1.538"
                      rx="1.538"
                      ry="1.538"
                      transform="translate(7.688 14.351)"
                      fill="#fe9933"
                    />
                    <path
                      id="Shape_57_"
                      d="M72.727,153.033H54.275a3.075,3.075,0,0,0-3.075,3.075v11.276a3.075,3.075,0,0,0,3.065,3.075.517.517,0,0,1,.523.513v2.63a.513.513,0,0,0,.8.427l5.1-3.4a1.025,1.025,0,0,1,.566-.172H72.727a3.075,3.075,0,0,0,3.075-3.075V156.108A3.075,3.075,0,0,0,72.727,153.033Zm-15.376,9.738a2.563,2.563,0,1,1,2.563-2.563A2.563,2.563,0,0,1,57.351,162.771Zm9.148,1.809a3.425,3.425,0,0,1-3,1.266,3.425,3.425,0,0,1-3-1.266.513.513,0,0,1,.865-.549,3.27,3.27,0,0,0,4.265,0,.517.517,0,0,1,.707-.147A.509.509,0,0,1,66.5,164.581Zm3.153-1.809a2.563,2.563,0,1,1,2.563-2.563A2.563,2.563,0,0,1,69.652,162.771Z"
                      transform="translate(-48.125 -144.32)"
                      fill="#fe9933"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Box>
          {checked ? "**********" : itemdata?.name}
        </Typography>
        <CardActions mt={3}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={5}>
              <Typography size="small" className="cardHeaders">
                Ban Status:{" "}
                <b>
                  {itemdata?.ban ? (
                    <b style={{ color: "red" }}>Ban</b>
                  ) : (
                    <b style={{ color: "#35C21C" }}>Not Ban</b>
                  )}
                </b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography size="small" className="cardHeaders">
                Quests Point: <b>{itemdata?.questPoints}</b>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography size="small" className="cardHeaders">
                Membership: <b>{itemdata?.membershipDays || ""}</b>
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography size="small" className="cardHeaders">
                Gold: <b>{itemdata?.coins || ""}</b>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography size="small" className="cardHeaders">
                Last Check-In:{" "}
                {/* <b>{(itemdata?.lastCheckIn).substring(11, 19) || ""}  {(itemdata?.lastCheckIn).substring(0,9) || ""}</b> */}
                <b>{(itemdata?.lastCheckIn).substring(11, 19) || ""}</b>
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </CardContent>
      <CardActions>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
          style={{ textAlign: "center" }}
        >
          {IconData.map((item, index) => {
            return (
              <Grid style={{ display: "flex" }} item xs={1} md={2} key={index}>
                <img className="imgIcon" src={item.iconimage} />
                <Typography>
                  <b>{item.values}</b>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </CardActions>
    </Card>
  );
}
