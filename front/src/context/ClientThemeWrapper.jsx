import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ClientThemeWrapper({ children }) {
  // ... (Refer to your provided code for the detailed implementation)
  const {theme} = useContext(ThemeContext);
  return <div data-theme={theme}>{children}</div> 
}