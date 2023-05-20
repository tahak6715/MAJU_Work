import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";


export default function BASelect(props){



const{variant,label,value,width,onChange,SelItem,className} = props



    let  id = `demo-simple-select-${variant}-label`
    let selId= `demo-simple-select-${variant}`
    return(
        <Box>



  <FormControl variant={variant} sx={{ m: 1, minWidth:`${width}px` }}>
        <InputLabel id={id}>{label}</InputLabel>
  
        <Select
          labelId={id}
          id={selId}
          className={className}
          value={SelItem}
          onChange={onChange}
 >
{

value.map((item,index) => (


    <MenuItem
    key={index}
    value={item}
    
>
  {item}
</MenuItem>
  )
)
}
        </Select>
      </FormControl>

        </Box>
    )
}