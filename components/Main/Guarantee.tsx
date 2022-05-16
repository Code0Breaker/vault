import { Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import allInfo from '../../assets/allinfo.png'
import crypto from '../../assets/crypto.png'
import personal from '../../assets/personal.png'
import storage from '../../assets/storage.png'
export default function Guarantee() {
    const { t } = useTranslation('common');
    return (
        <>
            <Typography maxWidth={'713px'} variant={'h3'} marginBottom={'44px'} marginLeft={'175px'}>
                {t('text')}
            </Typography>
            <Grid container>
                <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}><Image alt={'security'} src={personal} /></Grid>
                <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}><Image alt={'security'} src={allInfo} /></Grid>
                <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}><Image alt={'security'} src={storage} /></Grid>
                <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}><Image alt={'security'} src={crypto} /></Grid>
            </Grid>
        </>
    )
}