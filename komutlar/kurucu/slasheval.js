module.exports = {
name:"eval",
type:'interaction',
prototype:'slash',
code:`
$interactionFollowUp[$eval[$slashOption[kod];no;yes;no;no]
]
$interactionDefer
$onlyForIDs[$botOwnerID;{ "content":"Hey! $userTag[$botOwnerID] değilsin?","ephemeral": true,"options":{"interaction":true}}]
`}