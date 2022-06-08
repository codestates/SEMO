import styled from "styled-components";
import { useState, useCallback } from "react";
import dropdownItems from "../data/dropdownItems";
import Button from "./button";

export const DropdownContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5vw;
`;

export const DropdownBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownSelect = styled.p`
  font-weight: bold;
`;

export const DropdownMenu = styled.div`
  display: ${(props) => (props.isActive ? `flex` : `none`)};
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: white;
  position: absolute;
  box-sizing: border-box;
`;

export const DropdownItemContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background-color: #a573ff;
  border: 2px solid #7a57d1;
  border-radius: 10px;
  padding: 5px 7px;
  width: 70px;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemName = styled.p`
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const Dropdown = () => {
  // 드롭다운 상태 저장
  const [isActive, setIsActive] = useState(false);

  // 선택된 드롭다운 아이템 저장
  const [item, setItem] = useState(null);

  // 드롭다운 토글 기능을 수행하는 함수
  const onActiveToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  // 드롭다운 아이템을 선택했을때 실행되는 함수
  // 클릭 이벤트가 아이템에서 클릭 됐는지, 드롭다운 박스를 클릭했는지에 따라 조건을 설정
  const onSelectItem = useCallback((e) => {
    const targetId = e.target.id;
    if (targetId === "item_name") {
      setItem(e.target.parentElement.innerText);
    } else if (targetId === "item") {
      setItem(e.target.innertText);
    }

    // 드롭다운 아이템을 클릭했으면 드롭다운을 닫는다
    setIsActive((prev) => !prev);
  }, []);

  return (
    <DropdownContainer>
      <DropdownBody>
        {/* 선택된 아이템이 있다면 드롭다운 기본 메뉴에 선택된 item이 나타나도록한다 */}
        {item ? (
          <>
            <Button onClick={onActiveToggle}>{item}</Button>
          </>
        ) : (
          <>
            <Button onClick={onActiveToggle}>학교</Button>
          </>
        )}
      </DropdownBody>
      {/* 드롭다운 기능을 수행하기 위해 styled-components에 active변수를 넘긴다 */}
      {/* active가 true일때와 false일때 */}
      <DropdownMenu isActive={isActive}>
        {dropdownItems.map((item) => (
          <DropdownItemContainer id="item" key={item.id} onClick={onSelectItem}>
            <ItemName id="item_name">{item.name}</ItemName>
          </DropdownItemContainer>
        ))}
      </DropdownMenu>

      <DropdownBody>
        {item ? (
          <>
            <Button onClick={onActiveToggle}>{item}</Button>
          </>
        ) : (
          <>
            <Button onClick={onActiveToggle}>학년</Button>
          </>
        )}
      </DropdownBody>
      <DropdownMenu isActive={isActive}>
        {dropdownItems.map((item) => (
          <DropdownItemContainer id="item" key={item.id} onClick={onSelectItem}>
            <ItemName id="item_name">{item.name}</ItemName>
          </DropdownItemContainer>
        ))}
      </DropdownMenu>

      <DropdownBody>
        {item ? (
          <>
            <Button onClick={onActiveToggle}>{item}</Button>
          </>
        ) : (
          <>
            <Button onClick={onActiveToggle}>과목</Button>
          </>
        )}
      </DropdownBody>
      <DropdownMenu isActive={isActive}>
        {dropdownItems.map((item) => (
          <DropdownItemContainer id="item" key={item.id} onClick={onSelectItem}>
            <ItemName id="item_name">{item.name}</ItemName>
          </DropdownItemContainer>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
