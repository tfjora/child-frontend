import { Tab, Tabs } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { LandingPageTabs } from "../../_models/Tabs";

export default function Header() {
  const navigate = useNavigate();
  const onChange = (value: LandingPageTabs | string) => {
    navigate(`/${value}`);
  };

  return (
    <div>
      <Tabs orientation="vertical">
        <Tab
          label={LandingPageTabs.person}
          value={LandingPageTabs.person}
          onClick={() => onChange(LandingPageTabs.person)}
        />
        <Tab
          label="Person detail"
          value={LandingPageTabs.personDetails}
          onClick={() => onChange(LandingPageTabs.personDetails)}
        />
        <Tab
          label="Quotes"
          value={LandingPageTabs.quotes}
          onClick={() => onChange(LandingPageTabs.quotes)}
        />
      </Tabs>
    </div>
  );
}
