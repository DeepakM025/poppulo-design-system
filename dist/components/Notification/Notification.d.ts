import React from "react";
export interface NotificationProps {
    title: string;
    description: string;
    duration?: number;
    status?: "success" | "error";
}
declare const Notification: React.FC<NotificationProps>;
export default Notification;
