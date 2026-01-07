import { Box, Typography, Button } from "@mui/material";

const PortfolioSection = ({
    image,
    reverse = false,
    title,
    subtitle,
    description,
    buttonText,
    onButtonClick,
}) => {
    return (
        <Box
            sx={{
                backgroundColor: "#1C140F",
                height: "600px",
                width: "100%",
                display: "flex",
                flexDirection: reverse ? "row-reverse" : "row", // 🔥 КЛЮЧЕВО
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
                marginBottom: "150px",
            }}
        >
            {/* IMAGE */}
            <Box
                component="img"
                src={image}
                alt="portfolio"
                sx={{ maxWidth: "500px" }}
            />

            {/* TEXT */}
            <Box sx={{ maxWidth: "500px" }}>
                <Typography sx={{ fontWeight: "500", mb: "15px" }}>
                    {title}
                </Typography>

                <Typography sx={{ fontSize: "28px", fontWeight: "600", mb: "15px" }}>
                    {subtitle}
                </Typography>

                <Typography sx={{ mb: "25px" }}>
                    {description}
                </Typography>

                {buttonText && (
                    <Button variant="contained" onClick={onButtonClick} sx={{ backgroundColor: "#DC7000" }}>
                        {buttonText}
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default PortfolioSection;
