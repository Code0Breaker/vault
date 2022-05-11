import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { StartButton } from "../StyledComponents";
import security from '../../assets/security.png'
export default function Design(){
    return(
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Box width={'75%'} marginBottom={'112px'}>
            <Typography variant={"h4"}>Security Meets Modern Design</Typography>
            <Typography variant={"body2"}>You can customize  theme colors, or sizes of the icons.</Typography>
          </Box>
          <Image src={security} />
          <Typography color={'#01457C'} marginBottom={'15px'} marginTop={'110px'} variant={'body1'}>Lorem Ipsum has been the industry's standard dummy</Typography>
          <StartButton color1="#43E3E0" color2="#49BDDD">Create Account</StartButton>
        </Box>
    )
}