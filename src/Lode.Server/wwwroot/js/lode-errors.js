// Generated from the Lode error registry (LodeCommon src/Lode.Errors/registry) by tools/ErrorGen. Do not edit.
window.LodeErrorTable = {
  "LODE-SHR-LIC-0001": {
    "m": "This is not a Lode licence file.",
    "t": "The licence file is not a Lode licence",
    "s": "error"
  },
  "LODE-SHR-LIC-0002": {
    "m": "The licence was signed with a key this version of Lode doesn't know. Update Lode, or contact Lode support.",
    "t": "The licence was signed with a key this version doesn't know",
    "s": "error"
  },
  "LODE-SHR-LIC-0003": {
    "m": "The licence file is damaged.",
    "t": "The licence file is damaged",
    "s": "error"
  },
  "LODE-SHR-LIC-0004": {
    "m": "The licence file has been changed or is not genuine.",
    "t": "The licence file has been changed or is not genuine",
    "s": "error"
  },
  "LODE-SHR-LIC-0005": {
    "m": "This licence needs a newer version of Lode.",
    "t": "This licence needs a newer version of Lode",
    "s": "error"
  },
  "LODE-SHR-LIC-0006": {
    "m": "This licence is for another TekOne product, not {name}.",
    "t": "The licence is for another TekOne product",
    "s": "error"
  },
  "LODE-SHR-LIC-0007": {
    "m": "This {name} licence is for another PC. Activate your key again to move it here.",
    "t": "The licence is for another PC or server",
    "s": "error"
  },
  "LODE-SHR-LIC-0008": {
    "m": "{name} ended on {date}. Renew to turn it back on.",
    "t": "The licence has ended",
    "s": "warning"
  },
  "LODE-SHR-LIC-0009": {
    "m": "{name} needs to check in online. Connect to the internet and it will refresh.",
    "t": "The licence needs to check in online",
    "s": "warning"
  },
  "LODE-SHR-LIC-0010": {
    "m": "{name} ended on {date}. It stays on until {until}.",
    "t": "The licence has ended but still works for a few days",
    "s": "info"
  },
  "LODE-SHR-LIC-0011": {
    "m": "This licence file isn't one this app understands.",
    "t": "The licence file isn't one this app understands",
    "s": "error"
  },
  "LODE-SHR-LIC-0012": {
    "m": "This licence file is for another server.",
    "t": "The licence file is for another server",
    "s": "error"
  },
  "LODE-SHR-LIC-0013": {
    "m": "The {name} licence ended on {date}. It keeps working; contact Lode support to renew.",
    "t": "The server licence has ended (the server keeps working)",
    "s": "warning"
  },
  "LODE-SHR-READ-0001": {
    "m": "Lode stopped reading this file because it took too long. It is still found by its name.",
    "t": "Reading the file took too long",
    "s": "warning"
  },
  "LODE-SHR-READ-0002": {
    "m": "This file made Lode's file reader stop, so its text wasn't read. It is still found by its name.",
    "t": "The file made Lode's reader stop",
    "s": "warning"
  },
  "LODE-SHR-READ-0003": {
    "m": "The separate file reader could not be started, so files are being read inside the service instead.",
    "t": "The separate file reader could not be started",
    "s": "error"
  },
  "LODE-SHR-READ-0004": {
    "m": "This file is damaged, or it isn't the kind of file its name says, so its text wasn't read.",
    "t": "The file is damaged or isn't what its name says",
    "s": "warning"
  },
  "LODE-SHR-READ-0005": {
    "m": "Lode can't read the text inside this kind of file. It is still found by its name.",
    "t": "Lode can't read this version or kind of file",
    "s": "info"
  },
  "LODE-SHR-READ-0006": {
    "m": "Lode couldn't open this file. It may be open in another program, or it has been moved or deleted.",
    "t": "The file couldn't be opened",
    "s": "warning"
  },
  "LODE-SHR-READ-0007": {
    "m": "Windows wouldn't let Lode open this file, so its text wasn't read.",
    "t": "Windows wouldn't let Lode open the file",
    "s": "warning"
  },
  "LODE-SHR-READ-0008": {
    "m": "This file is protected with a password, so Lode can't read the text inside it. It is still found by its name.",
    "t": "The file is password protected",
    "s": "info"
  },
  "LODE-SHR-READ-0009": {
    "m": "There wasn't enough memory to read this file. It is still found by its name.",
    "t": "There wasn't enough memory to read the file",
    "s": "warning"
  },
  "LODE-SHR-READ-0010": {
    "m": "Lode couldn't read the text inside this file. It is still found by its name.",
    "t": "The file couldn't be read",
    "s": "warning"
  },
  "LODE-SHR-READ-0011": {
    "m": "This file has nothing in it to show.",
    "t": "The file has nothing to show",
    "s": "info"
  },
  "LODE-SHR-READ-0012": {
    "m": "Lode has no preview for files of type {ext}. Open the file instead.",
    "t": "There's no preview for this kind of file",
    "s": "info"
  },
  "LODE-SHR-READ-0013": {
    "m": "This slide could not be drawn.",
    "t": "A slide could not be drawn",
    "s": "info"
  },
  "LODE-SHR-READ-0014": {
    "m": "This isn't a model file Lode can read, so it has no model details. It is still found by its name.",
    "t": "The file has a model extension but isn't a model Lode reads",
    "s": "info"
  },
  "LODE-SHR-READ-0015": {
    "m": "The project list needs a column called job.",
    "t": "The project list has no job column",
    "s": "error"
  },
  "LODE-SHR-READ-0016": {
    "m": "The file reader is running with fewer limits than intended ({limits}). Files are still read.",
    "t": "The file reader is running with fewer limits than intended",
    "s": "warning"
  },
  "LODE-SHR-READ-0017": {
    "m": "The file reader's working folder could not be set up, so it may not read some model files.",
    "t": "The file reader's working folder could not be set up",
    "s": "warning"
  },
  "LODE-SHR-READ-0018": {
    "m": "Lode's data folder could not be closed to the file reader. Files are still read.",
    "t": "Lode's data folder could not be closed to the file reader",
    "s": "warning"
  },
  "LODE-SHR-SBX-0001": {
    "m": "A safety limit for the file reader could not be applied: {step}.",
    "t": "A sandbox limit could not be applied",
    "s": "warning"
  },
  "LODE-SHR-SBX-0002": {
    "m": "A folder could not be closed to the file reader.",
    "t": "A folder could not be closed to the sandbox",
    "s": "warning"
  },
  "LODE-SRV-API-0001": {
    "m": "Lode Server couldn't understand that request. Reload the page and try again.",
    "t": "The server couldn't understand that request",
    "s": "error"
  },
  "LODE-SRV-API-0002": {
    "m": "Management is available on the server itself, or to Windows administrators.",
    "t": "Management is for the server itself or Windows administrators",
    "s": "error"
  },
  "LODE-SRV-API-0003": {
    "m": "Lode Server only accepts changes from its own pages. Reload the page and try again.",
    "t": "The change didn't come from Lode's own page",
    "s": "error"
  },
  "LODE-SRV-API-0004": {
    "m": "This version of Lode Server doesn't have that function. Reload the page.",
    "t": "The server doesn't have that function",
    "s": "error"
  },
  "LODE-SRV-API-0005": {
    "m": "That item isn't available. It may have been removed, or you may not have access to it.",
    "t": "That item isn't available",
    "s": "error"
  },
  "LODE-SRV-API-0006": {
    "m": "The file is not reachable from the server right now.",
    "t": "The file can't be reached from the server right now",
    "s": "warning"
  },
  "LODE-SRV-API-0007": {
    "m": "Lode Server answered {status} without saying why. Try again.",
    "t": "The server answered without saying why",
    "s": "error"
  },
  "LODE-SRV-API-0008": {
    "m": "The page couldn't reach Lode Server. Check your network connection, then reload.",
    "t": "The page couldn't reach Lode Server",
    "s": "error"
  },
  "LODE-SRV-API-0009": {
    "m": "Give the source a name.",
    "t": "The source needs a name",
    "s": "error"
  },
  "LODE-SRV-AUTH-0001": {
    "m": "Sign in with your Windows account to use Lode Server.",
    "t": "Sign in with your Windows account",
    "s": "error"
  },
  "LODE-SRV-AUTH-0002": {
    "m": "Your account isn't allowed to do that on Lode Server.",
    "t": "You're not allowed to do that",
    "s": "error"
  },
  "LODE-SRV-CFG-0001": {
    "m": "settings.json could not be read, so the last good settings are in use. The unreadable file was kept as {kept}. {detail}",
    "t": "settings.json couldn't be read; the last good settings are in use",
    "s": "error"
  },
  "LODE-SRV-CFG-0002": {
    "m": "settings.json could not be read and there is no backup, so Lode Server did not start. Fix the file, or delete it to start with defaults. A copy was kept as {kept}. {detail}",
    "t": "settings.json couldn't be read and there is no backup",
    "s": "critical"
  },
  "LODE-SRV-CFG-0003": {
    "m": "rules.json could not be read, so no rules are in use. {detail}",
    "t": "rules.json couldn't be read",
    "s": "error"
  },
  "LODE-SRV-CFG-0004": {
    "m": "The lookup table {file} could not be loaded. {detail}",
    "t": "A lookup table couldn't be loaded",
    "s": "warning"
  },
  "LODE-SRV-CFG-0005": {
    "m": "The lookup table {file} has no '{column}' column.",
    "t": "A lookup table is missing its key column",
    "s": "warning"
  },
  "LODE-SRV-GEN-9999": {
    "m": "Something unexpected went wrong on the server. Try again. If it keeps happening, tell your administrator and quote reference {ref}.",
    "t": "Something unexpected went wrong in Lode Server",
    "s": "error"
  },
  "LODE-SRV-IDX-0001": {
    "m": "The search index could not be opened, so it was started again from empty and is being rebuilt. Searches fill in as it goes.",
    "t": "The search index was damaged and is being rebuilt",
    "s": "error"
  },
  "LODE-SRV-IDX-0002": {
    "m": "The {loop} task hit an unexpected error and starts again in 5 seconds. {detail}",
    "t": "A background task hit an error and restarted",
    "s": "error"
  },
  "LODE-SRV-IDX-0003": {
    "m": "The search index could not be saved while the service was stopping. The last changes are indexed again at the next start. {detail}",
    "t": "The index couldn't be saved while stopping",
    "s": "warning"
  },
  "LODE-SRV-IDX-0004": {
    "m": "{name} could not be added to the search index. {detail}",
    "t": "A file couldn't be added to the index",
    "s": "warning"
  },
  "LODE-SRV-IDX-0005": {
    "m": "This file is larger than {limit} MB, so Lode Server indexed its name and details only.",
    "t": "A file is too large to read the text of",
    "s": "info"
  },
  "LODE-SRV-IDX-0006": {
    "m": "The reader returned nothing for this file.",
    "t": "The reader returned nothing for a file",
    "s": "warning"
  },
  "LODE-SRV-INST-0001": {
    "m": "Installation was cancelled.",
    "t": "Installation was cancelled",
    "s": "info"
  },
  "LODE-SRV-INST-0002": {
    "m": "Installation failed. See C:\\ProgramData\\LodeServer\\install.log.",
    "t": "Installation failed",
    "s": "error"
  },
  "LODE-SRV-INST-0003": {
    "m": "Could not give {account} the right to log on as a service (error {status}).",
    "t": "The service account couldn't be given the right to run as a service",
    "s": "error"
  },
  "LODE-SRV-INST-0004": {
    "m": "Could not find the private key of certificate {thumbprint}.",
    "t": "The certificate's private key couldn't be found",
    "s": "error"
  },
  "LODE-SRV-INST-0005": {
    "m": "The private key file of certificate {thumbprint} was not found.",
    "t": "The certificate's private key file wasn't found",
    "s": "error"
  },
  "LODE-SRV-INST-0006": {
    "m": "No certificate with thumbprint {thumbprint} is in the computer's store (Cert:\\LocalMachine\\My).",
    "t": "No certificate with that thumbprint is installed",
    "s": "error"
  },
  "LODE-SRV-INST-0007": {
    "m": "Certificate {thumbprint} has no private key.",
    "t": "That certificate has no private key",
    "s": "error"
  },
  "LODE-SRV-INST-0008": {
    "m": "{account} cannot be used on this computer. Allow this computer to use it, then run the installer again.",
    "t": "That managed service account can't be used on this computer",
    "s": "error"
  },
  "LODE-SRV-INST-0009": {
    "m": "Could not set the service account to {account} (Windows answered {status}).",
    "t": "The service account couldn't be set",
    "s": "error"
  },
  "LODE-SRV-INST-0010": {
    "m": "The Lode Server service did not answer on port {port}. See C:\\ProgramData\\LodeServer\\logs and the Windows Event Viewer (Application log).",
    "t": "The service didn't answer after installing",
    "s": "critical"
  },
  "LODE-SRV-INST-0011": {
    "m": "No password was given for {account}, so the installer stopped.",
    "t": "No password was given for the service account",
    "s": "error"
  },
  "LODE-SRV-OCR-0001": {
    "m": "Reading text in scans (OCR) is only available on Windows.",
    "t": "OCR isn't available on this system",
    "s": "info"
  },
  "LODE-SRV-OCR-0002": {
    "m": "An OCR worker could not be given its limits ({reason}). It is running without them.",
    "t": "An OCR worker is running without its memory limit",
    "s": "warning"
  },
  "LODE-SRV-OCR-0003": {
    "m": "OCR timed out after {seconds} seconds. The text found so far is kept.",
    "t": "OCR took too long on a file",
    "s": "warning"
  },
  "LODE-SRV-OCR-0004": {
    "m": "The OCR worker stopped while reading this file. The file may be damaged.",
    "t": "The OCR worker crashed on a file",
    "s": "warning"
  },
  "LODE-SRV-OCR-0005": {
    "m": "The OCR worker's answer could not be read.",
    "t": "The OCR worker gave an answer the server couldn't read",
    "s": "warning"
  },
  "LODE-SRV-OCR-0006": {
    "m": "The OCR worker's sandbox is not fully in place ({state}).",
    "t": "The OCR worker's sandbox isn't fully in place",
    "s": "warning"
  },
  "LODE-SRV-OCR-0007": {
    "m": "OCR could not read this file. {detail}",
    "t": "OCR failed on a file",
    "s": "warning"
  },
  "LODE-SRV-OCR-0008": {
    "m": "OCR can't read {type} images on this server, so this file is found by its name, folder and details only.",
    "t": "Windows can't open this kind of image for OCR",
    "s": "info"
  },
  "LODE-SRV-OCR-0009": {
    "m": "OCR could not open this {type} image: {detail}",
    "t": "An image could not be opened for OCR",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0001": {
    "m": "The plugin {plugin} could not be started.",
    "t": "A plugin couldn't be started",
    "s": "error"
  },
  "LODE-SRV-PLUG-0002": {
    "m": "The plugin {plugin} is made for a different version of Lode Server and was not used.",
    "t": "A plugin is for a different version of Lode Server",
    "s": "error"
  },
  "LODE-SRV-PLUG-0003": {
    "m": "The plugin {plugin} is running without its full sandbox ({state}).",
    "t": "A plugin is running without its full sandbox",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0004": {
    "m": "The plugin {plugin} wrote something Lode Server could not read. It was ignored.",
    "t": "A plugin wrote something the server couldn't read",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0005": {
    "m": "{plugin} took longer than {seconds} seconds and was stopped.",
    "t": "A plugin took too long",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0006": {
    "m": "{plugin} stopped unexpectedly (exit code {exit}) while reading this file.",
    "t": "A plugin stopped unexpectedly",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0007": {
    "m": "The plugins' scratch folder could not be set up, so some files may fail to read. {detail}",
    "t": "The plugins' scratch folder couldn't be set up",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0008": {
    "m": "A plugin in {folder} was not loaded: {reason}. An administrator must copy it there.",
    "t": "A plugin wasn't loaded because an administrator didn't install it",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0009": {
    "m": "The plugin description {file} could not be read, so that plugin was not loaded. {detail}",
    "t": "A plugin's description file couldn't be read",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0010": {
    "m": "This plugin needs plugin contract {needs}; this server speaks {speaks}.",
    "t": "A plugin needs a different version of Lode Server",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0011": {
    "m": "{plugin} could not add its information this time. Lode Server tries again later. {detail}",
    "t": "An enrichment plugin failed",
    "s": "warning"
  },
  "LODE-SRV-PLUG-0012": {
    "m": "Usage: Lode.PluginHost <plugin id> | --manifests <folder> | --sandbox-selftest",
    "t": "The plugin host was started the wrong way",
    "s": "error"
  },
  "LODE-SRV-PLUG-0013": {
    "m": "Sandbox self-test FAILED.",
    "t": "The plugin sandbox self-test failed",
    "s": "critical"
  },
  "LODE-SRV-SRC-0001": {
    "m": "Lode Server cannot see the folder {folder}. Check the path, and that {account} can read it.",
    "t": "The server can't see that folder",
    "s": "error"
  },
  "LODE-SRV-SRC-0002": {
    "m": "Lode Server runs as {account}, which cannot read {folder}. Give that account Read access to the folder, or for a share to the share and its folders, then add it again.",
    "t": "The service account can't read that folder",
    "s": "error"
  },
  "LODE-SRV-SRC-0003": {
    "m": "Lode Server cannot open {folder}. {detail}",
    "t": "The server couldn't open that folder",
    "s": "error"
  },
  "LODE-SRV-SRC-0004": {
    "m": "The plugin for this source ({plugin}) is not available, so it is not being scanned.",
    "t": "The source's plugin isn't available",
    "s": "warning"
  },
  "LODE-SRV-SRC-0005": {
    "m": "{source} could not be scanned. Lode Server tries again in 5 minutes. {detail}",
    "t": "A source couldn't be scanned",
    "s": "warning"
  },
  "LODE-SRV-SRC-0006": {
    "m": "{source}: its folder was not found or is not reachable. Lode Server tries again in 5 minutes.",
    "t": "A source's folder can't be reached",
    "s": "warning"
  },
  "LODE-SRV-SRC-0007": {
    "m": "{source} has no folder set, so it cannot be scanned.",
    "t": "A source has no folder set",
    "s": "error"
  },
  "LODE-SRV-SVC-0001": {
    "m": "Another copy of Lode Server is already running, so this one stopped.",
    "t": "Another copy of Lode Server is already running",
    "s": "info"
  },
  "LODE-SRV-SVC-0002": {
    "m": "Lode Server could not listen on its address because another program is using the port. {detail}",
    "t": "Another program is using Lode Server's port",
    "s": "critical"
  },
  "LODE-SRV-SVC-0003": {
    "m": "Lode Server runs as LocalSystem, the most powerful account on this computer. Run the installer again to move it to its own account.",
    "t": "Lode Server runs as LocalSystem",
    "s": "warning"
  },
  "LODE-SRV-SVC-0004": {
    "m": "This server listens on the network without sign-in. Only files of sources marked public, or readable by Everyone, are shown. Set auth to windows before adding private sources.",
    "t": "The server is on the network without sign-in",
    "s": "warning"
  },
  "LODE-SRV-SVC-0005": {
    "m": "The data folder {folder} is a whole drive, so Lode Server cannot lock it. Move it into a folder of its own.",
    "t": "The data folder is a whole drive",
    "s": "warning"
  },
  "LODE-SRV-SVC-0006": {
    "m": "Lode Server could not lock its folder {folder} to administrators, so it did not start. {detail}",
    "t": "Lode Server couldn't lock its data folder",
    "s": "critical"
  },
  "LODE-SRV-SVC-0007": {
    "m": "The folder {folder} is not locked to administrators (Lode Server is not running as the service). {detail}",
    "t": "The data folder isn't locked",
    "s": "warning"
  },
  "LODE-SRV-SVC-0008": {
    "m": "The data folder {folder} could not be closed to plugins. {detail}",
    "t": "The data folder couldn't be closed to plugins",
    "s": "warning"
  },
  "LODE-SRV-SVC-0009": {
    "m": "The plugins folder {folder} could not be opened to plugins, so plugins installed there may not start. {detail}",
    "t": "The plugins folder couldn't be opened to plugins",
    "s": "warning"
  },
  "LODE-SRV-SVC-0010": {
    "m": "HTTPS is switched on but its certificate was not found ({which}). Lode Server is listening on this computer only until this is fixed: run the installer with -Https, or set certificate in settings.json to the thumbprint of a certificate in the computer's store.",
    "t": "The HTTPS certificate wasn't found",
    "s": "error"
  },
  "LODE-SRV-SVC-0011": {
    "m": "The HTTPS certificate {subject} expired on {date}. Lode Server is listening on this computer only until this is fixed: run the installer with -Https, or set certificate in settings.json to the thumbprint of a certificate in the computer's store.",
    "t": "The HTTPS certificate has expired",
    "s": "error"
  },
  "LODE-SRV-SVC-0012": {
    "m": "The HTTPS certificate {subject} is not valid until {date}. Lode Server is listening on this computer only until this is fixed: run the installer with -Https, or set certificate in settings.json to the thumbprint of a certificate in the computer's store.",
    "t": "The HTTPS certificate isn't valid yet",
    "s": "error"
  },
  "LODE-SRV-SVC-0013": {
    "m": "The HTTPS certificate {subject} has no private key on this computer. Lode Server is listening on this computer only until this is fixed: run the installer with -Https, or set certificate in settings.json to the thumbprint of a certificate in the computer's store.",
    "t": "The HTTPS certificate has no private key",
    "s": "error"
  },
  "LODE-SRV-SVC-0014": {
    "m": "The service account cannot use the private key of the HTTPS certificate {subject}. Lode Server is listening on this computer only until this is fixed: run the installer with -Https, or set certificate in settings.json to the thumbprint of a certificate in the computer's store.",
    "t": "The service account can't use the certificate's private key",
    "s": "error"
  },
  "LODE-SRV-SVC-0015": {
    "m": "The HTTPS certificate could not be read. {detail} Lode Server is listening on this computer only until this is fixed: run the installer with -Https, or set certificate in settings.json to the thumbprint of a certificate in the computer's store.",
    "t": "The HTTPS certificate couldn't be read",
    "s": "error"
  },
  "LODE-SRV-SVC-0016": {
    "m": "The HTTPS certificate {subject} expires on {date}. Renew it.",
    "t": "The HTTPS certificate expires soon",
    "s": "warning"
  }
};
