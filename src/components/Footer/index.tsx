import Link from 'next/link';

import { SITE_NAME } from '../../config/app-config';
import { Container } from './styled';

export const Footer = () => {
  return (
    <Container>
      <Link href="/">Feito por {SITE_NAME}</Link>
    </Container>
  );
};
