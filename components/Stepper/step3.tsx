import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { StartButton } from "../StyledComponents";
import copy from './images/copy.png'

export default function Step3({setSignUpModal}:{setSignUpModal:(state:boolean)=>void}) {
    return (
        <>
            <Box position={'relative'}>
                <Box left={'-72px'} position={'absolute'} display={'flex'} alignItems={'center'}>
                    <Typography color={'white'} marginRight={'10px'}>Step 3</Typography>
                    <Box width={'27px'} height={'27px'} borderRadius={50} sx={{ background: '#43E3E0' }} />
                </Box>
            </Box>
            <Box paddingLeft={'50px'}>
                <Box display={'grid'} gap={'11px'}>
                    <Typography color={'white'}>3. Get an account number</Typography>
                    <Typography color={'#43E3E0'} variant='body2'>Congrates! Here’s you account number</Typography>
                </Box>
                <Box marginBottom={'48px'} display={"flex"} gap={'53px'} flexWrap={'wrap'} maxWidth={'900px'}>
                    <Box sx={{ background: 'white' }} width={'746px'} height={'100px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography>gjksjgljg4654gsg6465sgkajfligjksjgljg4654gsg6465sgkajfli65sgkajf</Typography>
                        <Button style={{ background: '#45D5DF', width: '173px', height: '100px', color: 'white' }}>
                            <Image src={copy} width={'34px'} height={'34px'} />
                            copy
                        </Button>
                    </Box>
                    <Box
                        width='734px'
                        height='73px'
                        padding={'13px'}
                        borderLeft={'6px solid #C4B069'}
                        sx={{ background: '#F0F3DF' }}>
                        Don’t lose it! This is the only time they will you their MVDK and you have to save the key
                        otherwise you will lose the account details. No email, no username. Just anonymity.
                    </Box>
                    <StartButton width={411} height={54} onClick={()=>setSignUpModal(true)}>Sign in</StartButton>
                </Box>
            </Box>
        </>
    )
}