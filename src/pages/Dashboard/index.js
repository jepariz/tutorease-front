import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import NavBar from "../../components/Dashboard/NavBar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <DashBoardBackground>
        <DashboardLayout>
          <NavBar />
          <Outlet/>
        </DashboardLayout>
      </DashBoardBackground>
      <Tooltip
        id="my-tooltip"
        style={{ backgroundColor: "#5F41B2", color: "#fefefe" }}
      />
    </>
  );
}

export default Dashboard;

const DashBoardBackground = styled.div`
  background-image: linear-gradient(
    to top,
    #dad4ec 0%,
    #dad4ec 1%,
    #f3e7e9 100%
  );
  background-size: cover;
  height: 100vh;
  padding: 20px;
`;

const DashboardLayout = styled.div`
  width: 100%;
  height: 620px;
  display: flex;
  background-color: #fefefe;
  border-radius: 20px;
`;

