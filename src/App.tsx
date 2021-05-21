import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransModalOpen, setIsNewTransModalOpen] = useState(false);
  
  function handleOpenNewTransModal() {
    setIsNewTransModalOpen(true);
  }

  function handleCloseNewTransModal() {
    setIsNewTransModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransModal={handleOpenNewTransModal} />
      <Dashboard />
      
      <NewTransactionModal
        isOpen={isNewTransModalOpen}
        onRequestClose={handleCloseNewTransModal}
      />
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}