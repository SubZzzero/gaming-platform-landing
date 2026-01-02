import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


const Header = () => {

    const linkStyle = ({ isActive }) => ({
        color: "white",
        textDecoration: "none",
        borderBottom: isActive ? "2px solid #DC7000" : "none",
        paddingBottom: "4px",

    })

    return <>

        <Box sx={{
            maxWidth: "1330px",
            width: "100%",
            margin: "0 auto",
            padding: "15px"
        }}>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                {/* LOGO */}
                <Box sx={{ fontWeight: 600, fontSize: "29px" }}>
                    LOGO
                </Box>

                {/* Navigation */}
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0 80px"
                }}>
                    <NavLink to="/" style={linkStyle}>Home</NavLink>
                    <NavLink to="/about" style={linkStyle}>About us</NavLink>
                    <NavLink to="/portfolio" style={linkStyle}>Portfolio</NavLink>
                    <NavLink to="/news" style={linkStyle}>News</NavLink>
                    <NavLink to="/contacts" style={{ textDecoration: "none", color: "white" }}>
                        <Typography sx={{
                            backgroundColor: "#FA9021",
                            padding: "10px 25px",
                            borderRadius: "6px",
                            transition: "background-color 0.2s ease",

                            "&:hover": {
                                backgroundColor: "#E87D0E",
                            },
                        }}>Contact Us</Typography>
                    </NavLink>
                </Box>
            </Box>
        </Box>

    </>
}


export default Header;