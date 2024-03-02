import { Box, styled } from '@mui/material';

const Container = styled(Box)({
  textAlign: 'center',
  '& p': {
    color: 'rgba(0, 0, 0, .54)'
  }
});

const year = new Date().getFullYear();

const Footer = ({ permission }) => {
  return (
    <Container>
      <div style={{ padding: '2.5rem 0', color: '#0000008a' }}>
        © {year} Shopee. Tất cả các quyền được bảo lưu.
      </div>
    </Container>
  );
};

export default Footer;
