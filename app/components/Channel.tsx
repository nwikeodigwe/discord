"use client";
export interface Channel {
  id: number;
  label: string;
  icon: string;
  messages: {
    id: number;
    user: string;
    avatarUrl: string;
    date: string;
    text: string;
  }[];
  description?: undefined;
  unread?: undefined;
}
