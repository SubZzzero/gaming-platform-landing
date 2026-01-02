import { Box, Typography, Button } from "@mui/material"
import Trending1 from "../../assets/trending1.png"
import Trending2 from "../../assets/trending2.png"
import Trending3 from "../../assets/trending3.png"
import Trending4 from "../../assets/trending4.png"
import WhatshotIcon from '@mui/icons-material/Whatshot';



const TrendingGames = () => {
    return (
        <Box sx={{
            maxWidth: "1160px",
            width: "100%",
            padding: "0 15px",
            margin: "175px auto 125px auto",

        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "55px"
            }}>
                <Typography variant="h2"
                    sx={{
                        fontFamily: "'Rubik', sans-serif",
                        fontWeight: 700,
                        fontSize: "31px",
                    }}>Currently Trending Games</Typography>


                <Box><Button variant="contained" size="large" sx={{
                    backgroundColor: "#24201C"
                }}>SEE ALL</Button></Box>
            </Box>


            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>

                <Box >
                    <img src={Trending1} alt="trending1" style={{
                        marginBottom: "25px"
                    }} />

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                    }}>
                        <WhatshotIcon></WhatshotIcon>
                        <Typography sx={{
                            fontFamily: "'Rubik', sans-serif",
                            fontSize: "22px",
                            fontWeight: "500"
                        }}>40 Followers</Typography>
                    </Box>

                </Box>

                <Box >
                    <img src={Trending2} alt="trending2" style={{
                        marginBottom: "25px"
                    }} />

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                    }}>
                        <WhatshotIcon></WhatshotIcon>
                        <Typography sx={{
                            fontFamily: "'Rubik', sans-serif",
                            fontSize: "22px",
                            fontWeight: "500"
                        }}>40 Followers</Typography>
                    </Box>

                </Box>

                <Box >
                    <img src={Trending3} alt="trending3" style={{
                        marginBottom: "25px"
                    }} />

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                    }}>
                        <WhatshotIcon></WhatshotIcon>
                        <Typography sx={{
                            fontFamily: "'Rubik', sans-serif",
                            fontSize: "22px",
                            fontWeight: "500"
                        }}>40 Followers</Typography>
                    </Box>

                </Box>

                <Box >
                    <img src={Trending4} alt="trending4" style={{
                        marginBottom: "25px"
                    }} />

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                    }}>
                        <WhatshotIcon></WhatshotIcon>
                        <Typography sx={{
                            fontFamily: "'Rubik', sans-serif",
                            fontSize: "22px",
                            fontWeight: "500"
                        }}>40 Followers</Typography>
                    </Box>

                </Box>

            </Box>


        </Box>
    )
}


export default TrendingGames;