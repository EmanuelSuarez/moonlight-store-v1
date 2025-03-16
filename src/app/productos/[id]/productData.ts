import { GetStaticPaths } from 'next';

export const generateStaticParams: GetStaticPaths = async () => {
  // Fetch the list of product IDs from your data source
  const productIds = [1, 2, 3, 7]; // Replace with actual data fetching logic

  const paths = productIds.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: false };
};