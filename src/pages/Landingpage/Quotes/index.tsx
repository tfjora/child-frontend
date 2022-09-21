import { useEffect, useState } from "react";
import { IQuotes } from "../../../_models/Quotes";
import Add from "./Add";
import { useStyles } from "./styles";
import View from "./View";

export default function Quote() {
  const [quotes, setQuotes] = useState<IQuotes[]>([]);
  const styles = useStyles();

  const onSave = (content: any) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    };
    fetch("https://childquotesapi.azurewebsites.net//api/quotes", request)
      .then((r) => r.json())
      .then((d) => setQuotes([...quotes, d]));
  };

  useEffect(() => {
    async function fetchData() {
      fetch("https://childquotesapi.azurewebsites.net/api/quotes")
        .then((b) => b.json())
        .then((data) => setQuotes(data));
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Add onSave={onSave} />
      <View books={quotes} />
    </div>
  );
}
