import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
    const trigger = useScrollTrigger({
        threshold: 700,
        disableHysteresis: true,
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Zoom in={trigger}>
            <Fab
                onClick={handleClick}
                size="small"
                sx={{
                    position: "fixed",
                    bottom: 104,
                    right: 50,
                    backgroundColor: "#DC7000",
                    color: "#fff",
                    zIndex: 9999,
                    "&:hover": {
                        backgroundColor: "#E87D0E",
                    },
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTopButton;
