import { SQLiteProvider } from "expo-sqlite";
import Content from "./Components/Content";
import { getDb } from "./persistence/Db";

export default function App() {


  return (
    <SQLiteProvider
    databaseName="ShopList.db"
    onInit={getDb}>
    <Content/>
    </SQLiteProvider>
  );
}