import Icon, { type IconName } from "./Icon";

/**
 * Renders the brand SVG icon for an emoji that existing page data uses as an "icon" field,
 * so content data stays as it is while the site shows one consistent icon style.
 * Sized at 1em to inherit the font size the emoji used before; colour is currentColor.
 * Unknown emoji fall back to a neutral check mark. Decorative (aria-hidden), like the emoji it replaces.
 */
const MAP: Record<string, IconName> = {
  "📦": "box", "🚚": "truck", "🚛": "truck", "✅": "check", "✓": "check", "🏭": "warehouse", "📋": "document", "🔍": "search", "🔎": "search",
  "🛒": "cart", "📊": "chart", "📈": "chart", "🏷️": "label", "🏷": "label", "🏢": "building", "🏙️": "building", "🏛️": "building", "🚢": "ship", "⚓": "ship",
  "📞": "phone", "📱": "phone", "📲": "phone", "🛍️": "cart", "🛍": "cart", "🏪": "building", "🌍": "globe", "🌐": "globe", "🗺️": "map", "💬": "chat", "🗣️": "chat",
  "📬": "inbox", "📫": "inbox", "📥": "inbox", "📧": "mail", "🏗️": "warehouse", "⚡": "bolt", "📍": "pin", "🔢": "layers", "🔄": "refresh", "🔀": "refresh",
  "🍽️": "utensils", "💷": "pound", "📅": "calendar", "🗓": "calendar", "🗓️": "calendar", "🗂️": "layers", "⚙️": "settings", "⚙": "settings", "🚀": "rocket",
  "⚖️": "shield", "🔗": "link", "✈️": "plane", "✈": "plane", "🤝": "handshake", "🏃": "activity", "🏋️": "activity", "📡": "activity", "🔋": "battery",
  "👤": "user", "🔒": "lock", "📄": "document", "🧾": "document", "📖": "book", "👁️": "eye", "🧱": "pallet", "💻": "scan", "🏆": "trophy", "✨": "star",
  "⚠️": "warning", "⚠": "warning", "🇬🇧": "globe", "🇹🇷": "globe",
};

export function emojiIcon(e: string): IconName {
  return MAP[e.trim()] ?? MAP[e.trim().replace(/️/g, "")] ?? "check";
}

export default function Emoji({ e, className = "inline-block h-[1em] w-[1em] align-[-0.125em]" }: { e: string; className?: string }) {
  return <Icon name={emojiIcon(e)} className={className} />;
}
