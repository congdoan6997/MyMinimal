import { Stack } from '@mui/material';
import { NavProps } from '../types';

export default function NavDesktop(props: NavProps) {
  // to do set offsetTop
  const { offsetTop, data } = props;
  return (
    <Stack component="nav" direction="row" spacing={5}>
      {data.map((link) => (
        <p key={link.title}>{link.title}</p>
      ))}
    </Stack>
  );
}
