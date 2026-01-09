import { Box, Typography } from "@mui/material";
import map from "../assets/map_contacts.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Subscribe from "../components/Subscribe";

const Contacts = () => {
    return <Box>


        <Box sx={{
            maxWidth: "1330px",
            width: "100%",
            padding: "0 15px",
            margin: "0 auto",
        }}>



            <Box sx={{ textAlign: "center", marginTop: "150px" }}>
                <Typography sx={{ fontSize: "33px", fontWeight: "600", marginBottom: "15px" }}>Lorem Ipsum is simply dummy text of the printing and.</Typography>
                <Typography sx={{ fontWeight: "medium", marginBottom: "90px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>


            <Box component={"img"} src={map} sx={{
                display: "block",
                margin: "0 auto 90px auto"
            }}></Box>


            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "145px"
            }}>

                <Box>
                    <Typography sx={{ marginBottom: "18px" }}>Follow us</Typography>

                    <Box sx={{ display: "flex", gap: "0 15px" }}>
                        <FacebookIcon></FacebookIcon>
                        <InstagramIcon></InstagramIcon>
                        <XIcon></XIcon>
                        <LinkedInIcon></LinkedInIcon>
                    </Box>
                </Box>
                <Box sx={{ width: "1px", height: "80px", backgroundColor: "#fff", opacity: 0.3 }} />

                <Box>
                    <Box sx={{ display: "flex", gap: "0 15px" }}>
                        <PhoneIcon></PhoneIcon>
                        <Typography>+94 4444 5555 6</Typography>
                    </Box>
                </Box>

                <Box sx={{ width: "1px", height: "80px", backgroundColor: "#fff", opacity: 0.3 }} />
                <Box>
                    <Box sx={{ display: "flex", gap: "0 15px" }}>
                        <LocationOnIcon></LocationOnIcon>
                        <Typography>but also the leap into electronic <br />
                            typesetting</Typography>
                    </Box>
                </Box>

            </Box>






        </Box>


        <Box sx={{
            backgroundColor: "#1C140F",
            minHeight: "900px",
            width: "100%",
            marginBottom: "145px",

        }}>


            <Typography sx={{ fontSize: "30px", paddingTop: "50px", textAlign: "center" }}>Say Hello</Typography>
            <Typography sx={{ textAlign: "center", marginBottom: "100px" }}>Lorem Ipsum is simply dummy text of the printing .</Typography>






        </Box>




        <Subscribe></Subscribe>

    </Box>
}

export default Contacts;