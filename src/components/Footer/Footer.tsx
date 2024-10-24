import React from "react";
import { Flex, Text, Box } from "@radix-ui/themes";

import github from "../../assets/github.png";
import telegram from "../../assets/telegram.png";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <Box className={styles.footer}>
      <Box className={styles.footerContainer}>
        <Text className={styles.creator}>
          © {new Date().getFullYear()} Created by kolja09. All rights reserved.
        </Text>

        <Flex gap="10" className={styles.icons}>
          <a
            href="https://github.com/kolja09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className={styles.icon} />
          </a>

          <a
            href="https://t.me/kolja09062005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="Telegram" className={styles.icon} />
          </a>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
