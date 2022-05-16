import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../components/Footer";
import Layout from "../components/layouts/Layout";
import { StartButton, StyledInput, StyledTextArea } from "../components/StyledComponents";

export default function Contact() {
    return (
        <>
            <Box sx={{ background: 'linear-gradient(107.38deg, #00457B 60.53%, rgba(32, 79, 156, 0.7) 106.54%)' }}>
                <Layout>

                </Layout>

            </Box>
            <Box paddingLeft={'160px'} marginTop={'93px'} marginBottom={'160px'}>
                <Box>
                    <Typography variant="h4">Contact</Typography>
                    <Typography variant="body1" maxWidth={300}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography>
                    <Box marginTop={'93px'} display={'flex'} flexDirection={'column'} gap={'45px'}>
                        <StyledInput/>
                        <StyledInput/>
                        <StyledTextArea></StyledTextArea>
                        <StartButton>send</StartButton>
                    </Box>
                </Box>
            </Box>
            <Footer/>
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