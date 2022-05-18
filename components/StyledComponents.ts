import styled from "@emotion/styled";
import { Button } from "@mui/material";
const style = {
  width: 525,
  background: '#F1F1F1',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
  borderRadius: 4,
  border: 'none',
  outline: 'none',
  padding: 5
}
export const StartButton = styled(Button)(
  ({ color1 = "#45D5DF", color2 = "#49BDDD", width = 189, height = 42 }: { color1?: string, color2?: string, width?: number, height?: number }) => ({
    width: width,
    height: height,
    background: `linear-gradient(91.71deg, ${color1} 7.95%, ${color2} 95.3%)`,
    borderRadius: 50,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 14,
    color: "#FFFFFF",
  })
);

export const StyledLink = styled(Button)(() => ({
  fontFamily: "Lato",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 14,
  color: "#FFFFFF",
}));

export const StyledWhiteButton = styled(Button)(() => ({
  width: 189,
  height: 42,
  background: `white`,
  borderRadius: 50,
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 14,
  color: "#00457B",
  ':hover': {
    background: 'white'
  }
}));

export const StyledInput = styled('input')(({ height = 60 }: { height?: number }) => ({ ...style, height }))

export const StyledTextArea = styled('textarea')(({ height = 204 }: { height?: number }) => ({ ...style, height }))

export const CustomInput = styled('input')(() => ({
  border: '1px solid #DEDBF0',
  borderRadius: 4,
  outline:'none',
  width:'700px',
  height:'40px'
}))