import f from "awesome-phonenumber";
import { promises as g } from "fs";
import { join as h } from "path";
import i from "node-fetch";
import { xpRange as j } from "../lib/levelling.js";
import k from "moment-timezone";
import l from "os";
import m from "fs";
const n = {
  before: "\n> *ᴍʏ ɴᴀᴍᴇ ɪꜱ ꜱɪʟᴀɴᴀ ʙᴏᴛ ɪ'ᴍ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀᴛɪꜰɪᴄɪᴀʟ ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ. ɪ ᴄᴀɴ ᴘʀᴏᴠɪᴅᴇ ᴍᴜʟᴛɪᴘʟᴇ ꜱᴇʀᴠɪᴄᴇꜱ. ɪ ᴡᴀꜱ ᴄʀᴇᴀᴛᴇᴅ ʙʏ @kh_sh932*\n\n> ▧ Salam : %name\n> ▧ Uptime : %muptime\n\n%readmore".trimStart(),
  header: "❏┄┅━┅┄〈 〘 *%category* 〙\n│",
  body: "┊▧ %cmd %islimit %isPremium",
  footer: "│\n┗━═┅═━━┅┄๑\n",
  after: ""
};
let o = async (a, {
  conn: b,
  usedPrefix: c,
  command: d,
  __dirname: e,
  isOwner: f,
  isMods: i,
  isPrems: l,
  args: m
}) => {
  let o;
  let p = ("" + m[0]).toLowerCase();
  let r = ["all", "drawing", "ai", "downloader", "image-edit", "sticker", "search", "tools", "infobot", "owner"];
  if (!r.includes(p)) {
    p = "404";
  }
  if (p == "all") {
    o = {
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
  if (p == "drawing") {
    o = {
      drawing: "drawing"
    };
  }
  if (p == "ai") {
    o = {
      ai: "ai"
    };
  }
  if (p == "downloader") {
    o = {
      downloader: "downloader"
    };
  }
  if (p == "image-edit") {
    o = {
      "image-edit": "image-edit"
    };
  }
  if (p == "sticker") {
    o = {
      sticker: "Sticker"
    };
  }
  if (p == "search") {
    o = {
      search: "Searching"
    };
  }
  if (p == "tools") {
    o = {
      tools: "Tools"
    };
  }
  if (p == "owner") {
    o = {
      owner: "Owner"
    };
  }
  if (p == "info") {
    o = {
      infobot: "infobot"
    };
  }
  let v = k.tz("Asia/Jakarta").format("HH:mm:ss");
  let w = JSON.parse(await g.readFile(h(e, "../package.json")).catch(a => ({}))) || {};
  let {
    exp: x,
    level: y,
    role: z
  } = global.db.data.users[a.sender];
  let {
    min: A,
    xp: B,
    max: C
  } = j(y, global.multiplier);
  let D = "@" + a.sender.split("@")[0];
  let E = global.db.data.users[a.sender];
  let F = l ? "Unlimited" : E.limit;
  let G = E.registered ? E.name : b.getName(a.sender);
  let H = i ? "Developer" : f ? "Owner" : l ? "Premium User" : E.level > 1000 ? "Elite User" : "Free User";
  let I = a.mentionedJid && a.mentionedJid[0] ? a.mentionedJid[0] : a.fromMe ? b.user.jid : a.sender;
  let J = new Date(new Date() + 3600000);
  let K = "id";
  let L = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(J / 84600000) % 5];
  let N = J.toLocaleDateString(K, {
    weekday: "long"
  });
  let P = J.toLocaleDateString(K, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  let Q = Intl.DateTimeFormat(K + "-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(J);
  let S = J.toLocaleTimeString(K, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  let T = process.uptime() * 1000;
  let U;
  if (process.send) {
    process.send("uptime");
    U = (await new Promise(a => {
      process.once("message", a);
      setTimeout(a, 1000);
    })) * 1000;
  }
  let V = s(U);
  let W = s(T);
  let X = Object.keys(global.db.data.users).length;
  let Y = Object.values(global.db.data.users).filter(a => a.registered == true).length;
  let Z = ("\n> ᴍʏ ɴᴀᴍᴇ ɪꜱ ꜱɪʟᴀɴᴀ ʙᴏᴛ ɪ'ᴍ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀᴛɪꜰɪᴄɪᴀʟ ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ. ɪ ᴄᴀɴ ᴘʀᴏᴠɪᴅᴇ ᴍᴜʟᴛɪᴘʟᴇ ꜱᴇʀᴠɪᴄᴇꜱ. ɪ ᴡᴀꜱ ᴄʀᴇᴀᴛᴇᴅ ʙʏ @ɴᴏᴜʀᴇᴅᴅɪɴᴇ_ᴏᴜᴀꜰʏ\n\n\n> ▧ Uptime : " + V + "\n").trimStart();
  let $ = [];
  for (let g = 0; g < r.length; g++) {
    let a = {
      header: "",
      title: "" + t(r[g]),
      id: c + "menu " + r[g]
    };
    $.push(a);
  }
  const _ = {
    title: "إضغط هنا ",
    sections: [{
      title: "List Menu",
      highlight_label: "Popular",
      rows: $
    }]
  };
  let aa = _;
  let ba = [{
    name: "single_select",
    buttonParamsJson: JSON.stringify(aa)
  }];
  if (p == "404") {
    return b.sendButtonImg(a.chat, "https://telegra.ph/file/5dbcf152d3991a9b81f60.jpg", "", Z.trim(), " ", ba, a, {
      contextInfo: {
        mentionedJid: [a.sender]
      }
    });
  }
  let ca = Object.values(global.plugins).filter(a => !a.disabled).map(a => {
    return {
      help: Array.isArray(a.tags) ? a.help : [a.help],
      tags: Array.isArray(a.tags) ? a.tags : [a.tags],
      prefix: "customPrefix" in a,
      limit: a.limit,
      premium: a.premium,
      enabled: !a.disabled
    };
  });
  let da = {};
  for (let g in o) {
    da[g] = [];
    for (let a of ca) {
      if (a.tags && a.tags.includes(g)) {
        if (a.help) {
          da[g].push(a);
        }
      }
    }
  }
  b.menu = b.menu ? b.menu : {};
  let ea = b.menu.before || n.before;
  let fa = b.menu.header || n.header;
  let ga = b.menu.body || n.body;
  let ha = b.menu.footer || n.footer;
  let ia = b.menu.after || (b.user.jid == global.conn.user.jid ? "" : "Powered by https://wa.me/" + global.conn.user.jid.split`@`[0]) + n.after;
  let ja = [ea, ...Object.keys(o).map(a => {
    return fa.replace(/%category/g, o[a]) + "\n" + [...ca.filter(b => b.tags && b.tags.includes(a) && b.help).map(a => {
      return a.help.map(b => {
        return ga.replace(/%cmd/g, a.prefix ? b : "%p" + b).replace(/%islimit/g, a.limit ? "🅛" : "").replace(/%isPremium/g, a.premium ? "🅟" : "").trim();
      }).join("\n");
    }), ha].join("\n");
  }), ia].join("\n");
  let ka = typeof b.menu == "string" ? b.menu : typeof b.menu == "object" ? ja : "";
  let la = {
    "%": "%",
    p: c,
    uptime: W,
    muptime: V,
    me: b.getName(b.user.jid),
    npmname: w.name,
    npmdesc: w.description,
    version: w.version,
    exp: x - A,
    maxexp: B,
    totalexp: x,
    xp4levelup: C - x,
    github: w.homepage ? w.homepage.url || w.homepage : "[unknown github url]",
    level: y,
    limit: F,
    name: G,
    weton: L,
    week: N,
    date: P,
    dateIslamic: Q,
    time: S,
    totalreg: X,
    rtotalreg: Y,
    role: z,
    tag: D,
    status: H,
    wib: v,
    readmore: q
  };
  ka = ka.replace(new RegExp("%(" + Object.keys(la).sort((a, b) => b.length - a.length).join`|` + ")", "g"), (a, b) => "" + la[b]);
  await b.sendMessage(a.chat, {
    text: ka,
    mentions: [a.sender],
    contextInfo: {
      forwardingScore: 9999999,
      isForwarded: false,
      mentionedJid: [a.sender],
      externalAdReply: {
        showAdAttribution: false,
        renderLargerThumbnail: true,
        title: "إضغط هنا لمتابعة صانع البوت في حسابه ",
        containsAutoReply: true,
        mediaType: 1,
        thumbnailUrl: "https://telegra.ph/file/ed26557fed9ec5c1e2ef6.jpg",
        mediaUrl: "",
        sourceUrl: "https://instagram.com/kh_sh932"
      }
    }
  }, {
    quoted: a
  });
};
o.help = ["menu"];
o.tags = ["main"];
o.command = /^(menu)$/i;
o.register = true;
export default o;
const p = String.fromCharCode(8206);
const q = p.repeat(4001);
function r() {
  let a = "";
  const b = k.tz("Asia/Jakarta").format("HH");
  a = "Hi";
  if (b >= 0) {
    a = "Selamat Malam";
  }
  if (b >= 4) {
    a = "Selamat Pagi";
  }
  if (b >= 11) {
    a = "Selamat Siang";
  }
  if (b >= 15) {
    a = "️Selamat Sore";
  }
  if (b >= 18) {
    a = "Selamat Malam";
  }
  if (b >= 23) {
    a = "Selamat Malam";
  }
  return a;
}
function s(a) {
  let b = isNaN(a) ? "--" : Math.floor(a / 3600000);
  let c = isNaN(a) ? "--" : Math.floor(a / 60000) % 60;
  let d = isNaN(a) ? "--" : Math.floor(a / 1000) % 60;
  return [b, c, d].map(a => a.toString().padStart(2, 0)).join(":");
}
function t(a) {
  return a.charAt(0).toUpperCase() + a.substr(1);
}
