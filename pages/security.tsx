import { Box } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/layouts/Layout";
import bigLock from '../assets/bigLock.png'
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import generator from '../assets/generator.png'
import securityFrame from '../assets/securityFrame.png'
import Footer from "../components/Footer";
import { StyledWhiteButton } from "../components/StyledComponents";
export default function Security() {
    const { t } = useTranslation('common');
    return (
        <>
            <Box width={'100%'} height={'550px'} sx={{ background: 'linear-gradient(109.89deg, #00457B 58.36%, rgba(32, 79, 156, 0.7) 102.72%)' }} position={'relative'}>
                <Layout>
                    <Box position={'relative'} width={'100%'} display={'flex'} justifyContent={'center'}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} position={'absolute'} top={60} width={'100%'}>
                            <Box>
                                <Typography variant={'h4'} color={'white'}>Our first mission is security!</Typography>
                                <Typography variant={'h6'} color={'white'} maxWidth={'485px'}>{t('text', { returnObjects: true })}</Typography>
                            </Box>
                            <Box>
                                <Image src={bigLock} />
                            </Box>
                        </Box>
                    </Box>
                </Layout>
                <Box
                    position={'absolute'}
                    bottom={-50}
                    sx={{ background: 'white', transform: 'skewY(3deg)' }}
                    width={'100%'}
                    height={'100px'}
                />

            </Box>
            <Grid position={'relative'} zIndex={20} container marginTop={'70px'} marginBottom={'70px'}>
                <Grid xs={6} >
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box maxWidth={500}>
                            <Typography variant="h4">MVDK (Master Verification and Decryption Key) </Typography>
                            <Typography variant="h6" marginTop={'14px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Image src={generator} />
                    </Box>
                </Grid>
                <Grid xs={6} marginTop={'150px'}>
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box maxWidth={500}>
                            <Typography variant="h4">MVDK (Master Verification and Decryption Key) </Typography>
                            <Typography variant="h6" marginTop={'14px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} marginTop={'150px'}>
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box maxWidth={500}>
                            <Typography variant="h4">MVDK (Master Verification and Decryption Key) </Typography>
                            <Typography variant="h6" marginTop={'14px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} marginTop={'150px'}>
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box maxWidth={500}>
                            <Typography variant="h4">MVDK (Master Verification and Decryption Key) </Typography>
                            <Typography variant="h6" marginTop={'14px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} position={'relative'}>
                    <Box position={'absolute'} zIndex={10} bottom={'-320px'}>
                        <Image src={securityFrame} />
                    </Box>
                </Grid>
            </Grid>
            <Box position={'relative'} paddingLeft={'171px'} paddingBottom={'127px'} paddingTop={'131px'} sx={{ background: '#3EC8C3' }}>
                <Box maxWidth={'450px'}>
                    <Typography variant={'h4'} color={'white'}>System Features and Requirements</Typography>
                    <Typography marginBottom={'56px'} variant={'h6'} color={'white'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                    <StyledWhiteButton>Get started</StyledWhiteButton>
                </Box>
                <Box padding={12} position={'absolute'} top={'-90px'} width={'100%'} left={0} sx={{ background: 'white', transform: 'skewY(5deg)' }} />
            </Box>
            <Footer />
        </>
    )
}


export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['header', 'common', 'security'])),
        },
    };
}