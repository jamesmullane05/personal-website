import { ColorScheme } from "./ColorScheme";
import { Theme } from "./Theme";

export interface ThemeContextType {
  theme: Theme;
  colors: ColorScheme;
  toggleTheme: () => void;
}
