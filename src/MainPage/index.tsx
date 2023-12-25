import { lazy, Suspense } from "react";
const Banner = lazy(() => import("../Banner"));
import BannerSkeleton from "../Banner/index.skeleton";
const CustomMenu = lazy(() => import("../CustomMenu"));
import CustomMenuSkeleton from "../CustomMenu/index.skeleton";
import User from "../User";
import { useFetchCategory } from "./hooks/queries/useFetchCategory";

const MainPage = () => {
  const { data } = useFetchCategory();

  return (
    <div>
      <header className="header">헤더</header>
      <section className="banner__container">
        <Suspense fallback={<BannerSkeleton />}>
          <Banner />
        </Suspense>
      </section>
      <main className="main">
        <nav className="custom-menu__container">
          <Suspense fallback={<CustomMenuSkeleton />}>
            <CustomMenu categories={data.categories} />
          </Suspense>
        </nav>
        <div className="user__container">
          <User />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
