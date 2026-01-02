import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Background from "../../assets/joy_stick1.png"
import cryEngine from "../../assets/cry_1.png"
import unreal from "../../assets/unreal_1.png"
import unity from "../../assets/unity_1.png"

const Hero = () => {
    return <Box sx={{
        maxWidth: "1160px",
        width: "100%",
        padding: "0 15px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            width: "100%",
            marginTop: "120px"
        }}>

            <Typography sx={{
                color: "#E87D0E",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px"
            }}>3D game Dev</Typography>

            <Typography variant="h3" sx={{
                fontWeight: "bold",
                lineHeight: "70px",
                marginBottom: "25px"
            }}>
                Work that we produce for our clients
            </Typography>

            <Typography sx={{
                marginBottom: "50px"
            }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum minima doloribus neque iste odio expedita quae obcaecati quaerat ducimus quia nulla iusto, rem in! Aut obcaecati sequi illo possimus expedita debitis accusamus fugiat velit iusto deserunt? Temporibus praesentium natus, error eaque impedit aliquid nesciunt, molestias, ipsum doloremque recusandae saepe consequatur officiis. </Typography>

            <NavLink to="/contacts" style={{ textDecoration: "none", color: "white" }}>
                <Typography sx={{
                    display: "inline-block",
                    backgroundColor: "#FA9021",
                    padding: "10px 25px",
                    borderRadius: "6px",
                    color: "white",
                    fontWeight: 500,
                    transition: "background-color 0.2s ease",

                    "&:hover": {
                        backgroundColor: "#E87D0E",
                    },
                }}>Get More Details</Typography>
            </NavLink>

            <img src={Background} alt="joystic" style={{
                position: "absolute",
                bottom: "-20px",
                right: "-120px",
                zIndex: 1,
                pointerEvents: "none",
            }} />

            <img src={cryEngine} alt="cryengine" style={{
                width: "101px",
                height: "99px",
                position: "absolute",
                bottom: "460px",
                right: "400px",
                zIndex: 1,
            }} />

            <img src={unreal} alt="unreal" style={{
                width: "59px",
                height: "64px",
                position: "absolute",
                bottom: "530px",
                right: "72px",
                zIndex: 1,
            }} />

            <img src={unity} alt="unity" style={{
                width: "96px",
                height: "30px",
                position: "absolute",
                bottom: "315px",
                right: "570px",
                zIndex: 1,
            }} />

        </Box>
    </Box>
}


export default Hero;