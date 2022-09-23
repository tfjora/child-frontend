import { Button, Divider, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import DropDown, { IMenuItems } from "../../../../components/Dropdown";
import { useStyles } from "./style";

type Props = { onSave: any };

export default function Add({ onSave }: Props) {
  const [values, setValues] = useState({
    height: "",
    weight: "",
    personId: "",
    date: new Date().toUTCString(),
  });
  const [person, setPerson] = useState("tete");
  const [menuItems, setMenuItems] = useState([{ value: "", label: "" }]);
  const styles = useStyles();

  useEffect(() => {
    async function fetchData() {
      fetch("https://childquotesapi.azurewebsites.net/api/person", {
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
      })
        .then((b) => b.json())
        .then((data) => {
          data.map((item) =>
            setMenuItems([
              {
                value: item,
                label: `${item.firstName} ${item.lastName}`,
              },
            ])
          );
        });
    }
    fetchData();
  }, []);

  const onClick = async () => {
    await onSave(values);
  };

  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleChangePerson = (event: any) => {
    setPerson(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value?.id });
  };

  return (
    <div className={styles.container}>
      <form autoComplete="off" noValidate className={styles.container}>
        <DropDown
          value={person}
          onChange={handleChangePerson}
          label={"Add person"}
          menuItems={menuItems}
        />

        <TextField
          label="Date"
          name="date"
          onChange={handleChange}
          required
          value={values.date}
          variant="outlined"
        />
        <TextField
          label="weight"
          name="authorId"
          onChange={handleChange}
          required
          value={values.weight}
          variant="outlined"
        />
        <TextField
          label="Height"
          name="height"
          onChange={handleChange}
          required
          value={values.height}
          variant="outlined"
        />

        <Divider />
        <Button color="primary" variant="contained" onClick={onClick}>
          Save details
        </Button>
      </form>
    </div>
  );
}
