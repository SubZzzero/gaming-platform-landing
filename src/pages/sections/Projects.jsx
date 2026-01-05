import { Box, Typography, Button } from "@mui/material"
import proj1 from "../../assets/proj1.png"
import proj2 from "../../assets/proj2.png"
import proj3 from "../../assets/proj3.png"
import proj4 from "../../assets/proj4.png"
import proj5 from "../../assets/proj5.png"
import proj6 from "../../assets/proj6.png"

const Projects = () => {
    return <Box
        sx={{
            maxWidth: "1300px",
            width: "100%",
            padding: "0 15px",
            margin: "0 auto",
            position: "relative",
        }}
    >

        <Typography sx={{
            marginTop: "150px",
            marginBottom: "15px",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold"
        }}>Our Recent Projects</Typography>

        <Typography sx={{
            textAlign: "center",
            width: "700px",
            margin: "0 auto",
            fontSize: "14px",
            marginBottom: "70px"

        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus neque veritatis, itaque cupiditate maxime corrupti consectetur quo ipsam magni.</Typography>


        <Box sx={{
            display: "flex",
            alignItems: "center",

            flexWrap: "wrap",
            gap: "70px",
            marginBottom: "70px"
        }}>
            <img src={proj1} alt="proj1" />
            <img src={proj2} alt="proj2" />
            <img src={proj3} alt="proj3" />
            <img src={proj4} alt="proj4" />
            <img src={proj5} alt="proj5" />
            <img src={proj6} alt="proj6" />
        </Box>
        <Box sx={{ textAlign: "center", marginBottom: "110px" }}><Button variant="contained" size="large" sx={{
            backgroundColor: "#24201C"
        }}>SEE ALL</Button></Box>
    </Box >
}


export default Projects;