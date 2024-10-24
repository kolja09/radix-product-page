import { Box, Flex, Text, Button, Select } from "@radix-ui/themes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import notFound from "../../assets/no-results.png";

import { addToCart } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";
import { TProduct } from "../../redux/slices/productSlice";

import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.product);

  const product: TProduct | undefined = products.find(
    (p) => p.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState<string>(
    product?.images[0] || ""
  );

  const handleAddToCart = (product: TProduct) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      })
    );
  };

  if (!product) {
    return (
      <Flex
        direction="column"
        gap="4"
        width="100%"
        justify="center"
        align="center"
        mt="9"
      >
        <img src={notFound} alt="no results" />
        <Text size="5" className={styles.noResultsText}>
          Not found
        </Text>
        <Link className={styles.goBack} to="/">
          Go back
        </Link>
      </Flex>
    );
  }

  return (
    <Box className={styles.productDetails}>
      <Flex className={styles.gallery}>
        <Box className={styles.thumbnailList}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product Image ${index + 1}`}
              className={`${styles.thumbnail} ${
                img === selectedImage ? styles.active : ""
              }`}
              onMouseEnter={() => setSelectedImage(img)}
            />
          ))}
        </Box>

        <Box className={styles.mainImageContainer}>
          <img
            src={selectedImage}
            alt="Selected Product"
            className={styles.mainImage}
          />
        </Box>
      </Flex>

      <Box className={styles.productInfo}>
        <Flex direction="column" gap="5">
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <Flex gap="3">
            <Select.Root size="3" defaultValue={product.options.size[0]}>
              <Select.Trigger
                placeholder="Select Size"
                color="orange"
                variant="soft"
              />
              <Select.Content color="orange">
                {product.options.size.map((size, index) => (
                  <Select.Item key={index} value={size}>
                    {size}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>

            <Select.Root size="3" defaultValue={product.options.color[0]}>
              <Select.Trigger
                placeholder="Select Color"
                color="cyan"
                variant="soft"
              />
              <Select.Content color="cyan">
                {product.options.color.map((color, index) => (
                  <Select.Item key={index} value={color}>
                    {color}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Flex>
        </Flex>
        <Button
          size="4"
          color="blue"
          className={styles.buttonCursor}
          onClick={() => {
            handleAddToCart(product);
          }}
        >
          Add to Cart - ${product.price}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
