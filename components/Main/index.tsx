import { Box } from "@mui/system";
import Footer from "../Footer";
import Layout from "../layouts/Layout";
import Design from "./Design";
import Guarantee from "./Guarantee";
import Intro from "./Intro";
import Learn from "./Learn";
import Plans from "./Plans";

export default function Main() {
    return (
        <>
            <Layout>
                <Intro />
            </Layout>
            <Box marginTop={'290px'} position={'relative'}>
                <Guarantee />
                <Plans />
                <Design />
                <Learn />
            </Box>
            <Footer />
        </>
    )
}