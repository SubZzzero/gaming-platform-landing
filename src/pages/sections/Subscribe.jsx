import { Box, Typography, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

const Subscribe = () => {
    return (
        <Box
            sx={{
                maxWidth: "1300px",
                width: "100%",
                padding: "0 15px",
                margin: "0 auto",
            }}
        >

            <Typography variant="h5" fontWeight={600} sx={{ mb: "30px" }}>
                Lorem ipsum dolor
            </Typography>

            <Typography sx={{ mb: "75px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque iste
                tempora facere et eius esse minima minus voluptatem hic reprehenderit
                impedit modi, facilis sit?
            </Typography>


            <Box
                sx={{
                    height: "190px",
                    backgroundColor: "#1C140F",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "40px",
                    gap: "40px",
                }}
            >

                <Box sx={{ maxWidth: "520px" }}>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: "10px" }}>
                        Lorem ipsum dolor
                    </Typography>

                    <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
                        Subscribe to receive the latest news and updates about TDA.
                        We promise not to spam you!
                    </Typography>
                </Box>


                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        padding: "4px",
                        width: "420px",
                    }}
                >
                    <TextField
                        placeholder="Enter email address"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        sx={{
                            flex: 1,
                            ml: "12px",
                        }}
                    />

                    <NavLink to="/contacts" style={{ textDecoration: "none" }}>
                        <Typography
                            sx={{
                                backgroundColor: "#FA9021",
                                padding: "10px 25px",
                                borderRadius: "6px",
                                color: "white",
                                fontWeight: 500,
                                whiteSpace: "nowrap",
                                transition: "background-color 0.2s ease",
                                "&:hover": {
                                    backgroundColor: "#E87D0E",
                                },
                            }}
                        >
                            Continue
                        </Typography>
                    </NavLink>
                </Box>
            </Box>
        </Box>
    );
};

export default Subscribe;
