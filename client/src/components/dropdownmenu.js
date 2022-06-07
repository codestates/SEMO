import styled from "styled-components";
import { useState, useCallback } from "react";
import { AiOutlineDown } from "react-icons/ai";
import dropdownItems from "../data/dropdownItems";

export const DropdownContainer = styled.div`
  width: 400px;

  &:hover {
    cursor: pointer;
  }
`;

export const DropdownBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 14px;
  border: 2px solid #d2d2d2;
`;

export const DropdownSelect = styled.p`
  font-weight: bold;
`;

export const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  width: 400px;
  background-color: white;
  position: absolute;
  border: 2px solid #f4acbb;
`;

export const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 9px 14px;
  border-bottom: 2px solid #d2d2d2;
  border-top: none;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemName = styled.p`
  font-weight: bold;
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
      console.log(e.target.parentElement.innerText);
    } else if (targetId === "item") {
      setItem(e.target.innerText);
      console.log(e.target.parentElement);
    }

    // 드롭다운 아이템을 클릭했으면 드롭다운을 닫는다
    setIsActive((prev) => !prev);
  }, []);

  return (
    <DropdownContainer>
      <DropdownBody onClick={onActiveToggle}>
        {/* 선택된 아이템이 있다면 드롭다운 기본 메뉴에 선택된 item이 나타나도록한다 */}
        {item ? (
          <>
            <ItemName>{item}</ItemName>
          </>
        ) : (
          <>
            <DropdownSelect>선택해주세요.</DropdownSelect>
            <AiOutlineDown />
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
    </DropdownContainer>
  );
};

export default Dropdown;
