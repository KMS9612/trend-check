"use client";
import * as S from "./pageStyle";

export default function Home() {
  return (
    <S.Wrapper>
      <S.HeadTitle>TrendCheck</S.HeadTitle>
      <S.Description>네이버에서 이 단어가 얼마나 검색됬을까?</S.Description>
      <S.SearchBox>
        <S.SearchBar type="text" />
        <S.SearchButton>검색</S.SearchButton>
      </S.SearchBox>
    </S.Wrapper>
  );
}
