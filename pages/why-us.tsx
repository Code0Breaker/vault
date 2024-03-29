import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Layout from "../components/layouts/Layout";
import security from '../assets/security.png'
import accept from '../assets/accept.png'
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AcceptIcon, CardProtectionIcon, LockIcon, ShieldIcon } from "../components/AllIcons";
import Footer from "../components/Footer";
import { useTranslation } from "next-i18next";


interface TextI {
    title: string
    description: string
}

export default function WhyUs() {
    const { t } = useTranslation('whyus');
    const text: TextI[] = t('apart', { returnObjects: true })
    return (
        <>
            <Box height={'480px'} paddingBottom={'84px'} sx={{ background: ' linear-gradient(107.38deg, #00457B 60.53%, rgba(32, 79, 156, 0.7) 106.54%)' }}>
                <Layout>
                    <Box paddingLeft={'20px'} position={'relative'} height={'100%'}>
                        <Box maxWidth={'390px'} position={'absolute'} top={'100px'}>
                            <Typography lineHeight={2} variant={'h3'} color={'white'}>{t('title')}</Typography>
                            <Typography color={'white'}>{t('description')}</Typography>
                        </Box>
                    </Box>
                </Layout>
                <Box position={'absolute'} right={200} top={240}>
                    <Image alt={'security'} src={security} width={'854px'} height={'495px'} objectFit={'cover'} />
                </Box>
            </Box>
            <Box padding={'170px'}>
                <Typography color={'#01457C'} maxWidth={575} variant={'h4'}>{t('safety.title', { returnObjects: true })}</Typography>
                <Typography color={'#01457C'} maxWidth={700} variant={'h6'} marginTop={3}>{t('safety.description', { returnObjects: true })}</Typography>
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
                <Typography variant={'h4'} width={'570px'} marginBottom={'84px'} marginLeft={'166px'}>{t('apart_title', { returnObjects: true })}</Typography>
                <Box marginTop={'84'} display={'flex'} justifyContent={'center'} gap={'58px'}>
                    {
                        text.map((item: TextI, i: number) => (
                            <Box maxWidth={'150px'} position={'relative'} textAlign={'center'} key={i} display={'flex'} flexDirection={'column'} height={'500px'} alignItems={'center'}>
                                <Box>
                                    <Typography marginBottom={'50px'}>{item.title}</Typography>
                                    <Typography>{item.description}</Typography>
                                </Box>
                                <Box width={"51"} height={"37px"} position={'absolute'} bottom={0}>
                                    <Image objectFit={"cover"} src={accept}/>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Footer background={'white'} />
        </>
    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['header', 'whyus','common'])),
        },
    };
}