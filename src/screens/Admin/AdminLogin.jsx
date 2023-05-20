import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

// import { SignupUser } from "../Congif/FirebaseMethod";
// import DatePickers from "../Component/DatePicker";

// import dayjs from 'dayjs';


import { useNavigate } from "react-router-dom";
import BAInput from "../../components/BAInput";
import BAButton from "../../components/BAButton";
import { ResturantLogin } from "../../config/FirebaseMethod";
export default function ResturantLogins() {


    let navigation = useNavigate()
    const [model, setModel] = useState({
     
    })

    let SendFormData = () => {
    
        console.log(model)

        ResturantLogin( model)
            .then((res) => {
                console.log(res)
                navigation(`/EditDetail`,{
                    state:{obj:res},
                  });
            })
            .catch((err) => {
                console.log(err)
            })

    }

    console.log(model)

    return (

        <Box >

            <Box pb={5} sx={{ textAlign: "center" }}>

                <Typography variant="h3" component="h1">
                Login Resturant
                </Typography>
            </Box>

            <Grid container spacing={2} columns={16} >



 
                <Grid xl={8} sm={8} sx={{ display: "flex", justifyContent: "center" }}>

                    <BAInput width="400"
                        label="email" variant="filled" onChange={(e) => setModel({ ...model, email: e.target.value })} />

                </Grid>
                <Grid xl={8} sm={8} sx={{ display: "flex", justifyContent: "center" }}>

                    <BAInput width="400"
                        label="description" variant="filled" onChange={(e) => setModel({ ...model, description: e.target.value })} />

                </Grid>

                <Grid xl={8} sm={8} sx={{ display: "flex", justifyContent: "center" }}>

<BAInput width="400"
    label="password" variant="filled" onChange={(e) => setModel({ ...model,password : e.target.value })} />

</Grid>


   <Grid>
            <Box py={4} sx={{ display: "flex", justifyContent: "center" }}>

                <BAButton variant="outlined" label="Submit" size="large" onClick={() => SendFormData()} />
            </Box>


</Grid>
            </Grid>

        </Box>
    )
}