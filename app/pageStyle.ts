import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeadTitle = styled.h1`
  font-size: 4rem;
`;

export const Description = styled.span`
  font-size: 2rem;
  text-align: center;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  position: absolute;
  width: 100%;
  height: 50px;
  font-size: 2rem;
  text-align: center;
`;

export const SearchButton = styled.button`
  position: absolute;
  width: 100px;
  height: 35px;
  right: 10px;
`;
