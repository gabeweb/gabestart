// Username displayed in greeting.
var userName = "gabeweb";

// Cards
var cards = [
  {
    name: "Email",
    bookmarks: {
      "Aol Mail": "https://mail.aol.com",
      "EtherMail": "https://ethermail.io/webmail",
      "Google Mail": "https://mail.google.com",
      "iCloud Mail": "https://icloud.com/mail",
      "OnMail": "https://mail.onmail.com",
      "Outlook": "https://mail.live.com",
      "Proton Mail": "https://mail.proton.me",
      "Skiff Mail": "https://mail.skiff.com",
      "Yahoo Mail": "https://mail.yahoo.com",
      "Yandex Mail": "https://mail.yandex.com",
    },
  },
  {
    name: "News",
    bookmarks: {
      "9to5Google": "https://9to5google.com",
      "9to5Linux": "https://9to5linux.com",
      "9to5Mac": "https://9to5mac.com",
      "Android Authority": "https://androidauthority.com",
      "Android Central": "https://androidcentral.com",
      "Android Police": "https://androidpolice.com",
      "AP News": "https://apnews.com",
      "Ars Technica": "https://arstechnica.com",
      "BBC News": "https://bbc.com",
      "Boing Boing": "https://boingboing.net",
      CNET: "https://cnet.com",
      "Daily Mail": "https://dailymail.co.uk",
      Decrypt: "https://decrypt.co",
      Digg: "https://digg.com",
      Electrek: "https://electrek.co",
      Forbes: "https://forbes.com",
      "Huawei Central": "https://huaweicentral.com",
      iMore: "https://www.imore.com",
      Insider: "https://insider.com",
      Inverse: "https://www.inverse.com/",
      MacWorld: "https://www.macworld.com",
      Mashable: "https://mashable.com",
      "Mental Floss": "https://mentalfloss.com",
      "Motor1.com": "https://www.motor1.com",
      Newsweek: "https://newsweek.com",
      "NY Times": "https://nytimes.com",
      NPR: "https://npr.org",
      "OMG Ubuntu!": "https://omgubuntu.co.uk",
      PCWorld: "https://www.pcworld.com",
      "Popular Mechanics": "https://popularmechanics.com",
      Quartz: "https://qz.com",
      Reuters: "https://reuters.com",
      "TechRadar Pro": "https://www.techradar.com/pro",
      TechRepublic: "https://www.techrepublic.com",
      TechSpot: "https://www.techspot.com",
      "The Atlantic": "https://www.theatlantic.com/",
      "The Guardian": "https://theguardian.com",
      "The Independent": "https://www.independent.co.uk/",
      "The Register": "https://www.theregister.com/",
      "The Verge": "https://theverge.com",
      TIME: "https://time.com",
      TNW: "https://thenextweb.com",
      "Tom's Guide": "https://www.tomsguide.com",
      Vox: "https://vox.com",
      "Wallpaper*": "https://www.wallpaper.com",
      "Windows Central": "https://windowscentral.com",
      XDA: "https://xda-developers.com",
      ZDNET: "https://zdnet.com",
    },
  },
  {
    name: "Social",
    bookmarks: {
      Bluesky: "https://bsky.app/",
      DEV: "https://dev.to",
      Discord: "https://discordapp.com",
      Facebook: "https://facebook.com",
      Hashnode: "https://hashnode.com",
      Instagram: "https://instagram.com",
      Mastodon: "https://mastodon.social",
      Messenger: "https://messenger.com",
      Plurk: "https://plurk.com",
      Quora: "https://quora.com",
      Reddit: "https://reddit.com",
      "Stack Exchange": "https://stackexchange.com",
      Telegram: "https://web.telegram.org",
      Threads: "https://threads.net",
      Tumblr: "https://tumblr.com",
      VK: "https://vk.com",
      WhatsApp: "https://web.whatsapp.com",
      X: "https://twitter.com/home",
    },
  },
  {
    name: "Media",
    bookmarks: {
      Behance: "https://behance.net",
      Colossal: "https://thisiscolossal.com",
      Consequence: "https://consequence.net",
      Cracked: "https://www.cracked.com",
      Crunchyroll: "https://crunchyroll.com",
      Deviantart: "https://deviantart.com",
      Dribbble: "https://dribbble.com",
      "Fubiz Media": "https://www.fubiz.net/en",
      "Hype Machine": "https://hypem.com",
      "Last.fm": "https://last.fm",
      Pitchfork: "https://pitchfork.com",
      Plex: "https://watch.plex.tv",
      "Pluto TV": "https://pluto.tv",
      Roku: "https://roku.com",
      Rumble: "https://rumble.com",
      Runtime: "https://runtime.tv",
      Spotify: "https://open.spotify.com",
      TIDAL: "https://listen.tidal.com",
      "Trakt.tv": "https://trakt.tv",
      "TV Time": "https://tvtime.com",
      "Winamp": "https://player.winamp.com",
      YouTube: "https://youtube.com",
      "YouTube Music": "https://music.youtube.com",
    },
  },

  {
    name: "Tools",
    bookmarks: {
      Anytype: "https://anytype.io/",
      Bitwarden: "https://vault.bitwarden.com",
      Bort: "https://bort.io/",
      Box: "https://box.com",
      Coda: "https://coda.io",
      Dillinger: "https://dillinger.io",
      Dropbox: "https://dropbox.com",
      "Editor.md": "https://pandao.github.io/editor.md/en.html",
      Figma: "https://figma.com",
      GitHub: "https://github.com",
      "Google Calendar": "https://calendar.google.com",
      "Google Docs": "https://docs.google.com",
      "Google Drive": "https://drive.google.com",
      "Google Keep": "https://keep.google.com",
      "Google Passwords": "https://passwords.google.com",
      "Google Translate": "https://translate.google.com",
      "iCloud Drive": "https://icloud.com/iclouddrive",
      "iCloud Notes": "https://icloud.com/notes",
      HedgeDoc: "https://demo.hedgedoc.org",
      KeeWeb: "https://app.keeweb.info",
      Markdit: "https://markdit.com/",
      "Mega.nz": "https://mega.nz",
      "Microsoft Designer": "https://designer.microsoft.com",
      "Microsoft Loop": "https://loop.microsoft.com",
      "Microsoft Sticky Notes": "https://www.onenote.com/stickynotes",
      "Microsoft To Do": "https://to-do.live.com/tasks/",
      NotesHub: "https://www.noteshub.app/notebooks",
      Notion: "https://notion.so",
      "Office 365": "https://office.com",
      OneDrive: "https://onedrive.com",
      Omnivore: "https://omnivore.app/home",
      "Outlook Calendar": "https://calendar.live.com",
      Photopea: "https://photopea.com",
      Pocket: "https://getpocket.com/home",
      "Skiff Drive": "https://drive.skiff.com",
      "StackEdit+": "https://stackedit.net/app",
      VSCode: "https://vscode.dev",
      Vectr: "https://vectr.com",
      "Write.as": "https://write.as",
      "Yandex Disk": "https://disk.yandex.com",
    },
  },
];
