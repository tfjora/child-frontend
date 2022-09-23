import { useEffect, useState } from "react";
import { IPerson } from "../../../_models/Person";
import Add from "./Add";
import { useStyles } from "./styles";
import View from "./View";

export default function Person() {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const styles = useStyles();

  const onSave = async (content: any) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json", credentials: "same-origin" },
      body: JSON.stringify(content),
    };
    try {
      // await fetch("https://childquotesapi.azurewebsites.net/api/person", request)
      await fetch("/api/person", request)
        .then((r) => r.json())
        .then((d) => setPersons([...persons, d]));
    } catch (error) {}
  };

  useEffect(() => {
    async function fetchData() {
      fetch("/api/person", {
        // fetch("https://childquotesapi.azurewebsites.net/api/person", {
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
      })
        .then((b) => b.json())
        .then((data) => setPersons(data));
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Add onSave={onSave} />
      <View persons={persons} />
    </div>
  );
}
