"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./page.module.scss";
import img2 from "../../../public/process_2.png";
import Image from "../../../node_modules/next/image";
import love from "../../../public/love.png";
import { useRouter } from "../../../node_modules/next/navigation";

const category = () => {
  // 컴포넌트 분기 설정
  const [checkpoint, setCheckpoint] = useState(0);
  // 카테고리 선택 값 저장
  const [selectedCategory, setSelectedCategory] = useState("");

  // 자식 컴포넌트에서 카테고리 선택 시 반영 함수
  const setCategoryName = (value: string) => {
    setTimeout(() => {
      setCategoryName(value);
    }, 1000);
  };

  // 카테고리 선택 후 다음 컴포넌트 표기
  const onSetCheckpoint = (num: number) => {
    setTimeout(() => {
      setCheckpoint(checkpoint + num);
    }, 1000);
  };
  // State 초기화 -> 카테고리 재선택
  const resetCheckpoint = () => {
    setCheckpoint(0);
  };

  const returnComponents = () => {
    if (checkpoint === 0) {
      return (
        <SelectCategory
          updateState={onSetCheckpoint}
          setCategoryName={setCategoryName}
        />
      );
    } else if (checkpoint === 1) {
      return <LoadingComponent updateState={onSetCheckpoint} />;
    } else if (checkpoint === 2) {
      return (
        <Result resetState={resetCheckpoint} categoryname={selectedCategory} />
      );
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.upper}>
        {/* <SelectCategory updateState={onSetCheckpoint} /> */}
        {/* <LoadingComponent /> */}
        {/* <Result resetState={resetCheckpoint} /> */}
        {returnComponents()}
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
                    props.setCategoryName(a);
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

const LoadingComponent = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.updateState(1);
    }, 3000);
  }, []);
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
              props.resetState();
            }}
          >
            다시선택
          </button>
          <button
            onClick={() => {
              router.push("/customize");
              // navigate("/customize", { state: props.categoryname });
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
