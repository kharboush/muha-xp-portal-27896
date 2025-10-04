import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Sidebar = styled.div`
  width: 200px;
  background: linear-gradient(180deg, #0b4eff 0%, #0095ff 100%);
  color: white;
  padding: 16px;
  font-size: 12px;
`;

const MainArea = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
`;

const DriveIcon = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin: 10px;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    background: #e8f4ff;
  }
`;

const IconImage = styled.div`
  width: 48px;
  height: 48px;
  background: #ccc;
  border-radius: 4px;
  margin-bottom: 4px;
`;

const IconLabel = styled.div`
  font-size: 11px;
  text-align: center;
`;

export default function MyComputer() {
  return (
    <Container>
      <Sidebar>
        <h3>System Tasks</h3>
        <div style={{ marginTop: 12, fontSize: 11 }}>
          <div>View system information</div>
          <div>Add or remove programs</div>
          <div>Change a setting</div>
        </div>
      </Sidebar>
      <MainArea>
        <h2 style={{ fontSize: 14, marginBottom: 16 }}>Files Stored on This Computer</h2>
        <DriveIcon>
          <IconImage />
          <IconLabel>Local Disk (C:)</IconLabel>
        </DriveIcon>
        <DriveIcon>
          <IconImage />
          <IconLabel>DVD Drive (D:)</IconLabel>
        </DriveIcon>
      </MainArea>
    </Container>
  );
}
