import {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { Box, Button, Flex, Select, TextField, Text } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { BigProductCart } from "../../components/BigProductCard/BigProductCart";
import { SmallProductCard } from "../../components/SmallProductCard/SmallProductCard";

import { useWindowWidth } from "../../common/hooks/useWindowWidth";
import { PER_PAGE } from "../../common/consts/page";

import noResults from "../../assets/no-results.png";
import { RootState } from "../../redux/store";

import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { products } = useSelector((state: RootState) => state.product);

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("search") || ""
  );
  const [visibleCount, setVisibleCount] = useState<number>(
    Number(searchParams.get("page")) || PER_PAGE
  );
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [isLargeCard, setIsLargeCard] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const windowWidth = useWindowWidth();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const loadMoreProducts = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + PER_PAGE);
      setLoading(false);
    }, 1000);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
  }, [products, searchTerm, sortOrder]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  useEffect(() => {
    const params: Record<string, string> = {
      search: searchTerm,
      page: String(visibleCount > PER_PAGE ? visibleCount : PER_PAGE),
    };

    setSearchParams(params);
  }, [searchTerm, visibleCount, setSearchParams]);

  useLayoutEffect(() => {
    if (windowWidth <= 580) {
      setIsLargeCard(false);
    }
  }, [windowWidth]);

  return (
    <Box className={styles.productPage}>
      <Flex className={styles.filterPanel}>
        <TextField.Root
          className={styles.stylesSearch}
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search"
          size="3"
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>

        <Flex gap="6" align="center" className={styles.sortContainer}>
          <Select.Root
            size="3"
            value={sortOrder}
            onValueChange={(value) => setSortOrder(value)}
          >
            <Select.Trigger
              className={styles.sortSelectTrigger}
              aria-label="Sort Order"
              placeholder="Sort by Price"
            />

            <Select.Content color="blue">
              <Select.Item value="asc">Price: Low to High</Select.Item>
              <Select.Item value="desc">Price: High to Low</Select.Item>
            </Select.Content>
          </Select.Root>

          <Box className={styles.toggleButtons}>
            <Box
              className={`${styles.toggleButton} ${
                isLargeCard ? styles.active : ""
              }`}
              onClick={() => setIsLargeCard(true)}
            >
              Large
            </Box>
            <Box
              className={`${styles.toggleButton} ${
                !isLargeCard ? styles.active : ""
              }`}
              onClick={() => setIsLargeCard(false)}
            >
              Small
            </Box>
          </Box>
        </Flex>
      </Flex>

      {!visibleProducts.length ? (
        <Flex
          direction="column"
          gap="4"
          width="100%"
          justify="center"
          align="center"
          mt="7"
        >
          <img src={noResults} alt="no results" />
          <Text size="5" className={styles.noResultsText}>
            No results found
          </Text>
        </Flex>
      ) : (
        <Box
          className={`${styles.productList} ${
            isLargeCard ? styles.large : styles.small
          }`}
        >
          {visibleProducts.map((product) =>
            isLargeCard ? (
              <BigProductCart key={product.id} product={product} />
            ) : (
              <SmallProductCard key={product.id} product={product} />
            )
          )}
        </Box>
      )}

      {visibleCount < filteredProducts.length && (
        <Flex width="100%" justify="center" align="center" mt="4">
          <Button
            className={styles.stylesButton}
            color="blue"
            size="4"
            disabled={loading}
            onClick={loadMoreProducts}
          >
            {loading ? "Loading..." : "Load More"}
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default ProductPage;
