import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "next-i18next";
import { FolderIcon, RecordsIcon, UserIcon } from "../AllIcons";
import { StyledWhiteButton } from "../StyledComponents";
interface TypesI {
  name: string,
  cost: string,
  period: string,
  users: string,
  storage: string
}
export default function Plans() {
  const { t } = useTranslation('common');
  const data: TypesI[] = t('privacy_section_types', { returnObjects: true })
  console.log(data);
  return (
    <Box
      position={'relative'}
      width={'100%'}
      marginTop={'100px'}
      left={0}
      zIndex={-1}
      paddingTop={'155px'}
      paddingBottom={20}
      display={'flex'}
      justifyContent={'center'}
      sx={{
        transform: 'skewY(-5deg)', background: "#3EC8C3",
      }} >
      <Box sx={{ transform: 'skewY(5deg)' }} width={'90%'}>
        <Typography variant={'h4'} color={'white'} marginBottom={'14px'}>{t('privacy_section.title')}</Typography>
        <Typography variant={'h6'} color={'white'} marginBottom={'90px'}>{t('privacy_section.description')}</Typography>
        <Box display={'flex'} justifyContent={'center'} gap={'70px'} flexWrap={'wrap'}>
          {
            data.map((item: TypesI) => {
              return (
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingBottom={'40px'} paddingTop={'53px'}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    padding={'53px 0 41px 49px'}
                    marginBottom={'35px'}
                    width={'406px'}
                    height={'310px'}
                    sx={{ background: '#02447D' }}
                    borderRadius={'8px'}>
                    <Box display={'flex'} gap={'10px'}>
                      <RecordsIcon />
                      <Typography color={'white'}>{item.name}</Typography>
                    </Box>
                    <Box><Typography color={'white'}>{item.cost} BTC</Typography></Box>
                    <Box><Typography color={'white'}>{item.period}</Typography></Box>
                    <Box>
                      <Box display={'flex'} gap={'25px'}><UserIcon /><Typography color={'white'}>{item.users} users</Typography></Box>
                      <Box display={'flex'} gap={'21px'} marginTop={'17px'}><FolderIcon /><Typography color={'white'}>{item.storage} storage</Typography></Box>
                    </Box>
                  </Box>
                  <StyledWhiteButton>Get started</StyledWhiteButton>
                </Box>
              )
            })
          }
        </Box>
      </Box>
      <Box padding={12} position={'absolute'} bottom={'-90px'} width={'100%'} left={0} sx={{ background: 'white', transform: 'skewY(5deg)' }} />

    </Box>
  )
}