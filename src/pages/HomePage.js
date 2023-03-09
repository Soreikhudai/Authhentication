import { Fragment } from "react";
import MainNavigation from "../components/Layout/MainNavigation";
import StartingPageContent from "../components/StartingPage/StartingPageContent";

const HomePage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <StartingPageContent />
    </Fragment>
  );
};

export default HomePage;
