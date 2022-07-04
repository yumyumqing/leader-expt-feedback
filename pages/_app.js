import { NextUIProvider } from "@nextui-org/react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </NextUIProvider>
  );
}

export default MyApp;
