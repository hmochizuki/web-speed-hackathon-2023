import type { ComponentProps, FC } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Anchor.styles';

type Props = Omit<ComponentProps<typeof Link>, 'to'> & { href: string };

export const Anchor: FC<Props> = ({ children, href, ...rest }) => (
  <Link className={styles.container()} {...rest} to={href}>
    {children}
  </Link>
);
