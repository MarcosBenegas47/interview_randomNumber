"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { getPost } from "./service/randomNumberApi";
import { useState } from "react";
import Confetti from "react-dom-confetti";
import { config } from "@/config";


export default function Home() {
  const [num, setNum] = useState(null);
  const [ConfettiActive, setConfettiActive] = useState(false);
  
  //aca se llama a la api 
  const handleClik =()=>{
    getPost().then(data =>{
      setNum(data)
      setConfettiActive(true)
    })  
  }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Ruelta de numeros aleatorios</h1>
        {num!== null&& (<p key={num} className={styles.number}>{num}</p>)}
        <div className={styles.ctas}>
          <button
          onClick={handleClik}
            className={styles.btnRuleta}
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Girar Ruelta
          </button>

        </div>
        <Confetti active={ConfettiActive} config={config} />

      </main>
      
    </div>
  );
}
