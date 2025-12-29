//-------------------[ BOT SETTINGS - CUSTOMIZED BY NM 2026 ]------------------// 

// @project_name : NM 2026
// @author : nimesha madhushan
// @github : https://github.com/Nimeshamadhushan/NIMA2026new
// @whatsapp : +94726800969

//----------------------[ NM 2026 ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdGRU5hR3cyb2pWMUVQVzRDL2kwNHJYQ0VWcWE3aXRLbXlIL0tEd1JXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3N6MzFISFMyUWxvS1g5cUprNEhBMmNhczVWN1RTQU9BTmlpK2dBM1dEUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTU1kUU9RZW5mRS9vMUtlSW9HRy8zNVMrYm9MeEhLOFpuczF0VVhqbjFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSFZZK1dHMFY0VlhkbkNXMGlqUThnZ1FZRjlGRksxMzc1MlMzZDNCVWhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKMWlzZnYrREZReEgxNy8wTW1keVcveVg5UDhDelFtd0VTOGFRbzYvVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNkc1FPcTBJUWZOdnlVbzRSUDZsMjR6bG4ySkp5RHoralArSERHMlJsUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU11bmFBODFnN1Y0TnVVblMvUTBWblcxSlFXTklhdHBXYTJjZVBEelpYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNERsbUgrN2V6TksycENJbk5iVGR5ZU9xU3FSNWVPZTlsaG14ZEwxTWwwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZweHo0NHBoYVpLMVR0M3JsRW5EMHl3VU92UnpJVmdxUHVJb1VOeHlQYjM2a2FSN2ZOTHAySjRoaUlGYndRYlFZUlZ0S2lkb3llQm5zT2hFMGFqVWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJoZWNoay9SRG8wZ3JOMEZZejZ2bm56MTh4Z2h6ZWFlT3J0N0hENHdwSzN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI2ODAwOTY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzBDRkZBREU5QTVBODFDMjU0MTkwNzAzRkFDNTcxOSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY3MDA1ODg0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcyNjgwMDk2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM0NDE5MUI0MDJDMkMzNkUzRDk5OTU3QzQyNTA0RTkiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzAwNTg4NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjY4MDA5NjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDNDU3QzI1QTA5QkEyQkQzNjQ0NTg3QUM3MzUzNDE3IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjcwMDU4ODV9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MiwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUEY1N01KMjMiLCJtZSI6eyJpZCI6Ijk0NzI2ODAwOTY5Ojc5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjI0NjUzMTI5ODQyNzE0Ojc5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUER5dmNJQ0VLbTl5Y29HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYW0wTUg5enlabUUycnVrR01NcXdvb1NoYkEweE5wRHN1b1Y2N2ZHVWsxQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWDV0aUxVWWFoZS9zUlIzZnkvbGlWRUdUdEhOb0k1VzlmQ0FuY0FGdHc2R1RpZEZ3MFVUc0NsLzFtZUxSSGpzVFIzblh5a0F5WDljVXl2MERIWG45QXc9PSIsImRldmljZVNpZ25hdHVyZSI6InYwd3V5bUVHS1ZzWUVVZURzTE5XRG95NHMxeER2TXdZV2VielNnZlF3ZTFlV1NWQnUyMjlzT1hIRFNreWppSXdKRDlGeGVkN0ExalpCdEpVdFpua2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI0NjUzMTI5ODQyNzE0Ojc5QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXcHREQi9jOG1aaE5xN3BCakRLc0tLRW9Xd05NVGFRN0xxRmV1M3hsSk5RIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0FnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjcwMDU4NzksImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEcUQifQ==' 

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'NM 2026' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '94726800969' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['94726800969'];

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'nimesha madhushan' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "NM 2026" 

//--------------[ COUNTRY TIMEZONE ]------------//

global.timezones = 'Asia/Colombo'; 


//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "nimesha madhushan" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

// මෙතැනට ඔයාගේ WhatsApp ලින්ක් එක දමා ඇත. YouTube ලින්ක් සියල්ල ඉවත් කර ඇත.
global.plink = process.env.PLINK || "https://wa.me/94726800969?text=Hello_NM_2026"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> NM 2026 \n> nimesha madhushan"

//---------------------[ REPLIES
