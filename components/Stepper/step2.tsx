import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import { StartButton } from "../StyledComponents"
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
const images = [
    { img: img1, title: 'bitcoin' },
    { img: img2, title: 'bitcoin' },
    { img: img3, title: 'bitcoin' },
    { img: img4, title: 'bitcoin' },
    { img: img5, title: 'bitcoin' },
    { img: img6, title: 'bitcoin' },
    { img: img7, title: 'bitcoin' }
]
export default function Step2({setPayModal}:{setPayModal:(state:boolean)=>void}) {
    return (
        <>
            <Box position={'relative'}>
                <Box left={'-72px'} position={'absolute'} display={'flex'} alignItems={'center'}>
                    <Typography color={'white'} marginRight={'10px'}>Step 2</Typography>
                    <Box width={'27px'} height={'27px'} borderRadius={50} sx={{ background: '#43E3E0' }} />
                </Box>
            </Box>
            <Box paddingLeft={'50px'} paddingBottom={'115px'}>
                <Box display={'grid'} gap={'30px'}>
                    <Typography color={'white'}>3. Make Payment</Typography>
                </Box>
                <Box marginBottom={'48px'} display={"flex"} gap={'53px'} flexWrap={'wrap'} maxWidth={'900px'}>
                    {
                        images.map((item, i) => {
                            return (
                                <Box key={i} onClick={() => console.log(item.title)} sx={{ cursor: 'pointer' }}>
                                    <Image alt='ok' src={item.img} width={'166px'} height={'166px'} />
                                </Box>
                            )
                        })
                    }

                </Box>
                <StartButton width={411} height={54} onClick={()=>setPayModal(true)}>Pay</StartButton>
            </Box>
        </>
    )
}