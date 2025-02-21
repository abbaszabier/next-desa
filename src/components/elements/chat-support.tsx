"use client";

import { Send } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/chat/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { Button } from "../ui/button";
import { useChat } from "@ai-sdk/react";
import Image from "next/image";

export default function ChatSupport() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <ExpandableChat size="sm" position="bottom-right">
      <ExpandableChatHeader className="flex text-center gap-4 justify-start items-center">
        <Image
          src="/images/icons/icon-96x96.png"
          width={40}
          height={40}
          alt="Logo"
        />
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold">Chat Support Desa Tapos I</h1>
          <p className="text-sm text-muted-500">
            Kecamatan Tenjolaya, Kabupaten Bogor
          </p>
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              variant={message.role === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                src=""
                fallback={message.role === "user" ? "US" : "AI"}
              />
              <ChatBubbleMessage
                variant={message.role === "user" ? "sent" : "received"}
              >
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter className="relative bg-muted/25">
        <form
          className="flex items-center gap-2 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex-1">
            <ChatInput
              value={input}
              onChange={handleInputChange}
              className="min-h-8 bg-background shadow-none w-full"
            />
          </div>
          <Button type="submit" size="icon" disabled={!input}>
            <Send className="size-4" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
