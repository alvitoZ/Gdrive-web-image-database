import BlankTemplate from "@/components/templates/BlankTemplate";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Form from "@/components/molecules/Form";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { api } from "@/utils/api";
import { data, datas } from "types/data";

type Images = Omit<data, "name" | "desc">;

type Props = {
  datas: datas;
  images: Images[];
};

const index = ({ datas, images }: Props) => {
  const DynamicComponentWithNoSSR = dynamic(
    () => import("../components/molecules/Section1"),
    { ssr: false }
  );

  return (
    <BlankTemplate>
      <PrimaryNavigation />
      <h1>Test Gdrive as Database Form Image</h1>
      <Form />
      <DynamicComponentWithNoSSR images={images} datas={datas} />
    </BlankTemplate>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await api.get("/api/server");
  return {
    props: {
      datas: data.data,
      images: data.data,
    },
  };
};
