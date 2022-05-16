import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { StartButton } from "../StyledComponents";
import schemas from '../../assets/schemas.png'
import map from '../../assets/map.png'
import { useTranslation } from "next-i18next";
export default function Learn() {
    const { t } = useTranslation('common');
    return (
        <Box sx={{ background: '#02447D' }}>
            <Box position={'relative'} marginTop={'100px'} paddingTop={20} display={'flex'} justifyContent={"space-between"}>
                <Box sx={{ transform: 'skewY(-2deg)', background: 'white' }} position={'absolute'} height={'100px'} width={'100%'} top={-40} />

                <Box maxWidth={'443px'} marginLeft={30}>
                    <Typography color={'white'} variant={'h4'}>Security</Typography>
                    <Typography marginTop={'12px'} marginBottom={'43px'} color={'white'} variant={'body1'} lineHeight={2}>{t('mainText.description', { returnObjects: true })}</Typography>
                    <StartButton width={385}>Learn more about our security features</StartButton>
                </Box>
                <Box position={'relative'} top={'-100px'}>
                    <Image alt={'security'} src={schemas} height={'500px'} />
                </Box>

            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100%'} position={'relative'} top={'-100px'}>
                <Image alt={'security'} src={map} />
                <Typography variant={"h3"} position={'absolute'} color={'white'}>Global Support</Typography>
            </Box>
        </Box>
    )
}