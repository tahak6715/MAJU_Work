import { Margin } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";




export default function BAButton(props){

const {label,disable,onClick,loading,variant ,size, mr,bgcolor} =props

    return(
<>

<Button variant={variant} onClick={onClick} size={size} sx={{marginRight:`${mr?mr:null}`,backgroundColor:bgcolor}}> 
{label}
</Button>

</>
    )
}