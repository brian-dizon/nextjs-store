import ProductsContainer from "@/components/products/ProductsContainer";

interface ProductsPageProps {
  layout: string;
  search: string;
}

async function ProductsPage({ searchParams }: { searchParams: Promise<ProductsPageProps> }) {
  const { layout = "grid", search = "" } = await searchParams;
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;
