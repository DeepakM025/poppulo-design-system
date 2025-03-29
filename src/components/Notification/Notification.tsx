import React, { useState, useEffect } from "react";
import { 
  CardWrapper, 
  Icon, 
  CloseButton, 
  Content, 
  Title, 
  Description 
} from "./Notification.styles";

export interface NotificationProps {
  title: string;
  description: string;
  duration?: number;
  status?: "success" | "error";
}

const Notification: React.FC<NotificationProps> = ({ 
  title, 
  description, 
  duration = 5000, 
  status = "success" 
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <CardWrapper status={status}>
      <Icon status={status}>
        {status === "success" ? "✔" : "✖"} {/* Tick for success, Cross for error */}
      </Icon>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <CloseButton onClick={() => setVisible(false)}>×</CloseButton>
    </CardWrapper>
  );
};

export default Notification;
