import { Button, Divider, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Footer from "../../components/Footer";
import Layout from "../../components/layouts/Layout";
import VerticalStepper from "../../components/Stepper";
import { StartButton, StyledInput } from "../../components/StyledComponents";
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
import copy from './images/copy.png'
const marks = [
    {
        value: 0,
        label: '25GB',
    },
    {
        value: 10,
        label: '200GB',
    },
    {
        value: 20,
        label: '400GB',
    },
    {
        value: 30,
        label: '600GB',
    },
    {
        value: 40,
        label: '800GB',
    },
    {
        value: 50,
        label: '1000GB',
    },
    {
        value: 60,
        label: '1200GB',
    },
    {
        value: 70,
        label: '1400GB',
    },
    {
        value: 80,
        label: '1600GB',
    },
    {
        value: 90,
        label: '1800GB',
    },
    {
        value: 100,
        label: '2TB',
    },
];
const images = [
    { img: img1, title: 'bitcoin' },
    { img: img2, title: 'bitcoin' },
    { img: img3, title: 'bitcoin' },
    { img: img4, title: 'bitcoin' },
    { img: img5, title: 'bitcoin' },
    { img: img6, title: 'bitcoin' },
    { img: img7, title: 'bitcoin' }
]
function valuetext(value:number) {
    console.log(value);

    return `${value}°C`;
}

function valueLabelFormat(value:number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
}
export default function SignUp() {
    return (
        <Box sx={{ background: 'linear-gradient(107.38deg, #00457B 60.53%, rgba(32, 79, 156, 0.7) 106.54%)' }}>
            <Layout>
                <Box marginTop={'135px'} paddingBottom={'137px'}>
                    <Typography variant="h4" color={'white'}>Get started with Vault3</Typography>
                    <Box marginTop={'120px'} marginLeft={8} borderLeft={'5px solid #43E3E0'} position={'relative'}>
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
                                <Slider
                                    // classes={{"MuiSlider-thumb"}}
                                    defaultValue={0}
                                    valueLabelFormat={valueLabelFormat}
                                    getAriaValueText={valuetext}
                                    step={null}
                                    valueLabelDisplay="off"
                                    marks={marks}
                                />
                            </Box>
                            <Box display={'grid'} gap={'40px'} paddingBottom={'106px'}>
                                <Box borderRadius={'5px'} padding={'5px'} width={'467px'} height={'100px'} display={'flex'} alignItems={'center'} sx={{ background: 'white' }}>
                                    <Typography color={'#02447D'} variant={'h4'}>0,01 BTC</Typography>
                                </Box>
                                <StartButton width={411} height={54}>Accept</StartButton>
                            </Box>
                        </Box>
                        <Box position={'relative'}>
                            <Box left={'-72px'} position={'absolute'} display={'flex'} alignItems={'center'}>
                                <Typography color={'white'} marginRight={'10px'}>Step 2</Typography>
                                <Box width={'27px'} height={'27px'} borderRadius={50} sx={{ background: '#43E3E0' }} />
                            </Box>
                        </Box>
                        <Box paddingLeft={'50px'} paddingBottom={'115px'}>
                            <Box display={'grid'} gap={'30px'}>
                                <Typography color={'white'}>3. Make Payment</Typography>
                            </Box>
                            <Box marginBottom={'48px'} display={"flex"} gap={'53px'} flexWrap={'wrap'} maxWidth={'900px'}>
                                {
                                    images.map((item, i) => {
                                        return (
                                            <Box key={i} onClick={() => console.log(item.title)} sx={{ cursor: 'pointer' }}>
                                                <Image src={item.img} width={'166px'} height={'166px'} />
                                            </Box>
                                        )
                                    })
                                }

                            </Box>
                            <StartButton width={411} height={54}>Pay</StartButton>
                        </Box>


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
                                <StartButton width={411} height={54}>Sign in</StartButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Layout>
            <Footer color={'white'} />
        </Box>

    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['header', 'common', 'security'])),
        },
    };
}