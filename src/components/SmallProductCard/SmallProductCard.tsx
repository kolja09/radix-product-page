import { Box, Button, Flex, Select } from "@radix-ui/themes";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart } from "../../redux/slices/cartSlice";
import { TProduct } from "../../redux/slices/productSlice";

import ImageSlider from "../ImageSlider/ImageSlider";

import styles from "./SmallProductCard.module.css";

export const SmallProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useDispatch();

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

  return (
    <Box className={styles.productCard}>
      <Box className={styles.imageContainer}>
        <ImageSlider images={product.images} />
      </Box>

      <Box className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>

        <Flex className={styles.optionsContainer}>
          <Flex align="center" justify="between" className={styles.options}>
            <Flex gap="2">
              <Select.Root size="2" defaultValue={product.options.size[0]}>
                <Select.Trigger
                  placeholder="Size"
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

              <Select.Root size="2" defaultValue={product.options.color[0]}>
                <Select.Trigger
                  placeholder="Color"
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
            <Link className={styles.link} to={`/products/${product.id}`}>
              View Details
            </Link>
          </Flex>

          <Button
            className={styles.buttonCursor}
            size="3"
            color="blue"
            variant="soft"
            onClick={() => handleAddToCart(product)}
          >
            Add - ${product.price}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
