export type MenuItem = {
  url: string;
  name: string;
};

export const menulist: MenuItem[] = [
  {
    url: "/",
    name: "ホーム",
  },
  {
    url: "game",
    name: "ゲーム一覧",
  },
  {
    url: "article",
    name: "記事",
  },
  {
    url: "policy",
    name: "プライバシーポリシー",
  },
];
