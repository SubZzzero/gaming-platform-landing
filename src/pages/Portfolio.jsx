import { Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorageIcon from '@mui/icons-material/Storage';
import PortfolioSection from "./sections/PortfolioSection";
import aboutMain from "../assets/about_main_img.png"
import secondMain from "../assets/about_second.png"
import crysis from "../assets/cr1.png"
import Subscribe from "../components/Subscribe";
const Portfolio = () => {
    return (
        <Box sx={{
            maxWidth: "1330px",
            width: "100%",
            padding: "0 15px",
            margin: "0 auto",
        }}>



            <Box sx={{ textAlign: "center", marginTop: "150px" }}>
                <Typography sx={{ fontSize: "33px", fontWeight: "600", marginBottom: "15px" }}>Lorem Ipsum is simply dummy text of the printing and.</Typography>
                <Typography sx={{ fontWeight: "medium", marginBottom: "45px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>

            <Box
                sx={{
                    backgroundColor: "#1C140F",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "145px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                    }}
                >

                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>

                        <AccountCircleIcon sx={{ fontSize: "55px" }} />

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                                90+
                            </Typography>
                            <Typography fontSize="20px">Clients</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: "1px", height: "80px", backgroundColor: "#fff", opacity: 0.3 }} />
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <LocationOnIcon sx={{ fontSize: "55px" }} />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                                90+
                            </Typography>
                            <Typography fontSize="20px">Clients</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: "1px", height: "80px", backgroundColor: "#fff", opacity: 0.3 }} />
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <StorageIcon sx={{ fontSize: "55px" }} />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                                90+
                            </Typography>
                            <Typography fontSize="20px">Clients</Typography>
                        </Box>
                    </Box>

                </Box>

            </Box>

            <PortfolioSection
                image={aboutMain}
                reverse="true"
                title="Lorem"
                buttonText="Read More"
                subtitle="Lorem Ipsum is simply dummy text"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            ></PortfolioSection>

            <PortfolioSection
                image={secondMain}
                title="Lorem"
                buttonText="Read More"
                subtitle="Lorem Ipsum is simply dummy text"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            ></PortfolioSection>

            <PortfolioSection
                image={crysis}
                title="Lorem"
                reverse="true"
                buttonText="Read More"
                subtitle="Lorem Ipsum is simply dummy text"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            ></PortfolioSection>

            <Subscribe></Subscribe>
        </Box >


    )
}



export default Portfolio;