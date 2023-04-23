import Link from 'next/link';
import { Container } from './styled';
import { SITE_NAME } from '../../config/app-config';

import { useEffect } from 'react';

export const Header = ({ categorias = ['erro'] }) => {
  return (
    <Container>
      <Link href="/">{SITE_NAME}</Link>

      <ul>
        <li className="lista">
          Categorias ↓
          <ul>
            {categorias.map((category) => (
              <Link key={category} href={`/post/page/1/${category}`}>
                <li>{category}</li>
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </Container>
  );
};
