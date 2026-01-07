import { Box, Typography, Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
const PortfolioSection = ({
    image,
    reverse = false,
    title,
    subtitle,
    description,
    buttonText,
    onButtonClick,
    features = [],
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

                {features.length > 0 && (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", mb: "25px" }}>
                        {features.map((text, index) => (
                            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <CheckIcon sx={{ color: "#58ef47ff", fontSize: 20 }} />
                                <Typography>{text}</Typography>
                            </Box>
                        ))}
                    </Box>
                )}

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
