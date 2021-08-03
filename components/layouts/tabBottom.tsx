import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { WrapTabBottom, TabBottomStyle, Container } from "./styled";

const TabBottom = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <WrapTabBottom>
      <Container>
        <TabBottomStyle>
          <div className={pathname === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </div>
          <div className={pathname === "/my-list" ? "active" : ""}>
            <Link href="/my-list">My List Pokemon</Link>
          </div>
        </TabBottomStyle>
      </Container>
    </WrapTabBottom>
  );
};

export default TabBottom;
