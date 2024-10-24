import { Flex, Box, Text } from "@radix-ui/themes";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import CartDrawer from "../CartDrawer/CartDrawer";

import { RootState } from "../../redux/store";

import basket from "../../assets/basket.png";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className={styles.header}>
      <Flex justify="between" align="center" className={styles.headerContainer}>
        <Box>
          <Text size="5" weight="bold" className={styles.logo}>
            <Link to="/">ShopNest</Link>
          </Text>
        </Box>

        <Flex
          onClick={() => setIsCartOpen(true)}
          align="center"
          gap="2"
          className={styles.cartContainer}
        >
          <img className={styles.basket} src={basket} alt="basket" />
          {!!totalQuantity && (
            <Text size="4" className={styles.cartCount}>
              {totalQuantity}
            </Text>
          )}
        </Flex>
      </Flex>
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
