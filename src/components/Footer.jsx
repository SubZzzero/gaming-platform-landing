import { Box, Typography, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            marginTop={"auto"}
            backgroundColor="black"
            padding="30px 0"
            sx={{ cursor: "default" }
            }>
            <Box
                width="80%"
                margin="0 auto"
                display="flex"

                justifyContent="space-between"
                flexWrap="wrap"
                gap="20px"
            >
                {/* LEFT */}
                <Box sx={{ maxWidth: "350px" }}>
                    <Typography color="white" fontWeight="bold" fontSize="24px" sx={{ marginBottom: "15px" }}>
                        LOGO
                    </Typography>
                    <Typography >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Typography >
                        @Logo
                    </Typography>
                </Box>

                {/* CENTER */}
                <Box>
                    <Typography color="white" fontWeight="bold" mb="15px">
                        About us
                    </Typography>
                    <Typography >
                        Zeux
                    </Typography>
                    <Typography >
                        Portfolio
                    </Typography>
                    <Typography >
                        Careers
                    </Typography>
                    <Typography >
                        Contact us
                    </Typography>
                </Box>

                {/* RIGHT */}
                <Box sx={{ maxWidth: "350px" }}>
                    <Typography color="white" fontWeight="bold" mb="10px">
                        CONTACT
                    </Typography>
                    <Typography sx={{ marginBottom: "15px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Typography >
                        Phone: +1 234 567 890
                    </Typography>
                </Box>



                <Box sx={{
                    display: "flex",
                    gap: "0 16px",
                    marginTop: "auto",
                }}>

                    <FacebookIcon></FacebookIcon>
                    <InstagramIcon></InstagramIcon>
                    <XIcon></XIcon>
                    <LinkedInIcon></LinkedInIcon>
                </Box>
            </Box>
            <Divider sx={{ borderColor: "white", width: "100%", marginTop: "50px" }}></Divider>
            {/* BOTTOM */}
            <Box mt="30px" textAlign="center">
                <Typography color="gray" fontSize="12px">
                    Copyright ® {new Date().getFullYear()} Lorem All rights Rcerved
                </Typography>
            </Box>
        </Box >
    );
};

export default Footer;