import _0x257b74 from "awesome-phonenumber";
import { promises } from "fs";
import { join } from "path";
import _0x59ac81 from "node-fetch";
import { xpRange } from "../lib/levelling.js";
import _0x5dad2e from "moment-timezone";
import _0x381d3c from "os";
import _0xc5c478 from "fs";
const defaultMenu = {
  before: "\n> *ᴍʏ ɴᴀᴍᴇ ɪꜱ storeat ʙᴏᴛ ɪ'ᴍ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀᴛɪꜰɪᴄɪᴀʟ ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ. ɪ ᴄᴀɴ ᴘʀᴏᴠɪᴅᴇ ᴍᴜʟᴛɪᴘʟᴇ ꜱᴇʀᴠɪᴄᴇꜱ. ɪ ᴡᴀꜱ ᴄʀᴇᴀᴛᴇᴅ ʙʏ @kh_sh932*\n\n> ▧ Salam : %name\n> ▧ Uptime : %muptime\n\n%readmore".trimStart(),
  header: "❏┄┅━┅┄〈 〘 *%category* 〙\n│",
  body: "┊▧ %cmd %islimit %isPremium",
  footer: "│\n┗━═┅═━━┅┄๑\n",
  after: ""
};
let handler = async (_0x133891, {
  conn: _0x56de19,
  usedPrefix: _0x1d7d53,
  command: _0x410481,
  __dirname: _0x1e543e,
  isOwner: _0x240b5d,
  isMods: _0x33c580,
  isPrems: _0x38a14c,
  args: _0x3a928b
}) => {
  let _0x18128a;
  let _0xaac27 = ("" + _0x3a928b[0]).toLowerCase();
  let _0x3e25d1 = ["all", "drawing", "ai", "downloader", "image-edit", "sticker", "search", "tools", "infobot", "owner"];
  if (!_0x3e25d1.includes(_0xaac27)) {
    _0xaac27 = "404";
  }
  if (_0xaac27 == "all") {
    _0x18128a = {
      drawing: "drawing",
      ai: "ai",
      downloader: "downloader",
      "image-edit": "image-edit",
      sticker: "sticker",
      search: "search",
      tools: "tools",
      owner: "owner",
      infobot: "infobot"
    };
  }
  if (_0xaac27 == "drawing") {
    _0x18128a = {
      drawing: "drawing"
    };
  }
  if (_0xaac27 == "ai") {
    _0x18128a = {
      ai: "ai"
    };
  }
  if (_0xaac27 == "downloader") {
    _0x18128a = {
      downloader: "downloader"
    };
  }
  if (_0xaac27 == "image-edit") {
    _0x18128a = {
      "image-edit": "image-edit"
    };
  }
  if (_0xaac27 == "sticker") {
    _0x18128a = {
      sticker: "Sticker"
    };
  }
  if (_0xaac27 == "search") {
    _0x18128a = {
      search: "Searching"
    };
  }
  if (_0xaac27 == "tools") {
    _0x18128a = {
      tools: "Tools"
    };
  }
  if (_0xaac27 == "owner") {
    _0x18128a = {
      owner: "Owner"
    };
  }
  if (_0xaac27 == "info") {
    _0x18128a = {
      infobot: "infobot"
    };
  }
  let _0x12658c = _0x5dad2e.tz("Asia/Jakarta").format("HH:mm:ss");
  let _0x42582a = JSON.parse(await promises.readFile(join(_0x1e543e, "../package.json")).catch(_0x2471a3 => ({}))) || {};
  let {
    exp: _0x38e4f7,
    level: _0x76128d,
    role: _0x266db3
  } = global.db.data.users[_0x133891.sender];
  let {
    min: _0x1b5190,
    xp: _0x5cd29f,
    max: _0x117d83
  } = xpRange(_0x76128d, global.multiplier);
  let _0x3ed237 = "@" + _0x133891.sender.split("@")[0];
  let _0x3e62f2 = global.db.data.users[_0x133891.sender];
  let _0x2c0e14 = _0x38a14c ? "Unlimited" : _0x3e62f2.limit;
  let _0x7adb2d = _0x3e62f2.registered ? _0x3e62f2.name : _0x56de19.getName(_0x133891.sender);
  let _0x35e525 = _0x33c580 ? "Developer" : _0x240b5d ? "Owner" : _0x38a14c ? "Premium User" : _0x3e62f2.level > 1000 ? "Elite User" : "Free User";
  let _0x508480 = _0x133891.mentionedJid && _0x133891.mentionedJid[0] ? _0x133891.mentionedJid[0] : _0x133891.fromMe ? _0x56de19.user.jid : _0x133891.sender;
  let _0x2b98a9 = new Date(new Date() + 3600000);
  let _0x4ee741 = "id";
  let _0x25c46d = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(_0x2b98a9 / 84600000) % 5];
  let _0x103018 = _0x2b98a9.toLocaleDateString(_0x4ee741, {
    weekday: "long"
  });
  let _0x40d320 = _0x2b98a9.toLocaleDateString(_0x4ee741, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  let _0x10f4da = Intl.DateTimeFormat(_0x4ee741 + "-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(_0x2b98a9);
  let _0x580a1d = _0x2b98a9.toLocaleTimeString(_0x4ee741, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  let _0x5b4c28 = process.uptime() * 1000;
  let _0x5e47eb;
  if (process.send) {
    process.send("uptime");
    _0x5e47eb = (await new Promise(_0x34be74 => {
      process.once("message", _0x34be74);
      setTimeout(_0x34be74, 1000);
    })) * 1000;
  }
  let _0x28d784 = clockString(_0x5e47eb);
  let _0x2f985a = clockString(_0x5b4c28);
  let _0x2d8e48 = Object.keys(global.db.data.users).length;
  let _0xf6c410 = Object.values(global.db.data.users).filter(_0x3ef0a1 => _0x3ef0a1.registered == true).length;
  let _0x26db11 = ("\n> ᴍʏ ɴᴀᴍᴇ ɪꜱ sᴛᴏʀᴇᴀᴛ ʙᴏᴛ ɪ'ᴍ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀᴛɪꜰɪᴄɪᴀʟ ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ. ɪ ᴄᴀɴ ᴘʀᴏᴠɪᴅᴇ ᴍᴜʟᴛɪᴘʟᴇ ꜱᴇʀᴠɪᴄᴇꜱ. ɪ ᴡᴀꜱ ᴄʀᴇᴀᴛᴇᴅ ʙʏ @ᴋʜ_sʜ932\n\n\n> ▧ Uptime : " + _0x28d784 + "\n").trimStart();
  let _0x50a3b5 = [];
  for (let _0xe43987 = 0; _0xe43987 < _0x3e25d1.length; _0xe43987++) {
    let _0x50a550 = {
      header: "",
      title: "" + capitalize(_0x3e25d1[_0xe43987]),
      id: _0x1d7d53 + "menu " + _0x3e25d1[_0xe43987]
    };
    _0x50a3b5.push(_0x50a550);
  }
  const _0x59629b = {
    title: "إضغط هنا ",
    sections: [{
      title: "List Menu",
      highlight_label: "Popular",
      rows: _0x50a3b5
    }]
  };
  let _0x2f3880 = _0x59629b;
  let _0x733b95 = [{
    name: "single_select",
    buttonParamsJson: JSON.stringify(_0x2f3880)
  }];
  if (_0xaac27 == "404") {
    return _0x56de19.sendButtonImg(_0x133891.chat, "https://telegra.ph/file/e96a80d952dcf6df45530.jpg", "", _0x26db11.trim(), " ", _0x733b95, _0x133891, {
      contextInfo: {
        mentionedJid: [_0x133891.sender]
      }
    });
  }
  let _0xcaf31a = Object.values(global.plugins).filter(_0x2d4ba2 => !_0x2d4ba2.disabled).map(_0x3cd478 => {
    return {
      help: Array.isArray(_0x3cd478.tags) ? _0x3cd478.help : [_0x3cd478.help],
      tags: Array.isArray(_0x3cd478.tags) ? _0x3cd478.tags : [_0x3cd478.tags],
      prefix: "customPrefix" in _0x3cd478,
      limit: _0x3cd478.limit,
      premium: _0x3cd478.premium,
      enabled: !_0x3cd478.disabled
    };
  });
  let _0x3489a0 = {};
  for (let _0x54f11b in _0x18128a) {
    _0x3489a0[_0x54f11b] = [];
    for (let _0x1d1fbe of _0xcaf31a) {
      if (_0x1d1fbe.tags && _0x1d1fbe.tags.includes(_0x54f11b)) {
        if (_0x1d1fbe.help) {
          _0x3489a0[_0x54f11b].push(_0x1d1fbe);
        }
      }
    }
  }
  _0x56de19.menu = _0x56de19.menu ? _0x56de19.menu : {};
  let _0x993543 = _0x56de19.menu.before || defaultMenu.before;
  let _0x184957 = _0x56de19.menu.header || defaultMenu.header;
  let _0xf4c7ba = _0x56de19.menu.body || defaultMenu.body;
  let _0x5305ca = _0x56de19.menu.footer || defaultMenu.footer;
  let _0x56c129 = _0x56de19.menu.after || (_0x56de19.user.jid == global.conn.user.jid ? "" : "Powered by https://wa.me/" + global.conn.user.jid.split`@`[0]) + defaultMenu.after;
  let _0x443f27 = [_0x993543, ...Object.keys(_0x18128a).map(_0x54fbf9 => {
    return _0x184957.replace(/%category/g, _0x18128a[_0x54fbf9]) + "\n" + [..._0xcaf31a.filter(_0x21a397 => _0x21a397.tags && _0x21a397.tags.includes(_0x54fbf9) && _0x21a397.help).map(_0x2e1258 => {
      return _0x2e1258.help.map(_0x4ac89c => {
        return _0xf4c7ba.replace(/%cmd/g, _0x2e1258.prefix ? _0x4ac89c : "%p" + _0x4ac89c).replace(/%islimit/g, _0x2e1258.limit ? "🅛" : "").replace(/%isPremium/g, _0x2e1258.premium ? "🅟" : "").trim();
      }).join("\n");
    }), _0x5305ca].join("\n");
  }), _0x56c129].join("\n");
  let _0x6238be = typeof _0x56de19.menu == "string" ? _0x56de19.menu : typeof _0x56de19.menu == "object" ? _0x443f27 : "";
  let _0x72a1b0 = {
    "%": "%",
    p: _0x1d7d53,
    uptime: _0x2f985a,
    muptime: _0x28d784,
    me: _0x56de19.getName(_0x56de19.user.jid),
    npmname: _0x42582a.name,
    npmdesc: _0x42582a.description,
    version: _0x42582a.version,
    exp: _0x38e4f7 - _0x1b5190,
    maxexp: _0x5cd29f,
    totalexp: _0x38e4f7,
    xp4levelup: _0x117d83 - _0x38e4f7,
    github: _0x42582a.homepage ? _0x42582a.homepage.url || _0x42582a.homepage : "[unknown github url]",
    level: _0x76128d,
    limit: _0x2c0e14,
    name: _0x7adb2d,
    weton: _0x25c46d,
    week: _0x103018,
    date: _0x40d320,
    dateIslamic: _0x10f4da,
    time: _0x580a1d,
    totalreg: _0x2d8e48,
    rtotalreg: _0xf6c410,
    role: _0x266db3,
    tag: _0x3ed237,
    status: _0x35e525,
    wib: _0x12658c,
    readmore: readMore
  };
  _0x6238be = _0x6238be.replace(new RegExp("%(" + Object.keys(_0x72a1b0).sort((_0x5dda58, _0x13980d) => _0x13980d.length - _0x5dda58.length).join`|` + ")", "g"), (_0x2ab43a, _0x1e1fd5) => "" + _0x72a1b0[_0x1e1fd5]);
  await _0x56de19.sendMessage(_0x133891.chat, {
    text: _0x6238be,
    mentions: [_0x133891.sender],
    contextInfo: {
      forwardingScore: 9999999,
      isForwarded: false,
      mentionedJid: [_0x133891.sender],
      externalAdReply: {
        showAdAttribution: false,
        renderLargerThumbnail: true,
        title: "إضغط هنا لمتابعة صانع البوت في حسابه ",
        containsAutoReply: true,
        mediaType: 1,
        thumbnailUrl: "https://telegra.ph/file/e96a80d952dcf6df45530.jpg",
        mediaUrl: "",
        sourceUrl: "https://instagram.com/kh_sh932"
      }
    }
  }, {
    quoted: _0x133891
  });
};
handler.help = ["menu"];
handler.tags = ["main"];
handler.command = /^(menu)$/i;
handler.register = true;
export default handler;
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
function wish() {
  let _0x4bcf95 = "";
  const _0x43314f = _0x5dad2e.tz("Asia/Jakarta").format("HH");
  _0x4bcf95 = "Hi";
  if (_0x43314f >= 0) {
    _0x4bcf95 = "Selamat Malam";
  }
  if (_0x43314f >= 4) {
    _0x4bcf95 = "Selamat Pagi";
  }
  if (_0x43314f >= 11) {
    _0x4bcf95 = "Selamat Siang";
  }
  if (_0x43314f >= 15) {
    _0x4bcf95 = "️Selamat Sore";
  }
  if (_0x43314f >= 18) {
    _0x4bcf95 = "Selamat Malam";
  }
  if (_0x43314f >= 23) {
    _0x4bcf95 = "Selamat Malam";
  }
  return _0x4bcf95;
}
function clockString(_0x57fb3b) {
  let _0x1eabd3 = isNaN(_0x57fb3b) ? "--" : Math.floor(_0x57fb3b / 3600000);
  let _0x199ff6 = isNaN(_0x57fb3b) ? "--" : Math.floor(_0x57fb3b / 60000) % 60;
  let _0x250224 = isNaN(_0x57fb3b) ? "--" : Math.floor(_0x57fb3b / 1000) % 60;
  return [_0x1eabd3, _0x199ff6, _0x250224].map(_0x391d98 => _0x391d98.toString().padStart(2, 0)).join(":");
}
function capitalize(_0xd1d8f7) {
  return _0xd1d8f7.charAt(0).toUpperCase() + _0xd1d8f7.substr(1);
}
