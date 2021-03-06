import { styled } from "../../../utils/theme";

const SideBase = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  z-index: 1;
`;

export const HeaderWrapper = styled.div<{
  brightTheme?: boolean;
  shouldPin?: boolean;
}>`
  height: 95px;
  width: 100%;
  z-index: 1999;
  transition: 0.2s;
  ${({ theme, shouldPin }) => `background: ${theme.color.meadow};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  position: ${shouldPin ? "fixed" : "relative"};
  top: ${shouldPin ? "0" : "unset"};
  `}
  zoom: 90%;
`;

export const HeaderLayer = styled.div`
  height: 35px;
  top: 20px;
  width: 100%;
  position: absolute;
  background: ${({ theme }) => theme.color.moss};
`;

export const StyledHeader = styled.header<{ brightTheme?: boolean }>`
  width: calc(100% - 240px);
  height: 36px;
  padding: 22px 76px;
  display: flex;
  flex-direction: row;
  transition: 0.2s;
  background: ${({ theme, brightTheme }) =>
    brightTheme ? theme.color.white1 : theme.color.moss};
`;

export const LeftSide = styled(SideBase)`
  justify-content: flex-start;
`;

export const RightSide = styled(SideBase)`
  justify-content: flex-end;
`;
