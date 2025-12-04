import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Track my order",
    prompt: "I want to track my order status",
    icon: "circle-question",
  },
  {
    label: "Return or exchange",
    prompt: "I need help with a return or exchange",
    icon: "circle-question",
  },
  {
    label: "Product questions",
    prompt: "I have questions about a product",
    icon: "circle-question",
  },
  {
    label: "Payment issues",
    prompt: "I'm having trouble with payment",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask about orders, products, returns, or anything else...";

export const GREETING = "Hello! I'm here to help with your e-commerce questions. What can I assist you with today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#60a5fa" : "#3b82f6",
      level: 2,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
