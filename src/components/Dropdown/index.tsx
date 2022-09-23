import { Select, MenuItem } from "@material-ui/core";
import React from "react";

export type IMenuItems = {
  value: any;
  label: string;
};

type Props = {
  menuItems: IMenuItems[];
  value: string;
  label: string;
  onChange: (event: any) => void;
};

export default function DropDown({ value, label, onChange, menuItems }: Props) {
  return (
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={value}
      label={label}
      onChange={onChange}
    >
      {menuItems.map((item, index) => {
        return (
          <MenuItem value={item.value} key={index}>
            {item.label}
          </MenuItem>
        );
      })}
    </Select>
  );
}
