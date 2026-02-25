// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Toulouse",
    scale: "C",
  },
  clock: {
    format: "h:i",
    locale: "fr-FR",
    iconColor: palette.maroon,
  },
  additionalClocks: [{
    label: "NYC",
    timezone: "America/New_York",
    icon_color: palette.blue,
    format: "k:i p",
    locale: "en-US",
  }],
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "YouTube"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      w: ["https://en.wikipedia.org/wiki/", "Wikipedia"],
      s: ["https://stackoverflow.com/search?q=", "StackOverflow"],
      p: ["https://www.pinterest.com/search/pins/?q=", "Pinterest"],
    },
    default: "g",
  },
  keybindings: {
    "s": "search-bar",
    "c": "config-tab",
    "t": 'todo-list',
  },
  disabled: [],
  fastlink: "https://github.com/Xeaphones",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "free",
              url: "https://webmail.free.fr/?_task=mail&_mbox=INBOXs",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.peach,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [],
        },
        {
          name: "Ynov",
          links: [
            {
              name: "Extranet",
              url: "https://extranet.ynov.com/home",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "Webmail",
              url: "https://outlook.office.com/mail/inbox/id/AAQkAGIzNmJmOWY1LTdlNWQtNDAzZi1hNDdiLTUyN2NkZGMzYjdjMQAQAIy9oIZkd4xFoTlbCYiW0Y4%3D",
              icon: "mail",
              icon_color: palette.peach,
            },
            {
              name: "Moodle",
              url: "https://moodle.learn.ynov.com/my/",
              icon: "school",
              icon_color: palette.red,
            },
          ],
        }, 
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_06.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "gitlab",
              url: "https://gitlab.com",
              icon: "brand-gitlab",
              icon_color: palette.peach,
            },
            {
              name: "chatgpt",
              url: "https://www.chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.red,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.blue,
            },
            {
              name: "collab",
              url: "https://colab.research.google.com",
              icon: "notebook",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "hackernews",
              url: "https://news.ycohttps://annas-archive.org/mbinator.com",
              icon: "brand-redhat",
              icon_color: palette.green,
            },
            {
              name: "Anna's archive",
              url: "https://annas-archive.org/",
              icon: "books",
              icon_color: palette.peach,
            }
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_18.gif",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.green,
            },
            {
              name: "fmhy",
              url: "https://fmhy.net/",
              icon: "player-play",
              icon_color: palette.peach,
            }
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "infiniteBacklog",
              url: "https://infinitebacklog.net",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.blue,
            },
            {
              name: "netflix",
              url: "https://www.netflix.com",
              icon: "brand-netflix",
              icon_color: palette.mauve,
            }
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
