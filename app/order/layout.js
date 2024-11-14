import { ContextProvider } from "../context/orderContextManager";
export default async function OrderLayout({ children }) {
  return <ContextProvider initialData={{}}>{children}</ContextProvider>;
}
