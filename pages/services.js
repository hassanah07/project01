import React from "react";
import Head from "next/head";
import styles from "./Pages.module.css";

const services = () => {
  return (
    <>
      <Head>
        <title>Codesware || Our Services</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.noCard}>
            <div className={styles.tags}>
              <h2>Active Services Listed here</h2>
              <hr />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
