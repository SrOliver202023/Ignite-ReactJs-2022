import style from './style.module.css';

import IgniteLogo from '../../assets/IgniteLogo.svg';

export function Header() {
  return (
    <header className={style.Header}>
      <img src={IgniteLogo} alt='Logotipo do Ignite' />
      <strong>Ignite Feed</strong>
    </header>

  );
}