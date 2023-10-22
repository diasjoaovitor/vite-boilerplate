import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import { Logo } from '..'
import * as S from './style'

export type TAuthInputProps = {
  label: string
  name: string
  type: 'email' | 'password'
}

type Props = {
  title: string
  redirect: {
    to: string
    text: string
  }
  inputs: TAuthInputProps[]
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export function Auth({
  inputs,
  title,
  redirect: { to, text },
  handleSubmit
}: Props) {
  return (
    <Box sx={S.Wrapper}>
      <Logo />
      <Paper sx={S.Form} component="form" onSubmit={handleSubmit}>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <FormControl fullWidth>
          {inputs.map((inputProps) => (
            <TextField key={inputProps.name} {...inputProps} required />
          ))}
        </FormControl>
        <Button type="submit" variant="contained" fullWidth>
          {title}
        </Button>
      </Paper>
      <Link to={to}>{text}</Link>
    </Box>
  )
}
