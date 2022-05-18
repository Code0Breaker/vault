import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useRef } from "react";
import Footer from "../components/Footer";
import Layout from "../components/layouts/Layout";

interface BuffI {
    description: string
}

interface GroupI {
    image: string,
    fullName: string,
    info: string
}

export default function About() {
    const { t } = useTranslation('about');
    const buffs: BuffI[] = t('history', { returnObjects: true })
    const group: GroupI[] = t('team.group', { returnObjects: true })
    const divRef = useRef(null)
    return (
        <>
            <Box ref={divRef} sx={{ background: 'linear-gradient(107.38deg, #00457B 60.53%, rgba(32, 79, 156, 0.7) 106.54%)' }}>
                <Layout>

                </Layout>
            </Box>
            <Box paddingLeft={'166px'} paddingTop={'93px'} display={'flex'} flexDirection={'column'} gap={'42px'}>
                <Box>
                    <Typography variant="h4" marginBottom={'24px'}>{t('title')}</Typography>
                    <Typography variant="body1" maxWidth={950}>{t('description')}</Typography>
                </Box>
                <Box>
                    <Typography variant="h4" marginBottom={'14px'}>{t('buffTitle')}</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={'42px'}>
                        <List sx={{ maxWidth: 950 }}>
                            {
                                // @ts-ignore
                                buffs.map((item: BuffI, i: number) => {
                                    return <ListItem key={i} sx={{ listStyleType: 'disc', display: 'list-item' }}><Typography variant={'body1'}>{item.description}</Typography></ListItem>
                                })
                            }

                        </List>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h4" marginBottom={'40px'}>{t('team.title')}</Typography>
                    <Box display={'flex'} gap={'100px'}>
                        {
                            group.map((item: GroupI, i: number) => {
                                return (
                                    <Box key={i}>
                                        <Image alt='pay' src={item.image} width={"400px"} height={"400px"} />
                                        <Typography variant="body1">{item.fullName}</Typography>
                                        <Typography variant="body2">{item.info}</Typography>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['header', 'about'])),
        },
    };
}