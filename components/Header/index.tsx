import { Box } from "@mui/system";
import Logo from "../../assets/logo";
import { StartButton, StyledLink } from "../StyledComponents";
import NextLink from "next/link";
import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";
interface RouterI {
  path: string,
  name: string
}
export default function Header() {
  const { t } = useTranslation('header');
  // @ts-ignore
  const routes = t('nav', { returnObjects: true })
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Logo />
      <Box sx={{ display: "flex", gap: "18px" }}>
        {
        // @ts-ignore
        routes.map((page:RouterI) => (
          <NextLink href={`/${page.path}`} passHref key={page.name}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              {page.name}
            </Button>
          </NextLink>
        ))
        }
      </Box>
      <Box display={"flex"} gap={"37px"}>
        <NextLink href="/" passHref>
          <StyledLink>Sign in </StyledLink>
        </NextLink>
        <NextLink href="/" passHref>
          <StartButton>Start</StartButton>
        </NextLink>
      </Box>
    </Box>
  );
}
