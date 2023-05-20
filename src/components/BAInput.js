import { Box, TextField } from "@mui/material"



export default function BAInput(props){

const {label,onChange,variant,width ,value,type} =props 

    return(

        <Box sx={{display:"flex"}}>

        <TextField label={label} variant={variant} value={value} onChange={onChange} type={type == "number"? type :null}  sx={{minWidth:`${width}px`}}/>
        </Box>
    
    )
}