import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = () => {
  return { notFound: true };
};

export default function Home() {
  return null;
}
