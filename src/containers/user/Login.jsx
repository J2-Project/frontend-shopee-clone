import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  styled
} from '@mui/material';
import { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';

const Container = styled(Box)({
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  boxShadow: '0 3px 10px 0 rgba(0,0,0,.14)',
  borderRadius: '4px',
  height: '480px'
});

const Header = styled(Box)({
  fontSize: '1.25rem',
  color: '#222',
  width: '100%',
  padding: '1.375rem 30px'
});

const Body = styled('form')({ padding: '1.375rem 30px' });

const Footer = styled(Box)({
  padding: '0 30px',
  '& .line': {
    height: '1px',
    width: '100%',
    backgroundColor: '#dbdbdb',
    flex: 1
  },
  '& .text': {
    color: '#ccc',
    padding: '0 16px',
    textTransform: 'uppercase',
    fontSize: '.75rem'
  }
});

const ButtonSubmit = styled(Button)({
  color: '#fff',
  backgroundColor: '#ee4d2d',
  boxShadow: '0 1px 1px rgba(0,0,0,.09)',
  marginBottom: '10px'
});

const ResetPassword = styled('p')({
  color: '#05a',
  fontSize: '.75rem'
});

const ButtonSocial = styled(Button)({
  border: '1px solid rgba(0, 0, 0, .26)',
  backgroundColor: '#fff',
  padding: '0 2px',
  borderRadius: '2px',
  height: '40px',
  fontSize: '.875rem',
  '& p': {
    paddingLeft: '10px',
    color: 'rgba(0, 0, 0, .87)',
    fontSize: '.875rem',
    textTransform: 'capitalize'
  }
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <Container>
      <Header>Đăng nhập</Header>
      <Body action={handleSubmit}>
        <TextField
          autoComplete="off"
          type="text"
          variant="outlined"
          size="small"
          label="Email/Số điện thoại"
          fullWidth
          sx={{ marginBottom: '26px' }}
        />
        <TextField
          autoComplete="off"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          size="small"
          label="Password"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword()}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Box sx={{ marginTop: '30px' }}>
          <ButtonSubmit variant="contained" fullWidth type="submit">
            Contained
          </ButtonSubmit>
          <ResetPassword>Quên mật khẩu?</ResetPassword>
        </Box>
      </Body>
      <Footer>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginBottom: '14px' }}
          >
            <Grid item className="line" />
            <Grid item className="text">
              hoặc
            </Grid>
            <Grid item className="line" />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={5}>
              <ButtonSocial fullWidth variant="outlined">
                <FacebookOutlinedIcon />
                <p>Facebook</p>
              </ButtonSocial>
            </Grid>
            <Grid item xs={5}>
              <ButtonSocial fullWidth variant="outlined">
                <AddToDriveOutlinedIcon />
                <p>Google</p>
              </ButtonSocial>
            </Grid>
          </Grid>
          <Box
            sx={{
              color: 'rgba(0, 0, 0, .26)',
              fontSize: '.875rem',
              textAlign: 'center',
              margin: '30px 0'
            }}
          >
            Bạn mới biết đến Shopee?{' '}
            <a href style={{ color: '#ee4d2d', fontSize: '.875rem' }}>
              Đăng ký
            </a>
          </Box>
        </Box>
      </Footer>
    </Container>
  );
};

export default Login;
