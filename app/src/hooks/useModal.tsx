import { createContext, useContext, useState, type ReactNode } from 'react';

interface ModalContextValue {
  isPartnerOpen: boolean;
  openPartner: () => void;
  closePartner: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isPartnerOpen,
        openPartner: () => setIsPartnerOpen(true),
        closePartner: () => setIsPartnerOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}
