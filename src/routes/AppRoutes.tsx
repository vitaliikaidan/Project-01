import { Route, Routes } from "react-router-dom";
import Counter from "../components/Counter/Counter";
import GenderReveal from "../components/GenderReveal/GenderReveal";
import IdealWeightCalculator from "../components/IdealWeightCalculator/idealWeightCalculator";
import Nationalize from "../components/Nationalize/Nationalize";
import SpaceMissionForm from "../components/SpaceMissionForm/SpaceMissionForm";
import Layout from "../layouts/Layout";
import ProfileLayout from "../layouts/ProfileLayout";
import About from "../pages/About/About";
import CarPage from "../pages/CarPage/CarPage";
import Contacts from "../pages/Contacts/Contacts";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import ProductPage from "../pages/ProductPage/ProductPage";
import Profile from "../pages/Profile/Profile";
import ProfileData from "../pages/ProfileData/Profile";
import Settings from "../pages/Settings/Setings";
import UsersPage from "../pages/UsersPage/UsersPage";
import { ROUTES  as R} from "../shared/routes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={R.GENDER_REVEAL} element={<GenderReveal />} />
        <Route path={R.NATIONALIZE} element={<Nationalize />} />
        <Route path={R.COUNTER} element={<Counter />} />
        <Route path={R.SPACE_MISSION} element={<SpaceMissionForm />} />
        <Route path={R.IDEAL_WEIGHT} element={<IdealWeightCalculator />} />
        <Route path={R.CONTACTS} element={<Contacts />} />
        <Route path={R.ABOUT} element={<About />} />
        <Route path={R.PROFILE} element={<ProfileLayout />}>
          <Route path={R.PROFILE} element={<Profile />} />
          <Route path={R.PROFILE_DATA} element={<ProfileData />} />
          <Route path={R.PROFILE_SETTINGS} element={<Settings />} />
        </Route>
        <Route path={R.PRODUCT(":id")} element={<ProductPage />}></Route>
        <Route path="/cars/:model" element={<CarPage />}></Route>
        <Route path="/users" element={<UsersPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
