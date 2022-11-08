import { useLocation, useNavigate } from 'react-router-dom';
import { SiteTitle, HeaderBox } from './styles';
import { GoBackButton } from './styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export function PageHeader() {
  const curr = useLocation();
  const navigate = useNavigate();

  let backButton =
    curr === '/' ? null : (
      <button style={{ outline: 'none' }} onClick={() => navigate(-1)}>
        <ChevronLeftIcon fontSize="large" />
      </button>
    );

  return (
    <>
      <HeaderBox>
        <GoBackButton>{backButton}</GoBackButton>
        <SiteTitle>{document.title}</SiteTitle>
      </HeaderBox>
    </>
  );
}
