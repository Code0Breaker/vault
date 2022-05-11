import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { StartButton, StyledWhiteButton } from "../StyledComponents";
import NextLink from "next/link";
import mainimg from '../../assets/main.png'
import shadow from '../../assets/shadow.png'
import { useTranslation } from "next-i18next";
export default function Intro(){
  const { t } = useTranslation('common');
  console.log(t('text', { returnObjects: true }));
  
    return(
        <Box marginTop={'100px'} display={'flex'} justifyContent={'space-between'}>
            <Box maxWidth={'700px'} marginTop={'80px'}>
              <Typography color={'white'} variant={'h3'}>{t('header_section.title')}</Typography>
              <Typography marginTop={'18px'} color={'white'} variant={'body1'} maxWidth={'450px'}>{t('header_section.description')}</Typography>
              <Box gap={'47px'} display={'flex'} marginTop={'50px'}>
                <NextLink href="/" passHref>
                  <StyledWhiteButton>Why Vault3</StyledWhiteButton>
                </NextLink>
                <NextLink href="/" passHref>
                  <StartButton color1="#40DBBB" color2="#3DB7D2">Start</StartButton>
                </NextLink>
              </Box>
            </Box>
            <Box position={'relative'}>
              <Image alt={'security'} src={mainimg} />
              <Box position={'absolute'} left={'-100px'} bottom={'-80px'}>
                <Image alt={'security'} src={shadow} width={'500px'} height={'500px'}/>
              </Box>
            </Box>
            <Box
        position={'absolute'}
        height={'1220px'}
        width={'100%'}
        top={'-150px'}
        left={0}
        zIndex={-1}
        sx={{
          transform: 'skewY(5deg)', background: "linear-gradient(108.04deg, #00457B 59.95%, rgba(32, 79, 156, 0.7) 105.52%)",
        }} />
          </Box>
    )
}