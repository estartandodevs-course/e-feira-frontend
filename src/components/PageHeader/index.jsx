import { SiteTitle, HeaderBox } from './styles';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { GoBackButton } from './styles';

export function PageHeader({ title }) {
  const { pathname } = useLocation();
  let backButton =
    pathname === '/' ? null : (
      <Link to="/">
        <ArrowBackIosNewOutlinedIcon fontSize="large" />
      </Link>
    );

  return (
    <>
      <HeaderBox>
        <GoBackButton>{backButton}</GoBackButton>
        <SiteTitle>
          <NavLink to="/">{title}</NavLink>
        </SiteTitle>
      </HeaderBox>
    </>
  );
}
