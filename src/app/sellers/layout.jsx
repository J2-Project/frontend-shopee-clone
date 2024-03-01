'use client';

import Footer from '@/containers/user/Footer';
import Header from '@/containers/user/Header';
import { Box } from '@mui/material';

export default function LayoutSeller({ children }) {
  return (
    <Box>
      <Header permission="seller" />
      <main>{children}</main>
      <Footer permission="seller" />
    </Box>
  );
}
