import { Box, Typography, TextField } from "@mui/material"




const News = () => {
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

                <TextField
                    placeholder="Search..."
                    variant="outlined"
                    sx={{
                        width: "400px",

                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "#2C2520",
                            color: "#fff",
                            borderRadius: "10px",

                            "& fieldset": {
                                borderColor: "#CECECE",
                                borderRadius: "10px",
                            },

                            "&:hover fieldset": {
                                borderColor: "#CECECE",
                            },

                            "&.Mui-focused fieldset": {
                                borderColor: "#CECECE",
                            },
                        },

                        "& input::placeholder": {
                            color: "#4F4F4F",
                            opacity: 1,
                        },
                    }}

                />
            </Box>



        </Box>




    </Box >
}



export default News;