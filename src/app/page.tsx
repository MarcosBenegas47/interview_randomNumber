"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { getPost } from "./service/randomNumberApi";
import { useState } from "react";
import Confetti from "react-dom-confetti";

const config = {
  position: 'fixed', pointerEvents: 'none',
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 143,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
}

export default function Home() {
  const [num, setNum] = useState(null);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const HandleClik =()=>{
    getPost().then(data =>{
      setNum(data)
      setIsConfettiActive(true)

    })  
  }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Ruelta de numeros aleatorios</h1>
        {num!== null&& (<p key={num} className={styles.number}>{num}</p>)}
        <div className={styles.ctas}>
          <button
          onClick={HandleClik}
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
        <Confetti active={isConfettiActive} config={config} />

      </main>
      
    </div>
  );
}
