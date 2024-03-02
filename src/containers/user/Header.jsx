import { Box, Grid, Typography, styled } from '@mui/material';
import Image from 'next/image';

const Container = styled(Grid)({
  backgroundColor: '#fff',
  height: '84px',
  padding: '0 78px',
  boxShadow: '0 6px 6px rgba(0,0,0,.06)'
});

const Item = styled(Box)(({ type }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: `${type}`,
  color: '#ee4d2d'
}));

const Logo = styled(Image)({
  paddingBottom: '10px',
});

const Title = styled(Typography)({
  color: '#222',
  fontSize: '1.5rem'
});

const Header = ({ permission }) => {
  return (
    <Container
      container
      direction="row"
      justifyContent="space-between"
      alignContent="center"
    >
      <Grid item xs={6}>
        <Item type="center">
          <Logo src="/Shopee.svg" alt="" width="170" height="84" />
          <Title>{permission ? 'Kênh người bán' : 'Đăng nhập'}</Title>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item type="center">Bạn cần giúp đỡ?</Item>
      </Grid>
    </Container>
  );
};

export default Header;
