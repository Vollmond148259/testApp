import BaseDatePicker from './datePicker';
import { Stack } from '@mui/material';
export default function FilterSection() {
  return (
    <>
      <Stack
        paddingX={1}
        direction="row"
        justifyContent={{ sm: 'space-between', md: 'flex-start' }}
        spacing={2}
      >
        <BaseDatePicker label="filter from" />
        <BaseDatePicker label="filter to" />
      </Stack>
    </>
  );
}
