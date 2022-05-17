import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FbIcon, InstaIcon, TwitterIcon } from "../AllIcons";

export default function Footer({background = 'linear-gradient(0deg, #02447D 0%, rgba(2, 68, 125, 0.1) 0.01%, rgba(196, 196, 196, 0) 100%)',color = "#02447D"}:{background?:string, color?:string}) {
    return (
        <Box sx={{ background  }} display={'flex'} justifyContent={'center'} paddingTop={'176px'} paddingBottom={'78px'}>
             <Box display={'flex'} gap={'110px'}>
                  <Box>
                   <Typography color={color} sx={{ textDecoration: 'underline', textUnderlineOffset: '1em' }}>Vault3</Typography>
                    <Box marginTop={3}>
                        <Typography color={color}>Address: 20-22 Wenlock Road, London, England, N1 7GU</Typography>
                        <Typography color={color}>Email: inquiries@vault3.com </Typography>
                        <Typography color={color}>Phone: +45488 545646 </Typography>
                    </Box>
                </Box>  
                <Box>
                    <Typography color={color} sx={{ textDecoration: 'underline', textUnderlineOffset: '1em' }}>Company</Typography>
                    <Box marginTop={3}>
                        <Typography color={color}>Pricing</Typography>
                        <Typography color={color}>Security</Typography>
                        <Typography color={color}>Why us</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography color={color} sx={{ textDecoration: 'underline', textUnderlineOffset: '1em' }}>Contact us</Typography>
                    <Box marginTop={3}>
                        <Typography color={color}>Contact</Typography>
                        <Typography color={color}>About</Typography>
                        <Typography color={color}>Lorem Ipsum</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography color={color}>Follow Us</Typography>
                    <Box display={'flex'}>
                         <IconButton>
                            <FbIcon color={'white'}/>
                        </IconButton>
                        <IconButton>
                            <InstaIcon color={'white'}/>
                        </IconButton>
                        <IconButton>
                            <TwitterIcon color={'white'}/>
                        </IconButton> 
                    </Box>
                </Box>
            </Box> 
        </Box>
    )
}