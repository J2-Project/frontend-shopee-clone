import { Box, Grid, styled } from '@mui/material';

export const Container = styled(Grid)({
  maxWidth: '1040px',
  margin: '0 auto',
  height: '600px'
});

export const Title = styled('p')({
  fontSize: '2rem',
  lineHeight: '3.5625rem',
  color: '#ee4d2d'
});

export const Description = styled('span')({
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  color: '#666',
  marginBottom: '32px'
});

export const Item = styled(Box)(({ type }) => ({
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
