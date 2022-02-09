import { ExtGrid, ExtColumn } from "@sencha/ext-react-modern";
import { createPersonnelStore } from "./store";
import { useCallback } from "react";
import ExtButton from "@sencha/ext-react-modern/dist/ExtButton";
import { useStore } from "./useStore";

function App() {
  const handleCommit = useCallback((store) => {
    console.log('Store commited', store.getData());
  }, []);

  const store = useStore(() => createPersonnelStore([
    { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", city: "Moscow" },
    { name: 'Worf', email: "worf.moghsson@enterprise.ru", phone: "555-222-2222", city: "San-Francisco" },
    { name: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333", city: "New York" },
    { name: 'Data', email: "mr.data@enterprise.ru", phone: "555-444-4444", city: "New Jersey" },
    { name: 'Alex Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-9980", city: "Barcelona" },
    { name: 'Wolf Messing', email: "worf.moghsson@enterprise.ru", phone: "555-222-6789", city: "Torino" },
    { name: 'Deanna Habr', email: "deanna.troi@enterprise.com", phone: "555-333-4567", city: "Amsterdam" },
    { name: 'Max Lyter', email: "mr.data@enterprise.ru", phone: "555-444-1234", city: "Paris" },
  ]), {
    onCommit: handleCommit
  });

  return (
    <>
      <ExtGrid store={store} height={500} plugins={['grideditable']}>
        <ExtColumn text='Name' dataIndex='name' width={100} editable />
        <ExtColumn text='Email' dataIndex='email' width={230} editable />
      </ExtGrid>
      <ExtButton text='Submit' handler={() => {
        store.commitChanges();
      }} />
    </>
  );
}

export default App;
