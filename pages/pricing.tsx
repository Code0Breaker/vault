import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/layouts/Layout";
import cloud from '../assets/cloud.png'
import Image from "next/image";
export default function Pricing() {
    return (
        <>
            <Box height={'475px'} sx={{ background: 'linear-gradient(107.38deg, #00457B 60.53%, rgba(32, 79, 156, 0.7) 106.54%)' }}>
                <Layout>
                    <Box display={'flex'} justifyContent={'space-between'} height={'380px'} alignItems={'center'} position={'relative'}>
                        <Box maxWidth={'387px'}>
                            <Typography color={'white'} variant={'h4'} marginBottom={'14px'}>Pricing</Typography>
                            <Typography color={'white'} variant={'body1'}>Lorem Ipsum is simply dummy text of the printing and typesetting</Typography>
                        </Box>
                        <Box position={'absolute'} right={'150px'} bottom={'-30px'}>
                            <Image src={cloud} />
                        </Box>
                    </Box>
                </Layout>
            </Box>
            <Box marginTop={'43px'}></Box>
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