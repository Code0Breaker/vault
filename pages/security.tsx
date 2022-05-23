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
    const { t } = useTranslation('security');
    return (
        <>
            <Box width={'100%'} height={'550px'} sx={{ background: 'linear-gradient(109.89deg, #00457B 58.36%, rgba(32, 79, 156, 0.7) 102.72%)' }} position={'relative'}>
                <Layout>
                    <Box position={'relative'} width={'100%'} display={'flex'} justifyContent={'center'}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} position={'absolute'} top={60} width={'100%'}>
                            <Box>
                                <Typography variant={'h4'} color={'white'}>{t('title')}</Typography>
                                <Typography variant={'h6'} color={'white'} maxWidth={'485px'}>{t('description')}</Typography>
                            </Box>
                            <Box>
                                <Image  alt={'cloud'} src={bigLock}/>
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
                            <Typography variant="h4">{t('mainContent.1.title')}</Typography>
                            <Typography variant="h6" marginTop={'14px'}>{t('mainContent.1.description')}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Image  alt={'cloud'} src={generator} />
                    </Box>
                </Grid>
                <Grid xs={6} marginTop={'150px'}>
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box maxWidth={500}>
                            <Typography variant="h4">{t('mainContent.2.title')}</Typography>
                            <Typography variant="h6" marginTop={'14px'}>{t('mainContent.2.description')}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} marginTop={'150px'}>
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box maxWidth={500}>
                            <Typography variant="h4">{t('mainContent.3.title')}</Typography>
                            <Typography variant="h6" marginTop={'14px'}>{t('mainContent.3.description')}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} marginTop={'150px'}>
                    <Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box maxWidth={500}>
                            <Typography variant="h4">{t('mainContent.4.title')}</Typography>
                            <Typography variant="h6" marginTop={'14px'}>{t('mainContent.4.description')}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} position={'relative'}>
                    <Box position={'absolute'} zIndex={10} bottom={'-320px'}>
                        <Image  alt={'cloud'} src={securityFrame} />
                    </Box>
                </Grid>
            </Grid>
            <Box position={'relative'} paddingLeft={'171px'} paddingBottom={'127px'} paddingTop={'131px'} sx={{ background: '#3EC8C3' }}>
                <Box maxWidth={'450px'}>
                    <Typography variant={'h4'} color={'white'}>{t('requirements.title')}</Typography>
                    <Typography marginBottom={'56px'} variant={'h6'} color={'white'}>{t('requirements.description')}</Typography>
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
            ...(await serverSideTranslations(locale, ['header', 'security'])),
        },
    };
}