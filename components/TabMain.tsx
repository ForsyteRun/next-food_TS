import React, { FC } from "react";

import { AppState } from "../store";
import { useActions } from "../hooks/useActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setTabPizzas } from "../store/redusers/tabPizzas";

import { theme } from "../theme/theme";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  ListProps,
} from "@mui/material";
import s from "../styles/tabMain.module.scss";

type PropsType = {
  tabMenuItems: Array<string>;
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

const TabMain: FC<PropsType> = React.memo(({ tabMenuItems }) => {
  const { tabPizzas } = useAppSelector((state: AppState) => state.getFilterTab);
  const dispatch = useAppDispatch();

  const onTabItem = (index: number | null) => {
    dispatch(setTabPizzas(index));
  };

  return (
    <CustomList dense>
      <CustomListItem
        onClick={() => onTabItem(null)}
        className={tabPizzas === null ? s.active : ""}
      >
        <CustomListItemText primary="Все" disableTypography />
      </CustomListItem>
      {tabMenuItems &&
        tabMenuItems.map((el: string, index) => (
          <CustomListItem
            key={index}
            onClick={() => onTabItem(index)}
            className={tabPizzas === index ? s.active : ""}
          >
            <CustomListItemText primary={el} disableTypography />
          </CustomListItem>
        ))}
    </CustomList>
  );
});

export default TabMain;
