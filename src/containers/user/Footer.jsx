import { Box, styled } from '@mui/material';

const Container = styled(Box)({
  textAlign: 'center',
  '& p': {
    color: 'rgba(0, 0, 0, .54)'
  }
});

const Footer = ({ permission }) => {
  return (
    <Container>
      <p>© 2024 Shopee. Tất cả các quyền được bảo lưu.</p>
    </Container>
  );
};

export default Footer;
