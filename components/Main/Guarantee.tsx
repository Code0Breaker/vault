import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import allInfo from '../../assets/allinfo.png'
import crypto from '../../assets/crypto.png'
import personal from '../../assets/personal.png'
import storage from '../../assets/storage.png'

interface GuaranteeI {
    img: string
    title: string
    description: string
}

export default function Guarantee() {
    const { t } = useTranslation('common');
    const guarantee: GuaranteeI[] = t('guarantee.types', { returnObjects: true })

    return (
        <>
            <Typography maxWidth={'713px'} variant={'h3'} marginBottom={'44px'} marginLeft={'175px'}>
                {t('guarantee.title')}
            </Typography>
            <Grid container>
                {
                    guarantee.map((item: GuaranteeI, i: number) => {
                        return (
                            <Grid key={i} item xs={6} display={'flex'} justifyContent={'center'} marginTop={9}>
                                <Box maxWidth={'500px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <img alt={'security'} src={item.img} />
                                    <Box marginLeft={5}>
                                        <Typography variant={'h5'}>{item.title}</Typography>
                                        <Typography>{item.description}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </>
    )
}