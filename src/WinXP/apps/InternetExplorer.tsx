import { useState } from 'react';
import styled from 'styled-components';
import MuhaFilm from './MuhaFilm';

const Toolbar = styled.div`
  background: linear-gradient(180deg, #f3f1ea 0%, #d9d6c3 100%);
  border-bottom: 1px solid #888;
  padding: 2px 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MenuBar = styled.div`
  display: flex;
  gap: 4px;
  font-size: 11px;
  padding: 2px;
`;

const MenuItem = styled.div`
  padding: 2px 8px;
  cursor: pointer;
  &:hover {
    background: #3168d5;
    color: white;
  }
`;

const AddressBar = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px;
`;

const AddressLabel = styled.span`
  font-size: 11px;
`;

const AddressInput = styled.input`
  flex: 1;
  border: 2px inset #dfdfdf;
  padding: 2px 4px;
  font-size: 11px;
`;

const Content = styled.div`
  flex: 1;
  overflow: auto;
  background: white;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function InternetExplorer() {
  const [url, setUrl] = useState('http://muhafilm.com');

  return (
    <Container>
      <Toolbar>
        <MenuBar>
          <MenuItem>File</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem>View</MenuItem>
          <MenuItem>Favorites</MenuItem>
          <MenuItem>Tools</MenuItem>
          <MenuItem>Help</MenuItem>
        </MenuBar>
        <AddressBar>
          <AddressLabel>Address</AddressLabel>
          <AddressInput value={url} onChange={(e) => setUrl(e.target.value)} />
        </AddressBar>
      </Toolbar>
      <Content>
        <MuhaFilm />
      </Content>
    </Container>
  );
}
