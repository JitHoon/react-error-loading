import { Suspense } from "react";
import Banner from "../Banner";
import BannerSkeleton from "../Banner/index.skeleton";
import CustomMenu from "../CustomMenu";
import CustomMenuSkeleton from "../CustomMenu/index.skeleton";
import User from "../User";
import { useFetchCategory } from "./hooks/queries/useFetchCategory";

const MainPage = () => {
  const { data } = useFetchCategory();

  //throw new Error("메인 페이지를 불러올 수 없습니다.");

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
