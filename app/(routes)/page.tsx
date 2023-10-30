import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {

    const billboard = await getBillboard("4e0a63ac-408a-48ae-b118-f137b260b40b");
    const products = await getProducts({ isFeatured: true });

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;
