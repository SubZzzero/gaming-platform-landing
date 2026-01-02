import { Box, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import processBg from "../../assets/process_bg.png"
import mobile from "../../assets/phone.png"
import pc from "../../assets/pc.png"
import ps4 from "../../assets/ps4.png"
import vr from "../../assets/vr.png"
import arVr from "../../assets/ar_vr.png"
import modeling from "../../assets/3dmodeling.png"

const Process = () => {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundImage: `url(${processBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                paddingBottom: "120px",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1050px",
                    margin: "0 auto",

                }}
            >
                <Typography
                    sx={{
                        maxWidth: "760px",
                        fontSize: "30px",
                        fontWeight: 700,
                        lineHeight: 1.8,
                        padding: "170px 0 25px 0",
                        margin: "0 auto",
                        textAlign: "center"
                    }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>

                <Typography sx={{ textAlign: "center", paddingBottom: "100px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus enim eum cum saepe perspiciatis itaque, cupiditate natus mollitia doloremque explicabo adipisci odit voluptate amet voluptatem est neque sed laborum libero!</Typography>


                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexWrap: "wrap"
                }}>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "250px"
                    }}>
                        <Box component={"img"} alt="mobile" src={mobile} sx={{ marginBottom: "30px" }}></Box>
                        <Typography sx={{ marginBottom: "30px" }}>Mobile Game Development</Typography>
                        <ArrowForwardIcon sx={{ color: "#DC7000" }}></ArrowForwardIcon>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "250px"
                    }}>
                        <Box component={"img"} alt="pc" src={pc} sx={{ marginBottom: "30px" }}></Box>
                        <Typography sx={{ marginBottom: "30px" }}>PC Game Development</Typography>
                        <ArrowForwardIcon sx={{ color: "#DC7000" }}></ArrowForwardIcon>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "250px"
                    }}>
                        <Box component={"img"} alt="ps4" src={ps4} sx={{ marginBottom: "30px" }}></Box>
                        <Typography sx={{ marginBottom: "30px" }}>PS4 Game Development</Typography>
                        <ArrowForwardIcon sx={{ color: "#DC7000" }}></ArrowForwardIcon>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "250px"
                    }}>
                        <Box component={"img"} alt="vr" src={vr} sx={{ marginBottom: "30px" }}></Box>
                        <Typography sx={{ marginBottom: "30px" }}>AR/VR Solutions</Typography>
                        <ArrowForwardIcon sx={{ color: "#DC7000" }}></ArrowForwardIcon>
                    </Box>



                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0 150px", margin: "65px 0 85px 0" }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Box component={"img"} alt="ar_vr" src={arVr} sx={{ marginBottom: "30px" }}></Box>
                        <Typography sx={{ marginBottom: "30px" }}>AR/VR Design</Typography>
                        <ArrowForwardIcon sx={{ color: "#DC7000" }}></ArrowForwardIcon>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Box component={"img"} alt="ar_vr" src={modeling} sx={{ marginBottom: "30px" }}></Box>
                        <Typography sx={{ marginBottom: "30px" }}>3D Modelings</Typography>
                        <ArrowForwardIcon sx={{ color: "#DC7000" }}></ArrowForwardIcon>
                    </Box>
                </Box>
            </Box>


        </Box>
    );
};

export default Process;