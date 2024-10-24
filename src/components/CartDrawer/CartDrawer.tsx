import React from "react";
import { Button, Flex, Text, IconButton, Box } from "@radix-ui/themes";
import { useSelector, useDispatch } from "react-redux";
import * as Dialog from "@radix-ui/react-dialog";

import { Cross2Icon, PlusIcon, MinusIcon } from "@radix-ui/react-icons";

import emptyCart from "../../assets/empty-cart.png";

import { RootState } from "../../redux/store";

import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../redux/slices/cartSlice";

import styles from "./CartDrawer.module.css";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.drawer}>
          <Dialog.Title className={styles.visuallyHidden}>
            <Flex justify="between" align="center" className={styles.header}>
              <Text className={styles.title}>Your Cart</Text>
              <IconButton className={styles.closeButton} onClick={onClose}>
                <Cross2Icon width={24} height={24} />
              </IconButton>
            </Flex>
          </Dialog.Title>

          <Box className={styles.cartItems}>
            {!cartItems.length ? (
              <Flex className={styles.noData}>
                <img
                  src={emptyCart}
                  alt="empty cart"
                  className={styles.emptyIcon}
                />
                <Text className={styles.emptyText}>Your cart is empty.</Text>
              </Flex>
            ) : (
              cartItems.map((item) => (
                <Flex
                  key={item.id}
                  align="center"
                  justify="between"
                  className={styles.cartItem}
                >
                  <Text size="4" className={styles.productName}>
                    {item.name}
                  </Text>

                  <Box className={styles.counter}>
                    <IconButton
                      className={styles.counterButton}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <MinusIcon />
                    </IconButton>

                    <Text size="4" className={styles.quantity}>
                      {item.quantity}
                    </Text>

                    <IconButton
                      className={styles.counterButton}
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <PlusIcon />
                    </IconButton>
                  </Box>

                  <Text size="4" className={styles.itemPrice}>
                    ${item.price * item.quantity}
                  </Text>
                </Flex>
              ))
            )}
          </Box>

          <Flex className={styles.footer}>
            <Text className={styles.total}>
              Total: ${totalPrice.toFixed(2)}
            </Text>

            <Flex className={styles.footerButtons}>
              <Button
                className={styles.clearButton}
                onClick={() => {
                  dispatch(clearCart());
                  onClose();
                }}
              >
                Clear and Close
              </Button>

              <Button color="blue" className={styles.checkoutButton}>
                Checkout
              </Button>
            </Flex>
          </Flex>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CartDrawer;
