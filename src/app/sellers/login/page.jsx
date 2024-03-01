'use client';

import Login from '@/containers/user/Login';
import { Box, Grid, styled } from '@mui/material';
import Image from 'next/image';

const Container = styled(Grid)({
  maxWidth: '1040px',
  margin: '0 auto',
  height: '600px'
});

const Title = styled('p')({
  fontSize: '2rem',
  lineHeight: '3.5625rem',
  color: '#ee4d2d'
});

const Description = styled('span')({
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  color: '#666',
  marginBottom: '32px'
});

const Item = styled(Box)(({ type }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  '& .item': {
    margin: 'auto 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  }
}));

export default function Page() {
  return (
    <Container
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={5}>
        <Item type="left">
          <Box className="item">
            <Title>Bán hàng chuyên nghiệp</Title>
            <Description>
              Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với Shopee -
              Kênh Người bán
            </Description>
            <Image src="/images/img-login.png" height={200} width={400} alt="" />
          </Box>
        </Item>
      </Grid>
      <Grid item xs={5}>
        <Item type="right">
          <Box className="item">
            <Login />
          </Box>
        </Item>
      </Grid>
    </Container>
  );
}
