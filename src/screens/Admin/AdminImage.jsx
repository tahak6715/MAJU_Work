import { useLocation } from "react-router-dom";
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

// import { SignupUser } from "../Congif/FirebaseMethod";
// import DatePickers from "../Component/DatePicker";

// import dayjs from 'dayjs';


import BAButton from "../../Component/BAButton";
import BAInput from "../../Component/BAInput";
import { PostImages } from "../../config/FirebaseMethod";
export default function EditDetail(){


    const { state } = useLocation();
    const { obj } = state
    
    console.log(obj)
    const [model, setModel] = useState({
     
    })

let SendFormData = ()=>{
    PostImages(obj,model)
    .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    return(
        
        <Box>
     <Box >

<Box pb={5} sx={{ textAlign: "center" }}>

    <Typography variant="h3" component="h1">
    Login Resturant
    </Typography>
</Box>

<Grid container spacing={2} columns={16} >




    <Grid xl={8} sm={8} sx={{ display: "flex", justifyContent: "center" }}>

        <BAInput width="400"
            label="Image Name" variant="filled" onChange={(e) => setModel({ ...model, ImagesName: e.target.value })} />

    </Grid>

    <Grid xl={8} sm={8} sx={{ display: "flex", justifyContent: "center" }}>

<BAInput width="400"
label="Image Url" variant="filled" onChange={(e) => setModel({ ...model,ImageUrl : e.target.value })} />

</Grid>


<Grid>
<Box py={4} sx={{ display: "flex", justifyContent: "center" }}>

    <BAButton variant="outlined" label="Submit" size="large" onClick={() => SendFormData()} />
</Box>


</Grid>
</Grid>

</Box>
</Box>

    )
}