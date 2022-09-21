import { Button, Divider, TextField } from "@material-ui/core";
import { useState } from "react";
import { useStyles } from "./style";

type Props = { onSave: any };

export default function Add({ onSave }: Props) {
  const [values, setValues] = useState({
    height: "",
    weight: "",
    personId: "",
    date: new Date().toUTCString(),
  });
  const styles = useStyles();

  const onClick = async () => {
    await onSave(values);
  };

  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.container}>
      <form autoComplete="off" noValidate className={styles.container}>
        <TextField
          helperText="Please specify the person"
          label="person"
          name="Person"
          onChange={handleChange}
          required
          value={values.personId}
          variant="outlined"
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
