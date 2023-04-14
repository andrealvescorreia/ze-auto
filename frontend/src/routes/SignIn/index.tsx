import * as React from 'react';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { Box, Button } from '@mui/material';
import { useForm } from "react-hook-form";

/*
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
*/

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container maxWidth="xs">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Box mb={2}>
          <TextField
            variant="outlined"
            label="email"
            fullWidth
            autoComplete='email'
            autoFocus
            {...register("email", {
              required: "Required field",
              pattern: {
                value: new RegExp("^[A-Z0-9+_.-]+@[A-Z0-9.-]+$"),
                message: "Email invalido"
              },
            })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />

        </Box>
        <Button type="submit" variant="contained">Login</Button>
      </form>

    </Container>
  )





  /*
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="filled">
          <InputLabel sx={{color: 'white' }}htmlFor="filled-adornment-password">Senha</InputLabel>
          <FilledInput sx={{color: 'white' }}
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </Box>
  );
  */
}
