import React from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import OverviewContent from '../components/dashboardContent/overviewContent/OverviewContent';
import { graphqlOperation } from 'aws-amplify';
import { Authenticator, Connect, SignIn } from 'aws-amplify-react';
import { listHouses } from '../graphql/queries';

function OverviewPage() {
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <div className="dashboard_content_container">
          <Authenticator />
          <Connect query={graphqlOperation(listHouses)}>
            {({ loading, data, errors }) =>
              loading ? <h3>Loading...</h3> : data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <pre>{JSON.stringify(errors, null, 2)}</pre>
            }
          </Connect>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
