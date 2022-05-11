import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StartButton = styled(Button)(
  ({ color1 = "#45D5DF", color2 = "#49BDDD", width = 189 }: { color1?: string, color2?: string, width?: number }) => ({
    width: width,
    height: 42,
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
