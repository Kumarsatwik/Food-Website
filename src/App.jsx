import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { extendTheme, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";


const breakpoints = {
  sm: "375px",
  md: "768px",
  lg: "960px",
  xl: "1440px",
};

const theme = extendTheme({ breakpoints });

function App() {
  const breakValue = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
  });

  return (
    <>
      <Home breakValue={breakValue} />
      <About breakValue={breakValue} />
      <Article breakValue={breakValue} />
      <Footer breakValue={breakValue} />
    </>
  );
}

export default App;
