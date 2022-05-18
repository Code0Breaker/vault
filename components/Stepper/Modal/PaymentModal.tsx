import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import qr from '../images/qr.png'

export function PaymentModal() {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <>
            <Typography variant={'h5'}>
                Pay With Bitcoin
            </Typography>
            <Box display={'grid'} justifyItems={"center"} marginTop={'48px'} gap={'50px'}>
                <Select
                    style={{ width: 300, height: 69 }}
                    defaultValue={'1 month'}
                    value={age}
                    onChange={handleChange}
                    placeholder={'1 month'}
                >
                    <MenuItem defaultValue={'1 month'}>1 month</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Typography variant={'body2'}>Send 0.0003 BTC to the following address:</Typography>
                <Box width={'683px'} height={'69px'} border={"1px solid #A7ABAF"} borderRadius={'4px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant={'h6'}>3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd</Typography>
                </Box>
                <Box>
                    <Typography variant={'caption'} color={'#506679'} textAlign={'center'}>Note: Lorem Ipsum is simply dummy text</Typography>
                </Box>
                <Box>
                    <Image src={qr} width={'135px'} height={'135px'} />
                </Box>
                <Box sx={{ background: '#F0F3DF' }} width={'734px'} height={'73px'} borderLeft={'6px solid #C4B069'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant={'body2'}>Processing the payment may take up to 30 minutes</Typography>
                    <Typography variant={'body2'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Box>
            </Box>
        </>
    )
}