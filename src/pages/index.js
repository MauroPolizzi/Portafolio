import Head from "next/head";
import HomeContainer from "@/features/home/container";
import MainLayout from "@/common/main-layout";
import { profile } from "@/Data/profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>{profile.name}</title>
      </Head>
      <MainLayout>
        <HomeContainer />
      </MainLayout>
    </>
  );
}
