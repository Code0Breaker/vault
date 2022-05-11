import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Layout from "../components/layouts/Layout";
import security from '../assets/security.png'
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AcceptIcon, CardProtectionIcon, LockIcon, ShieldIcon } from "../components/AllIcons";
import Footer from "../components/Footer";
import { useTranslation } from "next-i18next";
export default function WhyUs() {
    const { t } = useTranslation('common');

    return (
        <>
            <Box height={'480px'} paddingBottom={'84px'} sx={{ background: ' linear-gradient(107.38deg, #00457B 60.53%, rgba(32, 79, 156, 0.7) 106.54%)' }}>
                <Layout>
                    <Box paddingLeft={'20px'} position={'relative'} height={'100%'}>
                        <Box maxWidth={'390px'} position={'absolute'} top={'100px'}>
                            <Typography lineHeight={2} variant={'h3'} color={'white'}>Why Vault3?</Typography>
                            <Typography color={'white'}>{t('mainText.description', { returnObjects: true })}</Typography>
                        </Box>
                    </Box>
                </Layout>
                <Box position={'absolute'} right={200} top={240}>
                    <Image src={security} width={'854px'} height={'495px'} objectFit={'cover'} />
                </Box>
            </Box>
            <Box padding={'170px'}>
                <Typography color={'#01457C'} maxWidth={575} variant={'h4'}>{t('mainText.description', { returnObjects: true })}</Typography>
                <Typography color={'#01457C'} maxWidth={800} variant={'h6'} marginTop={3}>{t('mainText.description', { returnObjects: true })}</Typography>
            </Box>
            <Box marginTop={'153px'} display={'flex'} justifyContent={'center'} gap={'56px'}>
                <Box paddingTop={'67px'} paddingLeft={'15px'} position={'relative'} width={'470px'} height={'285px'} border={'1px solid #02447D'} borderRadius={'8px'}>
                    <Box position={'absolute'} top={'-28px'} left={'40px'}>
                        <ShieldIcon />
                    </Box>
                    <Typography marginBottom={'21px'}>Lorem Ipsum is simply </Typography>
                    <Typography>{t('mainText.description', { returnObjects: true })}</Typography>
                </Box>

                <Box paddingTop={'67px'} paddingLeft={'15px'} position={'relative'} width={'470px'} height={'285px'} border={'1px solid #02447D'} borderRadius={'8px'}>
                    <Box position={'absolute'} top={'-45px'} left={'40px'}>
                        <LockIcon />
                    </Box>
                    <Typography marginBottom={'21px'}>Lorem Ipsum is simply </Typography>
                    <Typography>{t('mainText.description', { returnObjects: true })}</Typography>
                </Box>

                <Box paddingTop={'67px'} paddingLeft={'15px'} position={'relative'} width={'470px'} height={'285px'} border={'1px solid #02447D'} borderRadius={'8px'}>
                    <Box position={'absolute'} top={'-32px'} left={'40px'}>
                        <CardProtectionIcon />
                    </Box>
                    <Typography marginBottom={'21px'}>Lorem Ipsum is simply </Typography>
                    <Typography>{t('mainText.description', { returnObjects: true })}</Typography>
                </Box>
            </Box>
            <Box marginTop={'150px'}>
                <Typography variant={'h4'} width={'570px'} marginBottom={'84px'} marginLeft={'166px'}>{t('mainText.description', { returnObjects: true })}</Typography>
                <Box marginTop={'84'} display={'flex'} justifyContent={'center'} gap={'58px'}>
                    <Box textAlign={'center'} >
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography marginBottom={'70px'}>Lorem, ipsum.</Typography>
                        <AcceptIcon />
                    </Box>
                </Box>
            </Box>
            <Footer background={'white'} />
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