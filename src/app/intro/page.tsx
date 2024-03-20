"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Image from "../../../node_modules/next/image";
import img1 from "../../../public/1.png";
import img2 from "../../../public/2.png";
import img3 from "../../../public/3.png";
import img5 from "../../../public/5.png";

const page = () => {
  const [numbering, setNumbering] = useState(1);
  const returnComponent = () => {
    if (numbering === 1) {
      return (
        <>
          <Image1 />
          <br />
          <Intro1 />
        </>
      );
    } else if (numbering === 2) {
      return (
        <>
          <Image2 />
          <br />
          <Intro2 />
        </>
      );
    } else if (numbering === 3) {
      return (
        <>
          <Image3 />
          <br />
          <Intro3 />
        </>
      );
    } else if (numbering === 4) {
      return (
        <>
          <Intro4 />
        </>
      );
    } else if (numbering === 5) {
      return (
        <>
          <Image5 />
          <br />
          <Intro5 />
        </>
      );
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {/* <Image1 />
        <Intro1 /> */}
        {returnComponent()}
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setNumbering(numbering + 1);
        }}
      >
        다음
      </button>
      <button>시작하기</button>
    </div>
  );
};

const Image1 = () => {
  return (
    <>
      <Image src={img1} className={styles.img1} alt="img1" />
    </>
  );
};

const Image2 = () => {
  return (
    <>
      <Image src={img2} className={styles.img2} alt="img2" />
    </>
  );
};

const Image3 = () => {
  return (
    <>
      <Image src={img3} className={styles.img3} alt="img3" />
    </>
  );
};

const Image4 = () => {
  return <></>;
};

const Image5 = () => {
  return (
    <>
      <Image src={img5} className={styles.img5} alt="img5" />
    </>
  );
};

const Intro1 = () => {
  return (
    <>
      <h2>
        안녕 ! 나는 견습신령 모리라고해
        <br />
        혹시 괜찮으면 나를 도와줄 수 있을까 ?
      </h2>
    </>
  );
};

const Intro2 = () => {
  return (
    <>
      <h2>
        어려운 일은 아니니까 걱정하지마 !
        <br />
        나는 사람들에게 행운의 기운을 나누어주라는
        <br />
        천신님의 명령을 받은 견습신령이야
      </h2>
    </>
  );
};

const Intro3 = () => {
  return (
    <>
      <h2>
        인간들의 행운이 하늘을 덮을 때
        <br />
        비로소 천신님의 명을 완수하고
        <br />
        신선이 되어 천계로 돌아갈수가 있어 . . !
      </h2>
    </>
  );
};

const Intro4 = () => {
  return (
    <>
      <h2>
        친구에게 행운을 선물하고 무운을 빌어보는거지 !
        <br />
        어때, 나를 도와줄 수 있을까 ?
      </h2>
    </>
  );
};

const Intro5 = () => {
  return (
    <>
      <h3>
        그럼 ! 모리의 도움을 받아 <br />
        친구에게 선물할 아주 특별한 <br />
        오마모리를 만들러가요 !
      </h3>
    </>
  );
};

export default page;
