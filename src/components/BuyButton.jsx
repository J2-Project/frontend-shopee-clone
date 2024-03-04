import Button from '@mui/material/Button';
export default function BuyButton() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#EE4D2D',
        color: 'white',
        height: '48px',
        padding: '0 40px',
        fontSize: '14px',
        boxShadow: 'none',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#F05D40',
          boxShadow: 'none'
        }
      }}
    >
      Mua ngay
    </Button>
  );
}
