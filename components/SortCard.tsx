import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import SelectUnstyled, {
   selectUnstyledClasses, SelectUnstyledProps
} from '@mui/base/SelectUnstyled';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import * as React from 'react';

const StyledButton = styled('button')(
  ({theme}) => `
  font-family: 'Montserrat';
  font-size: 14px;
  min-height: calc(1.5em + 22px);
  padding: 12px 12px 12px 0;
  text-align: left;
  line-height: 17px;
  background: ${'transparent'};
  border: none;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    color: ${theme.palette.primary.main};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    position: relative;
    left: -138px;
    float: left;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({theme}) => `
  font-family: "'Montserrat', sans-serif";
  font-size: 14px;
  padding: 6px;
  margin: 12px 0;
  width: 132px;
  border-radius: 12px;
  background:  ${theme.palette.background.paper};
  box-shadow: 0px 5px 15px rgba($color: #000000, $alpha: 0.9);
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: rgba(254, 95, 30, 0.05);
    color: #FE5F1E;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.grey[300]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect<TValue extends {}>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const slots: SelectUnstyledProps<TValue>['slots'] = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}>(
  props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLButtonElement>,
) => JSX.Element;

const SortCard = () => {
  return (
   <div style={{flexBasis: '270px'}}>
    <Typography gutterBottom variant="h6" component="span">сортировка по: </Typography>
    <CustomSelect defaultValue={10}>
      <StyledOption value={10}>популярности</StyledOption>
      <StyledOption value={20}>цене</StyledOption>
      <StyledOption value={30}>алфавиту</StyledOption>
    </CustomSelect>
   </div>
  );
}

export default SortCard;
