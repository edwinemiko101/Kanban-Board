import styled from "styled-components";
import { Badge as TBadge } from "@chakra-ui/core";

const selectBadgeColor = (priority) => {
  return (
    {
      high: "red",
      medium: "green",
      low: "blue",
    }[priority] || "blue"
  );
};

export const Badge = styled(TBadge).attrs((props) => ({
  variantColor: selectBadgeColor(props.priority),
  rounded: "md",
  fontSize: "10px",
  p: "5px",
  variant: "subtle",
}))``;
