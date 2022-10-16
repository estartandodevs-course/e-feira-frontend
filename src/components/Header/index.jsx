import { NavLink } from 'react-router-dom';
import { SiteTitle, HeaderBox } from './styles';

export function Header() {
  return (
    <>
    <HeaderBox>
      <SiteTitle><NavLink to="/">e-feira</NavLink></SiteTitle>;
    </HeaderBox>
    </>
  )
}
