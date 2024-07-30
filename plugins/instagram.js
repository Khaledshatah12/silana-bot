var {
  saveig: f,
  ig: g,
  instagramGetUrl: h,
  FastDl: i
} = await import("../lib/igdl.js");
var j = async (a, {
  command: b,
  usedPrefix: c,
  conn: d,
  text: e,
  args: g
}) => {
  if (!e) {
    throw "Input Url";
  }
  let h = await f(e);
  if (h.medias) {
    let b = "instagram.com/kh_sh932";
    for (let c = 0; c < h.medias?.length; c++) {
      let e = h.medias[c];
      let f = e.url;
      if (f) {
        await d.sendFile(a.chat, f, "", "" + b, a);
      }
    }
  } else {
    console.log("Invalid data format in results");
  }
};
j.help = ["instagram"];
j.tags = ["downloader"];
j.command = /^i(nsta(gram(dl)?|dl)|g(dl)?|ig)$/i;
export default j;
