import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "../Slider";
import { StartButton, StyledInput } from "../StyledComponents";

export default function Step1() {
    return (
        <>
            <Box position={'relative'}>
                <Box left={'-72px'} position={'absolute'} display={'flex'} alignItems={'center'}>
                    <Typography color={'white'} marginRight={'10px'}>Step 1</Typography>
                    <Box width={'27px'} height={'27px'} borderRadius={50} sx={{ background: '#43E3E0' }} />
                </Box>
            </Box>
            <Box paddingLeft={'50px'}>
                <Box display={'grid'} gap={'30px'}>
                    <Typography color={'white'}>1. Please add your Account name/ Email </Typography>
                    <label>
                        <Typography color={'white'}>Account name</Typography>
                        <StyledInput />
                    </label>
                    <label>
                        <Typography color={'white'}>Email</Typography>
                        <StyledInput />
                        <Typography color={"#43E3E0"} variant={'body2'} maxWidth={'500px'}>If you wish to receive newsletters or hear about vault3 discounts and stratus updates feel free to add email to your account (This field is optional)</Typography>
                    </label>
                    <StartButton width={525} height={54}>Add</StartButton>
                </Box>
                <Box marginTop={'100px'} marginBottom={'45px'}>
                    <Typography color={'white'}>2. Select how much space you wish to purchase</Typography>
                    <Typography color={"#43E3E0"} variant={'body2'}>Please note each slider step is 5Gb</Typography>

                </Box>
                <Box marginBottom={'122px'}>

                    <Slider />
                </Box>
                <Box display={'grid'} gap={'40px'} paddingBottom={'106px'}>
                    <Box borderRadius={'5px'} padding={'5px'} width={'467px'} height={'100px'} display={'flex'} alignItems={'center'} sx={{ background: 'white' }}>
                        <Typography color={'#02447D'} variant={'h4'}>0,01 BTC</Typography>
                    </Box>
                    <StartButton width={411} height={54}>Accept</StartButton>
                </Box>
            </Box>
        </>
    )
}