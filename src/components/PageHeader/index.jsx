import { SiteTitle, HeaderBox } from './styles';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GoBackButton } from './styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export function PageHeader() {
  const { path } = useLocation();
  const navigate = useNavigate();

  let backButton =
    path === '/' ? null : (
      <button style={{ outline: 'none' }} onClick={() => navigate(-1)}>
        <ChevronLeftIcon fontSize="large" />
      </button>
    );

  return (
    <>
      <HeaderBox>
        <GoBackButton>{backButton}</GoBackButton>
        <SiteTitle>
          <NavLink to="/">pageTitle</NavLink>
        </SiteTitle>
      </HeaderBox>
    </>
  );
}
