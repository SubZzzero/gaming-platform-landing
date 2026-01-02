import { Box, Typography } from "@mui/material";
import spider from "../../assets/about.png";
import dots from "../../assets/dots-spider.png";

const About = () => {
    return (
        <Box
            sx={{
                maxWidth: "1160px",
                width: "100%",
                padding: "0 15px",
                margin: "0 auto 150px auto",
                position: "relative",
            }}
        >
            <Box
                component="img"
                src={dots}
                alt="dots"
                sx={{
                    position: "absolute",
                    left: "827px",
                    top: "363px",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />

            <Box sx={{ position: "relative", zIndex: 2 }}>
                <Box sx={{ width: "825px", margin: "0 auto 70px auto" }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 600,
                            textAlign: "center",
                            lineHeight: 1.85,
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        fontSize: "30px",
                        fontWeight: 600,
                        marginBottom: "30px",
                    }}
                >
                    Lorem ipsum dolor sit
                </Typography>

                <Box sx={{ width: "535px" }}>
                    <Typography sx={{ lineHeight: 1.85, marginBottom: "50px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eum qui,
                        modi doloribus dolore at tenetur fuga beatae, ducimus vero nemo quas
                        laborum iste necessitatibus pariatur ullam sunt iure sapiente.
                    </Typography>
                </Box>

                <Box
                    component="img"
                    src={spider}
                    alt="spiderman"
                    sx={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </Box>
        </Box>
    );
};

export default About;
