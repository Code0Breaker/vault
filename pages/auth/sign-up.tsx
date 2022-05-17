import { Box } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../components/layouts/Layout";

export default function SignUp() {
    return (
        <Box sx={{ background: 'linear-gradient(107.38deg, #00457B 60.53%, rgba(32, 79, 156, 0.7) 106.54%)' }}>
            <Layout>

            </Layout>
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