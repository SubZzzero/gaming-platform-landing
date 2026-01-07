import Subscribe from "../components/Subscribe"
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import aboutMain from "../assets/about_main_img.png"
import secondMain from "../assets/about_second.png"
import Portfolio from "./sections/PortfolioSection";
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.png"
import avatar4 from "../assets/avatar4.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PortfolioSection from "./sections/PortfolioSection";
const About = () => {
    return <div>

        <Box sx={{ marginTop: "35px", marginBottom: "150px" }}>
            <Box sx={{
                maxWidth: "1330px",
                width: "100%",
                padding: "0 15px",
                margin: "0 auto",
            }}>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
                        <Typography sx={{ fontSize: "30px", fontWeight: "bold", lineHeight: 1.8, marginBottom: "25px" }}>Lorem Ipsum is simply dummy text of the printing and.</Typography>

                        <Typography sx={{ marginBottom: "55px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography>

                        <NavLink to="/contacts" style={{ textDecoration: "none", color: "white" }}>
                            <Typography sx={{
                                display: "flex",
                                alignItems: "center",
                                maxWidth: "190px",
                                backgroundColor: "#FA9021",
                                padding: "10px 25px",
                                borderRadius: "40px",
                                transition: "background-color 0.2s ease",

                                "&:hover": {
                                    backgroundColor: "#E87D0E",
                                },
                            }}>Get in touch <ArrowForwardIcon sx={{ color: "#ffffffff", marginLeft: "10px" }}></ArrowForwardIcon></Typography>

                        </NavLink>

                    </Box>


                    <Box component={"img"} src={aboutMain} alt="aboutMain"></Box>
                </Box>


                <Box sx={{ marginTop: "145px" }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: "600" }}>Why work with us</Typography>

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{
                            maxWidth: "380px",
                            height: "340px",
                            backgroundColor: "#1C140F",
                            marginTop: "65px",
                            marginBottom: "145px",
                            borderRadius: "20px",
                            padding: "40px"

                        }}>
                            <Typography sx={{
                                display: "inline-block",
                                padding: "10px",
                                backgroundColor: "#2C1225",
                                borderRadius: "8px",
                                marginBottom: "19px"
                            }}>Lorem ipsum</Typography>
                            <Typography sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "19px" }}>Lorem ipsum</Typography>
                            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium modi ipsum maxime sequi molestias dolor?</Typography>
                        </Box>

                        <Box sx={{
                            maxWidth: "380px",
                            height: "340px",
                            backgroundColor: "#1C140F",
                            marginTop: "65px",
                            marginBottom: "145px",
                            borderRadius: "20px",
                            padding: "40px"

                        }}>
                            <Typography sx={{
                                display: "inline-block",
                                padding: "10px",
                                backgroundColor: "#31190D",
                                borderRadius: "8px",
                                marginBottom: "19px"
                            }}>Lorem ipsum</Typography>
                            <Typography sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "19px" }}>Lorem ipsum</Typography>
                            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium modi ipsum maxime sequi molestias dolor?</Typography>
                        </Box>

                        <Box sx={{
                            maxWidth: "380px",
                            height: "340px",
                            backgroundColor: "#1C140F",
                            marginTop: "65px",
                            marginBottom: "145px",
                            borderRadius: "20px",
                            padding: "40px"

                        }}>
                            <Typography sx={{
                                display: "inline-block",
                                padding: "10px",
                                backgroundColor: "#192A1C",
                                borderRadius: "8px",
                                marginBottom: "19px"
                            }}>Lorem ipsum</Typography>
                            <Typography sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "19px" }}>Lorem ipsum</Typography>
                            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium modi ipsum maxime sequi molestias dolor?</Typography>
                        </Box>
                    </Box>
                </Box>

                <PortfolioSection image={secondMain}
                    title="Lorem"
                    subtitle="Lorem Ipsum is simply dummy text"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                ></PortfolioSection>

                <Box>
                    <Typography sx={{ fontSize: "25px", fontWeight: "600", marginBottom: "50px" }}>Our Team</Typography>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            width: "300px",
                            height: "350px",
                            backgroundColor: "#1C140F",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>

                            <Box component="img" src={avatar1} sx={{
                                width: "106px",
                                height: "106px"
                            }}></Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>John peter</Typography>
                            <Typography sx={{ fontSize: "18px", fontWeight: "light" }}>COO</Typography>
                        </Box>

                        <Box sx={{
                            width: "300px",
                            height: "350px",
                            backgroundColor: "#1C140F",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>

                            <Box component="img" src={avatar2} sx={{
                                width: "106px",
                                height: "106px"
                            }}></Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>John peter</Typography>
                            <Typography sx={{ fontSize: "18px", fontWeight: "light" }}>COO</Typography>
                        </Box>
                        <Box sx={{
                            width: "300px",
                            height: "350px",
                            backgroundColor: "#1C140F",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>

                            <Box component="img" src={avatar3} sx={{
                                width: "106px",
                                height: "106px"
                            }}></Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>John peter</Typography>
                            <Typography sx={{ fontSize: "18px", fontWeight: "light" }}>COO</Typography>
                        </Box>
                        <Box sx={{
                            width: "300px",
                            height: "350px",
                            backgroundColor: "#1C140F",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>

                            <Box component="img" src={avatar4} sx={{
                                width: "106px",
                                height: "106px"
                            }}></Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>John peter</Typography>
                            <Typography sx={{ fontSize: "18px", fontWeight: "light" }}>COO</Typography>
                        </Box>
                    </Box>


                </Box>


            </Box>

        </Box>

        <Subscribe></Subscribe>
    </div>
}

export default About;