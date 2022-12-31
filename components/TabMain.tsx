import {
  List,
  ListItem,
  ListItemText,
  ListItemTextProps,
  ListProps,
  ListItemProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { FC, useState } from "react";
import { theme } from "../theme/theme";
import s from "./../styles/tabMain.module.scss";

type PropsType = {
  items: Array<string>;
};

const CustomList = styled(List)<ListProps>(() => ({
  width: "828px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const CustomListItem = styled(ListItem)<ListItemProps>(() => ({
  width: "auto",
  borderRadius: "30px",
  background: theme.palette.grey[500],
  padding: "14px 28px",
  cursor: "pointer",
}));

const CustomListItemText = styled(ListItemText)<ListItemTextProps>(() => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: "16px",
  lineHeight: "19px",
}));

const TabMain: FC<PropsType> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <CustomList dense>
      <CustomListItem
        onClick={() => setActiveItem(null)}
        className={activeItem === null ? s.active : ""}
      >
        <CustomListItemText primary="Все" disableTypography />
      </CustomListItem>
      {items &&
        items.map((item: string, index) => (
          <CustomListItem
            key={index}
            onClick={() => setActiveItem(item)}
            className={activeItem === item ? s.active : ""}
          >
            <CustomListItemText primary={item} disableTypography />
          </CustomListItem>
        ))}
    </CustomList>
  );
};

export default TabMain;