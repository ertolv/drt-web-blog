import React from "react";
import { Row } from "../../base";
import { FacebookIcon, InstagramIcon } from "../../icons";
import { theme } from "../../utils/theme";
import { facebookUrl, instagramUrl } from "../../utils/links";
import { TSvgProps } from "../../utils/types";
import { BASE } from "../../utils/strings";
import { Text } from "../../typography";
import { useViewport } from "../../hooks";

export const Footer: React.FC = () => {
  const [isHovering, setIsHovering] = React.useState<number | null>(null);
  const { width } = useViewport();
  const BREAKPOINT = 1024;

  const iconProps: TSvgProps = {
    style: {
      cursor: "pointer",
      margin: "0px 5px",
    },
    role: "button",
  };

  const commonRowStyle: React.CSSProperties = {
    alignItems: "center",
  };

  return (
    <Row
      style={{
        position: "relative",
        padding: width > BREAKPOINT ? "26px 120px" : "26px 22px",
        backgroundColor: theme.color.meadow,
        justifyContent: "space-between",
        flexDirection: width < BREAKPOINT ? "column" : "row",
        ...commonRowStyle,
      }}
    >
      <Row
        style={{
          ...commonRowStyle,
          position: width > BREAKPOINT ? "absolute" : "relative",
          paddingTop: width > BREAKPOINT ? 0 : 20,
          paddingBottom: width > BREAKPOINT ? 0 : 15,
          left: 0,
          right: 0,
          width: 293,
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Text
          fontWeight={"bold"}
          fontSize={18}
          lineHeight={25}
          color={theme.color.white1}
          style={{
            width: 82,
            paddingRight: 15,
          }}
        >
          {BASE.FOLLOW_ME}
        </Text>
        <FacebookIcon
          onClick={() => window.open(facebookUrl, "_blank")}
          onMouseEnter={() => setIsHovering(1)}
          onMouseLeave={() => setIsHovering(null)}
          color={isHovering === 1 ? theme.color.blue6 : theme.color.white1}
          {...iconProps}
        />
        <InstagramIcon
          onClick={() => window.open(instagramUrl, "_blank")}
          onMouseEnter={() => setIsHovering(2)}
          onMouseLeave={() => setIsHovering(null)}
          color={isHovering === 2 ? theme.color.red1 : theme.color.white1}
          {...iconProps}
        />
      </Row>
    </Row>
  );
};
