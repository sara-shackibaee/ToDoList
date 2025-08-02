import Image from "next/image";
import { ListsProvider } from "../../context/ListContext";
import AddItemForm from "./components/AddItemToForm";
import { List } from "./components/List";


export default function Home() {
  return (
    <ListsProvider>
    <div dir='rtl'>
      
         <main className="min-h-screen p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-200">
        <div className="bg-white shadow-md rounded p-4">
          <AddItemForm  />
          <List  />
       
        </div>
       
      </main>
       
     
         
    </div>
    </ListsProvider>
  );
}
