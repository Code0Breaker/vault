import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/layouts/Layout";
import cloud from '../assets/cloud.png'
import Image from "next/image";
import { useTranslation } from "next-i18next";
import MainLayout from "../components/layouts/MainLayout";
import hand from "../assets/hand.png";
import security from "../assets/security.png";
import questiosn from "../assets/questions.png";
import { HandIcon } from "../components/AllIcons";
import Footer from "../components/Footer";
import img1 from '../assets/coins/1.png'
import img2 from '../assets/coins/2.png'
import img3 from '../assets/coins/3.png'
import img4 from '../assets/coins/4.png'
import img5 from '../assets/coins/5.png'
import img6 from '../assets/coins/6.png'
import img7 from '../assets/coins/7.png'
import Slider from "../components/Slider";
import { StartButton } from "../components/StyledComponents";
interface TextI {
    text: string
}


export default function Pricing() {
    const { t } = useTranslation('pricing');
    const text: TextI[] = t('make_payments.types', { returnObjects: true })
    return (
        <>
            <Box height={'475px'} sx={{ background: 'linear-gradient(107.38deg, #00457B 60.53%, rgba(32, 79, 156, 0.7) 106.54%)' }}>
                <Layout>
                    <Box display={'flex'} justifyContent={'space-between'} height={'380px'} alignItems={'center'} position={'relative'}>
                        <Box maxWidth={'387px'}>
                            <Typography color={'white'} variant={'h4'} marginBottom={'14px'}>{t('title')}</Typography>
                            <Typography color={'white'} variant={'body1'}>{t('description')}</Typography>
                        </Box>
                        <Box position={'absolute'} right={'150px'} bottom={'-30px'}>
                            <Image  alt={'cloud'} src={cloud} />
                        </Box>
                    </Box>
                </Layout>
            </Box>
            <MainLayout>
                <Box marginTop={'43px'} maxWidth={'600px'}>
                    <Typography variant={'h4'} marginBottom={'17px'}>{t('main.title')}</Typography>
                    <Typography>{t('main.description')}</Typography>
                </Box>
                <Box paddingTop={'115px'}>
                    <Slider color="#02447D" />
                    <Box display={'flex'} justifyContent={'center'}>
                        <Box display={'grid'} gap={'40px'} marginTop={'125px'} paddingBottom={'106px'} justifyItems={'center'}>
                            <Box borderRadius={'5px'} padding={'5px'} width={'467px'} height={'115px'} display={'flex'} alignItems={'center'} sx={{ background: '#EEEEEE' }}>
                                <Typography color={'#02447D'} variant={'h4'}>0,01 BTC</Typography>
                            </Box>
                            <StartButton width={411} height={54}>Create account</StartButton>
                        </Box>
                    </Box>
                </Box>
            </MainLayout>
            <Box position={'relative'} paddingBottom={'127px'} paddingTop={'131px'} sx={{ background: '#3EC8C3' }} marginTop={'200px'}>
                <MainLayout>
                    <Box>
                        <Box maxWidth={'550px'}>
                            <Typography variant={'h4'} color={'white'}>{t('accepted_payments.title')}</Typography>
                            <Typography marginBottom={'56px'} color={'white'}>{t('accepted_payments.description')}</Typography>
                        </Box>
                        <Box position={'relative'}>
                            <Box display={'flex'} flexWrap={'wrap'} gap={'80px'} maxWidth={'650px'} justifyContent={'center'}>

                                <Box textAlign={'center'}>
                                    <Image  alt={'cloud'} src={img1} />
                                    <Typography variant={'body1'}>Terra</Typography>
                                    <Typography variant={'body1'}>(Luna)</Typography>
                                </Box>
                                <Box textAlign={'center'}>
                                    <Image  alt={'cloud'} src={img2} />
                                    <Typography variant={'body1'}>Bitcoin</Typography>
                                    <Typography variant={'body1'}> (BTC)</Typography>
                                </Box>
                                <Box textAlign={'center'}>
                                    <Image  alt={'cloud'} src={img3} />
                                    <Typography variant={'body1'}>Bitcoin cash</Typography>
                                    <Typography variant={'body1'}> (BCH)</Typography>
                                </Box>
                                <Box textAlign={'center'}>
                                    <Image  alt={'cloud'} src={img4} />
                                    <Typography variant={'body1'}>Ethereum</Typography>
                                    <Typography variant={'body1'}> (ETH)</Typography>
                                </Box>
                                <Box textAlign={'center'}>
                                    <Image  alt={'cloud'} src={img5} />
                                    <Typography variant={'body1'}>Polygon </Typography>
                                    <Typography variant={'body1'}>(Matic)</Typography>
                                </Box>
                                <Box textAlign={'center'}>
                                    <Image  alt={'cloud'} src={img6} />
                                    <Typography variant={'body1'}>Cardano</Typography>
                                    <Typography variant={'body1'}> (ADA)</Typography>
                                </Box>
                                <Box textAlign={'center'}>
                                    <Image  alt={'cloud'} src={img7} />
                                    <Typography variant={'body1'}>Tether</Typography>
                                    <Typography variant={'body1'}> (USDT)</Typography>
                                </Box>

                            </Box>
                            <Box position={'absolute'} right={0} bottom={'-350px'}>
                                <Image  alt={'cloud'} src={security} width={'900px'} height={'510px'} />
                            </Box>
                        </Box>
                    </Box>
                </MainLayout>
                <Box padding={12} position={'absolute'} top={'-90px'} width={'100%'} left={0} sx={{ background: 'white', transform: 'skewY(5deg)' }} />
            </Box>
            <MainLayout>
                <Box marginTop={30}>
                    <Typography variant={'h4'}>{t('make_payments.title')}</Typography>
                    <Typography>{t('make_payments.description')}</Typography>
                </Box>
                <Grid container>
                    {
                        text.map((item: TextI, i: number) => {
                            return (
                                <Grid item xs={i === 2 ? 12 : 6} key={i} display={'flex'} justifyContent={'center'} marginTop={6} alignItems={'flex-start'}>
                                    <Image  alt={'cloud'} src={hand} width={'50px'} height={'50px'} />
                                    <Box display={'flex'} maxWidth={'500px'} alignItems={'flex-start'}>
                                        <Typography>{item.text}</Typography>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Box marginTop={'150px'}>
                    <Box display={'flex'} alignItems={'center'}>
                        <Image  alt={'cloud'} src={questiosn} width={'70px'} height={'70px'} />
                        <Typography variant={'h4'} marginLeft={'20px'}>{t('questions.title')}</Typography>
                    </Box>
                    <Typography maxWidth={'600px'} marginTop={'50px'}>{t('questions.description')}</Typography>
                </Box>
            </MainLayout>
            <Footer />
        </>
    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['header', 'pricing'])),
        },
    };
}