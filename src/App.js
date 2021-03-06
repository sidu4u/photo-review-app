import { Provider } from 'react-redux'
import Header from "./components/Header";
import CurrentImage from "./containers/CurrentImage";
import ReviewedImage from "./containers/ReviewedImages";
import { PersistGate } from 'redux-persist/lib/integration/react';
import styled from "styled-components";
import configureStore from "./store";

const CenteredDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const WidthContainer = styled.div`
border: 30px solid;
border-color: rgba(43,51,209,0.9);
padding: 30px;
width:250px
`

const ApplicationName = styled(({className,data})=>{
  return <Header customClass={className} data={data}/>
})`
padding-bottom:10px;
border-bottom:1px solid;
border-color:rgba(0,0,0,0.1);
`;

const {store,persistor} = configureStore();

function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <CenteredDiv>
          <WidthContainer>
            <ApplicationName data={"Image Approval Application"}/>
            <ReviewedImage/>
            <CurrentImage/>
          </WidthContainer>
        </CenteredDiv>
      </PersistGate>
    </Provider>
  );
}

export default App;
