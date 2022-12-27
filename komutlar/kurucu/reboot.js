module.exports = {
  name: "reboot",
  code: `
$reboot[server.js]
$onlyForIDs[$botOwnerID;Bu komudu sadece $userTag[$botOwnerID] kullanabilir.]
`}