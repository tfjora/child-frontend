import { useEffect, useState } from "react";
import { IPersonDetail } from "../../../_models/PersonDetail";
import Add from "./Add";
import { useStyles } from "./styles";
import View from "./View";

export default function PersonDetail() {
  const [personDetails, setPersonDetails] = useState<IPersonDetail[]>([]);
  const styles = useStyles();

  const onSave = (content: any) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    };
    fetch("https://childquotesapi.azurewebsites.net//api/personDetail", request)
      .then((r) => r.json())
      .then((d) => setPersonDetails([...personDetails, d]));
  };

  useEffect(() => {
    async function fetchData() {
      fetch("https://childquotesapi.azurewebsites.net/api/personDetail")
        .then((b) => b.json())
        .then((data) => setPersonDetails(data));
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Add onSave={onSave} />
      <View personDetails={personDetails} />
    </div>
  );
}
