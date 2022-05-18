import { Box } from "@mui/system";

export default function Modal({ setPayModal, width='1200px', height='900px', children }: { setPayModal: (state: boolean) => void, children: JSX.Element,width?:string, height?:string }) {

    return (
        <Box
            onClick={() => setPayModal(false)}
            width={'100%'}
            height={'100vh'}
            position={'fixed'}
            top={0}
            left={0}
            sx={{ background: 'rgba(196, 196, 196, 0.6)' }}
            zIndex={999}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Box
                // maxWidth={width}
                width={width}
                height={height}
                sx={{ background: 'white' }}
                position={'relative'}
                zIndex={1000}
                borderRadius={'8px'}
                padding={'58px'}
            >
                {children}
            </Box>
        </Box>


    )
}