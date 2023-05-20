import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

// import { SignupUser } from "../Congif/FirebaseMethod";
// import DatePickers from "../Component/DatePicker";

// import dayjs from 'dayjs';


import BAInput from "../../components/BAInput";
import BASelect from "../../components/BASelect";
import BAButton from "../../components/BAButton";
import { ResturantSignup } from "../../config/FirebaseMethod";

export default function Resturant() {



    const [model, setModel] = useState({
     
    })

    let SendFormData = () => {
    
        console.log(model)

        ResturantSignup( model)
            .then((res) => {
                console.log(res)
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
                Create Resturant
                </Typography>
            </Box>

            <Grid container spacing={2} columns={16} >



            <Grid xl={8} sm={8} sx={{ display: "flex", justifyContent: "center" }}>

<BAInput width="400"
    label="Name " variant="filled" onChange={(e) => setModel({ ...model, Name: e.target.value })} />

</Grid>
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


                <Grid xl={8} sm={8} sx={{ display: "flex", justifyContent: "center" }}>

                    <BAInput width="400"
                        label="Resturant Name " variant="filled" onChange={(e) => setModel({ ...model, ResturantName: e.target.value })} />

                </Grid>

                <Grid xl={8} sm={8} sx={{ display: "flex", justifyContent: "center" }}>

                    <BAInput width="400" label="Resturant Logo" variant="filled" onChange={(e) => setModel({ ...model, ResturantLogo: e.target.value })} />

                </Grid>

                <Grid xl={2} sm={2} mt={3} sx={{ display: "flex", justifyContent: "center" }}>

                <BASelect variant="filled" label="Opening Hours" value={["0","1","2","3","4","5","6","7","8","9","10","11","12"]} width="100" onChange={(e) => setModel({ ...model, OpeningHours: e.target.value })} SelItem={model.OpeningHours} />

                </Grid>

                <Grid xl={2} sm={2} mt={3} sx={{ display: "flex", justifyContent: "center" }}>

                <BASelect variant="filled" label="Opening Minute" value={["00","05","10","15","20","25","30","35","40","45","50","55","60"]} width="100" onChange={(e) => setModel({ ...model, OpeningMinute: e.target.value })} SelItem={model.OpeningMinute} />

</Grid>
<Grid xl={2} sm={2} mt={3} sx={{ display: "flex", justifyContent: "center" }}>

<BASelect variant="filled" label="AM/PM" value={["AM","PM"]} width="100" onChange={(e) => setModel({ ...model, AMPMOPENING: e.target.value })} SelItem={model.AMPMOPENING} />

</Grid>

<Grid xl={2} sm={2} mt={3} sx={{ display: "flex", justifyContent: "center" }}>

<BASelect variant="filled" label="Closing Hours" value={["0","1","2","3","4","5","6","7","8","9","10","11","12"]} width="100" onChange={(e) => setModel({ ...model, ClosingHours: e.target.value })} SelItem={model.ClosingHours} />

</Grid>

<Grid xl={2} sm={2} mt={3} sx={{ display: "flex", justifyContent: "center" }}>

<BASelect variant="filled" label="Closing Minute" value={["00","05","10","15","20","25","30","35","40","45","50","55","60"]} width="100" onChange={(e) => setModel({ ...model, ClosingMinute: e.target.value })} SelItem={model.ClosingMinute} />

</Grid>
<Grid xl={2} sm={2} mt={3} sx={{ display: "flex", justifyContent: "center" }}>

<BASelect variant="filled" label="AM/PM" value={["AM","PM"]} width="100" onChange={(e) => setModel({ ...model, AMPMCLOSING: e.target.value })} SelItem={model.AMPMCLOSING} />

</Grid>



<Grid xl={2} sm={2} mt={3} sx={{ display: "flex", justifyContent: "center" }}>

<BASelect variant="filled" label="Starting Day" value={["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]} width="100" onChange={(e) => setModel({ ...model, StartDay: e.target.value })} SelItem={model.StartDay} />

</Grid>



<Grid xl={2} sm={2} mt={3} sx={{ display: "flex", justifyContent: "center" }}>

<BASelect variant="filled" label="End Day" value={["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]} width="100" onChange={(e) => setModel({ ...model, EndDay: e.target.value })} SelItem={model.EndDay} />

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