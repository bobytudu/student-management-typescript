import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import './App.css'
import { Provider } from "react-redux";
import store from "./redux/store";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import FirebaseContainer from "components/firebase/FirebaseContainer";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <ThemeProvider>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <ScrollToTop />
                <StyledChart />
                <FirebaseContainer>
                  <Router />
                </FirebaseContainer>
              </LocalizationProvider>
            </ThemeProvider>
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </div>
  );
}
