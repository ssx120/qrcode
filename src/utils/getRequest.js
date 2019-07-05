 const getRequest = (name)=> {
    var hash = window.location.hash;
    if (hash.indexOf("?") > 0 && hash.indexOf("?") < hash.indexOf("=")) {
        hash = hash.substring(hash.indexOf("?") + 1, hash.length + 1);
    } else {
        hash = hash.substring(hash.lastIndexOf("/") + 1, hash.length + 1);
    }
    hash = hash.replace("?", "&");
    let kvarray = hash.split("&");
    let hashkv = {};
    for (let i in kvarray) {
        hashkv[kvarray[i].split("=")[0]] = kvarray[i].split("=")[1];
    }
    var kv = hashkv[name] === undefined ? "" : hashkv[name];
    return kv;
}
export default getRequest