"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./page.module.scss";
import img2 from "../../../public/process_2.png";
import Image from "../../../node_modules/next/image";
import love from "../../../public/love.png";
import { useRouter } from "../../../node_modules/next/navigation";

const category = () => {
  const [checkpoint, setCheckpoint] = useState(0);
  const onSetCheckpoint = (num: number) => {
    setCheckpoint(checkpoint + num);
  };
  const resetCheckpoint = () => {
    setCheckpoint(0);
  };
  return (
    <div className={styles.main}>
      <div className={styles.upper}>
        {/* <SelectCategory updateState={onSetCheckpoint} /> */}
        <LoadingComponent />
        {/* <Result resetState={resetCheckpoint} /> */}
      </div>
    </div>
  );
};
const SelectCategory = (props: any) => {
  const [categories, setCategories] = useState<string[]>([
    "건강",
    "연애",
    "금전",
    "성공",
    "학업",
    "교통안전",
    "가내안전",
    "평안",
    "합격",
    "액막이",
    "신학기",
    "무탈",
  ]);
  return (
    <>
      <h2>친구에게 어떤 행운을 전해주고싶어요?</h2>
      <div className={styles.categoryBox}>
        {categories &&
          categories.map((a: any, i: any) => {
            return (
              <div key={i}>
                <button
                  onClick={() => {
                    props.updateState(1);
                  }}
                  key={a}
                >
                  {a}
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

const LoadingComponent = () => {
  return (
    <>
      <h2>모리가 기운을 불어넣고있어요</h2>
      <div className={styles.content}>
        <Image src={img2} alt="2" className={styles.img2} />
        <button>스피너</button>
      </div>
    </>
  );
};

const Result = (props: any) => {
  const router = useRouter();
  return (
    <>
      <h2>우와, 아름다운 색의 오마모리에요!</h2>
      <div className={styles.resultBox}>
        <Image src={love} alt="love" className={styles.love} />
        <div>
          <button
            onClick={() => {
              props.resetState;
            }}
          >
            다시선택
          </button>
          <button
            onClick={() => {
              router.push("/customize");
            }}
          >
            다음으로
          </button>
        </div>
      </div>
    </>
  );
};

export default category;
