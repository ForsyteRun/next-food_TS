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
import { useActions } from "../hooks/useActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";

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

// eslint-disable-next-line react/display-name
const TabMain: FC<PropsType> = React.memo(({ items }) => {
  const dispatch = useAppDispatch()
  const {setTab} =useAppSelector(state => state.tab)
  const {tab} = useActions()

  const onTabItem = (index: number | null) => {
    dispatch(tab(index))
  }

  return (
    <CustomList dense>
      <CustomListItem
        onClick={() => onTabItem(null)}
        className={setTab === null ? s.active : ''}
      >
        <CustomListItemText primary="Все" disableTypography />
      </CustomListItem>
      {items &&
        items.map((el: string, index) => (
          <CustomListItem
            key={index}
            onClick={() => onTabItem(index)}
            className={setTab === index ? s.active : ''}
          >
            <CustomListItemText primary={el} disableTypography />
          </CustomListItem>
        ))}
    </CustomList>
  );
});

export default TabMain;