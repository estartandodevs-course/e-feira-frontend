import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ContainerStyle } from './styles';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ContainerStyle>
        <BottomNavigation sx={{ width: '100%',color: "black", fontSize: "80px"  }} value={value} onChange={handleChange}>
          <BottomNavigationAction label="Recents" showLabel="true" value="recents" icon={<RestoreIcon sx={{ color: "black", fontSize: "35px"  }}/> } />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon sx={{ color: "black", fontSize: "35px"  }} />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon sx={{ color: "black", fontSize: "35px"  }}  />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon sx={{ color: "black", fontSize: "35px"  }} />} />
        </BottomNavigation>
      </ContainerStyle>
    </>
  );
}
