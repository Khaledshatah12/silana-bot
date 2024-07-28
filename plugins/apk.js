import a from "node-fetch";
const b = async b => {
  const c = await a(b);
  const d = await c.buffer();
  return d;
};
let c = async (a, {
  conn: c,
  command: d,
  usedPrefix: e,
  text: f
}) => {
  const {
    proto: g,
    generateWAMessageFromContent: h,
    prepareWAMessageMedia: i,
    generateWAMessage: j
  } = (await import("@adiwajshing/baileys")).default;
  const {
    search: k,
    download: l
  } = await import("aptoide-scraper");
  if (d === "apk") {
    if (!f) {
      throw "Ex :     " + (e + d) + " whatsapp";
    }
    const b = await k(f);
    let i = [{
      title: "silana",
      highlight_label: "start chats",
      rows: [{
        header: "ستوريات",
        title: "Menu",
        id: ".menu"
      }]
    }, {
      title: "apk",
      highlight_label: "popular",
      rows: []
    }];
    for (let a of b) {
      const b = {
        header: a.name,
        title: a.id,
        description: "View \"" + a.name + "\"",
        id: ".apkview " + a.id
      };
      i[1].rows.push(b);
    }
    const j = {
      title: "إضغط هنا ",
      sections: i
    };
    let l = j;
    let m = h(a.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: g.Message.InteractiveMessage.create({
            body: g.Message.InteractiveMessage.Body.create({
              text: "انقر على الزر أدناه لتنزيل التطبيق"
            }),
            footer: g.Message.InteractiveMessage.Footer.create({
              text: "silana"
            }),
            header: g.Message.InteractiveMessage.Header.create({
              subtitle: "silana",
              hasMediaAttachment: false
            }),
            nativeFlowMessage: g.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [{
                name: "single_select",
                buttonParamsJson: JSON.stringify(l)
              }, {
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"صاحب البوت\",\"id\":\".owner\"}"
              }]
            })
          })
        }
      }
    }, {
      quoted: a,
      userJid: a.sender
    });
    await c.relayMessage(m.key.remoteJid, m.message, {
      messageId: m.key.id
    });
  } else if (d === "apkview") {
    if (!f) {
      return;
    }
    let b = await l(f);
    let d = "*Name* : " + b.name + "\n*Last Up* : " + b.lastup + "\n*Size* : " + b.size;
    const e = {
      text: d
    };
    const j = {
      url: b.icon
    };
    const k = {
      image: j
    };
    const m = {
      upload: c.waUploadToServer
    };
    let n = h(a.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: g.Message.InteractiveMessage.create({
            body: g.Message.InteractiveMessage.Body.create(e),
            footer: g.Message.InteractiveMessage.Footer.create({
              text: "silana"
            }),
            header: g.Message.InteractiveMessage.Header.create({
              subtitle: "silana",
              hasMediaAttachment: true,
              ...(await i(k, m))
            }),
            nativeFlowMessage: g.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [{
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"Download\",\"id\":\".apkget " + b.package + "\"}"
              }]
            })
          })
        }
      }
    }, {
      quoted: a,
      userJid: a.sender
    });
    await c.relayMessage(n.key.remoteJid, n.message, {
      messageId: n.key.id
    });
  } else if (d === "apkget") {
    if (!f) {
      return;
    }
    let d = await l(f);
    let e = await b(d.dllink);
    c.sendMessage(a.chat, {
      document: e,
      mimetype: "application/vnd.android.package-archive",
      fileName: d.name,
      caption: "Request by @" + a.sender.split("@")[0],
      contextInfo: {
        mentionedJid: [a.sender]
      }
    }, {
      quoted: a
    });
  } else {
    return;
  }
};
c.command = ["apk", "apkview", "apkget"];
c.help = "apk";
c.tags = "downloader";
export default c;
