import { createContext, useContext, useEffect, useMemo } from "react";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface ShellState {
  isSidebarOpen: boolean;
  agentName: string;
  logoUrl: any;
  loadingUrl?: {id: string, component: any};
  setIsSidebarOpen: (isOpen: boolean) => void;
  setAgentName: (name: string) => void;
  setLogoUrl: (url: any) => void;
}

export const createShellStore = ({ logoUrl, agentName, loadingUrl }: { logoUrl: any; agentName: string; loadingUrl?: {id: string, component: any} }) =>
  create<ShellState>((set) => ({
    isSidebarOpen: true,
    agentName: agentName,
    logoUrl: logoUrl,
    loadingUrl: loadingUrl,
    setIsSidebarOpen: (isOpen: boolean) => set({ isSidebarOpen: isOpen }),
    setAgentName: (name: string) => set({ agentName: name }),
    setLogoUrl: (url: string) => set({ logoUrl: url }),
  }));

export const ShellStoreContext = createContext<ReturnType<typeof createShellStore> | null>(null);

export const useShellStore = <T,>(selector: (state: ShellState) => T): T => {
  const store = useContext(ShellStoreContext);
  if (!store) {
    throw new Error("useShellStore must be used within ShellStoreProvider");
  }

  return store(useShallow(selector));
};

export const ShellStoreProvider = ({
  children,
  agentName,
  logoUrl,
  loadingUrl,
}: {
  children: React.ReactNode;
  logoUrl: any;
  agentName: string;
  loadingUrl?: {id: string, component: any};
}) => {
  const shellStore = useMemo(() => createShellStore({ agentName, logoUrl, loadingUrl }), []);

  useEffect(() => {
    const { setAgentName, setLogoUrl } = shellStore.getState();
    setAgentName(agentName);
    setLogoUrl(logoUrl);
  }, [agentName, logoUrl]);

  return <ShellStoreContext.Provider value={shellStore}>{children}</ShellStoreContext.Provider>;
};
