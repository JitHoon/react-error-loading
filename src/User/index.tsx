import { lazy, Suspense } from "react";

const UserInfo = lazy(() => import("./UserInfo"));
import UserInfoSkeleton from "./UserInfo/index.skeleton";
import Alarm from "./Alarm";
import AlarmSkeleton from "./Alarm/index.skeleton";

const User = () => (
  <Suspense
    fallback={
      <>
        <UserInfoSkeleton />
        <AlarmSkeleton />
      </>
    }
  >
    {/* 
    Suspense 하위에 비동기 데이터 불러오기가 여러 개 있을 경우, Suspense는 마치 Promise.all 처럼 동작합니다.
    이 컴포넌트에서는 UserInfo와 Alarm 컴포넌트가 모두 로딩되기 전까지 fallback이 사용자에게 노출됩니다.
  */}
    <>
      <UserInfo />
      <Alarm />
    </>
  </Suspense>
);

export default User;
