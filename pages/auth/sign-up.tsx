import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../../components/Footer";
import Layout from "../../components/layouts/Layout";
import Step1 from "../../components/Stepper/step1";
import Step2 from "../../components/Stepper/step2";
import Step3 from "../../components/Stepper/step3";
import Modal from '../../components/Stepper/Modal/index'
import { useState } from "react";
import { PaymentModal } from "../../components/Stepper/Modal/PaymentModal";
import { SignupModal } from "../../components/Stepper/Modal/SignupModal";
export default function SignUp() {
    const [payModal, setPayModal] = useState(false)
    const [signupModal, setSignUpModal] = useState(false)

    return (
        <Box sx={{ background: 'linear-gradient(107.38deg, #00457B 60.53%, rgba(32, 79, 156, 0.7) 106.54%)' }}>
            {
                payModal ?
                    <Modal setPayModal={setPayModal}>
                        <PaymentModal />
                    </Modal> :
                    signupModal ?
                        <Modal setPayModal={setSignUpModal} width={'869px'} height={'493px'}>
                            <SignupModal />
                        </Modal> : null
            }
            <Layout>
                <Box marginTop={'135px'} paddingBottom={'137px'}>
                    <Typography variant="h4" color={'white'}>Get started with Vault3</Typography>
                    <Box marginTop={'120px'} marginLeft={8} borderLeft={'5px solid #43E3E0'} position={'relative'}>
                        <Step1 />
                        <Step2 setPayModal={setPayModal} />
                        <Step3 setSignUpModal={setSignUpModal}/>
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