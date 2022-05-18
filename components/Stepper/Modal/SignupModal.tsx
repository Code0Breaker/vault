import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CustomInput, StartButton } from "../../StyledComponents";

export function SignupModal() {
    return (
        <Box height={'100%'} display={'flex'} flexDirection={'column'}>
            <Typography variant={'h5'}>Sign in</Typography>
            <Box marginTop={8} padding={'60px'} paddingBottom={'70px'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'40px'} width={'100%'}>
                <label>
                    <Typography>Acount Number</Typography>
                    <CustomInput placeholder="Type Account Number" type={'password'}/>
                </label>
                <StartButton width={167} height={40}>Sign in</StartButton>
                <Typography variant={'caption'}>Dont have an account? Sign up</Typography>
            </Box>
        </Box>
    )
}