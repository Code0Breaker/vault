import { Box } from "@mui/material";
import Header from "../Header";

export interface LayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: LayoutProps) {
  return (

    <Box
      display={"flex"}
      justifyContent={"center"}
    >
      <Box width={"90%"}>
        {children}
      </Box>
    </Box>
  )
}