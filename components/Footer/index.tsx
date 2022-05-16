import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FbIcon, InstaIcon, TwitterIcon } from "../AllIcons";

export default function Footer({background = 'linear-gradient(0deg, #02447D 0%, rgba(2, 68, 125, 0.1) 0.01%, rgba(196, 196, 196, 0) 100%)'}:{background?:string}) {
    return (
        <Box sx={{ background  }} display={'flex'} justifyContent={'center'} paddingTop={'176px'} paddingBottom={'78px'}>
             <Box display={'flex'} gap={'110px'}>
                  <Box>
                   <Typography color={"#02447D"} sx={{ textDecoration: 'underline', textUnderlineOffset: '1em' }}>Vault3</Typography>
                    <Box marginTop={3}>
                        <Typography color={"#02447D"}>Address: 20-22 Wenlock Road, London, England, N1 7GU</Typography>
                        <Typography color={"#02447D"}>Email: inquiries@vault3.com </Typography>
                        <Typography color={"#02447D"}>Phone: +45488 545646 </Typography>
                    </Box>
                </Box>  
                <Box>
                    <Typography color={"#02447D"} sx={{ textDecoration: 'underline', textUnderlineOffset: '1em' }}>Company</Typography>
                    <Box marginTop={3}>
                        <Typography color={"#02447D"}>Pricing</Typography>
                        <Typography color={"#02447D"}>Security</Typography>
                        <Typography color={"#02447D"}>Why us</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography color={"#02447D"} sx={{ textDecoration: 'underline', textUnderlineOffset: '1em' }}>Contact us</Typography>
                    <Box marginTop={3}>
                        <Typography color={"#02447D"}>Contact</Typography>
                        <Typography color={"#02447D"}>About</Typography>
                        <Typography color={"#02447D"}>Lorem Ipsum</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography color={"#02447D"}>Follow Us</Typography>
                    <Box display={'flex'}>
                         <IconButton>
                            <FbIcon />
                        </IconButton>
                        <IconButton>
                            <InstaIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton> 
                    </Box>
                </Box>
            </Box> 
        </Box>
    )
}