import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />
            <main className={styles.main}>
            
            <h1>Replay Sourcemap Configuration Example</h1>
            <h2>See the <a href="https://docs.replay.io/reference/replay-cli/source-maps" style={{color: "default"}}>Replay Sourcemap Upload docs</a></h2>
              {children}
              </main>

            
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
