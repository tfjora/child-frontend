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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    };
    try {
      await fetch("https://childquotesapi.azurewebsites.net/api/person", request)
        .then((r) => r.json())
        .then((d) => setPersons([...persons, d]));
    } catch (error) {}
  };

  useEffect(() => {
    async function fetchData() {
      fetch("https://childquotesapi.azurewebsites.net/api/person")
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
