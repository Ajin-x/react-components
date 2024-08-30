import { createContext } from "react";

export interface LocalContextType {
  locale: string;
}

const localeContext = createContext<LocalContextType>({
  locale: "zh-CN",
});

export default localeContext;
