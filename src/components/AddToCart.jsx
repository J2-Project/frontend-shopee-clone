import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function AddToCart() {
  return (
    <Button
      variant="outlined"
      color="error"
      sx={{
        backgroundColor: '#FF52721A',
        color: '#EE4D2D',
        height: '48px',
        padding: '0 20px',
        fontSize: '14px',
        textTransform: 'capitalize',
        boxShadow: 'none',
        border: '1px solid #EE4D2',
        '&:hover': {
          backgroundColor: '#FFFFFF',
          boxShadow: 'none'
        }
      }}
    >
      <AddShoppingCartIcon
        sx={{
          paddingRight: '10px'
        }}
      />
      <span>Thêm vào giỏ hàng</span>
    </Button>
  );
}
