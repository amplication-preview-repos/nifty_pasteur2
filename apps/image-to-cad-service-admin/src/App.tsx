import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { CadFileList } from "./cadFile/CadFileList";
import { CadFileCreate } from "./cadFile/CadFileCreate";
import { CadFileEdit } from "./cadFile/CadFileEdit";
import { CadFileShow } from "./cadFile/CadFileShow";
import { ConversionJobList } from "./conversionJob/ConversionJobList";
import { ConversionJobCreate } from "./conversionJob/ConversionJobCreate";
import { ConversionJobEdit } from "./conversionJob/ConversionJobEdit";
import { ConversionJobShow } from "./conversionJob/ConversionJobShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ImageToCADService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="CadFile"
          list={CadFileList}
          edit={CadFileEdit}
          create={CadFileCreate}
          show={CadFileShow}
        />
        <Resource
          name="ConversionJob"
          list={ConversionJobList}
          edit={ConversionJobEdit}
          create={ConversionJobCreate}
          show={ConversionJobShow}
        />
      </Admin>
    </div>
  );
};

export default App;
