import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { LandingPageTabs } from "../../_models/Tabs";
import Person from "./Person";
import PersonDetail from "./PersonDetail";
import Quote from "./Quotes";
import { useStyles } from "./style";

export default function LandingPage() {
  const { tab } = useParams();
  const styles = useStyles();

  const renderTabs = () => {
    switch (tab) {
      case LandingPageTabs.persons:
        return <Person />;
      case LandingPageTabs.personDetails:
        return <PersonDetail />;
      case LandingPageTabs.quotes:
        return <Quote />;
      default:
        return <div></div>;
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      {renderTabs()}
    </div>
  );
}
