import {Directory} from "../filesystem/INode.js";

export default {
    name: 'ls',
    description: 'ls (list files and directories)',
    arguments: [["-l", "-a", "-h"]],
    execute(os, args) {
        const arg = args[0];
        let showHidden = false;
        if (arg && arg.startsWith('-')) {
            const options = arg.substring(1);
            if (options === "h"){
                os.dialog.say("Usage: ls [OPTION]");
                os.dialog.say("List information about the FILEs (the current directory by default).");
                os.next();
            }
            if(options.includes('a')) {
                showHidden = true;
            }

            if (options.includes('l')) {
                for (let [key, value] of os.wd.getChildren()) {
                    if(value.isHidden() && !showHidden) { continue; }
                    const color = value instanceof Directory ? '#92AEBE' : '#C4D3B2';
                    const metadata = value.getMetadata();
                    const modified = new Date(metadata.modified);
                    const html = ` <span>${metadata.permissions.read ? 'r' : '-'}${metadata.permissions.write ? 'w' : '-'}${metadata.permissions.execute ? 'x' : '-'} ${metadata.owner.uid}      ${modified.toDateString()} ${modified.getHours()}:${modified.getMinutes()} </span><span style="color: ${color}">${key}</span>`;
                    os.dialog.sayRaw(html);
                }
            }

        } else {
            for (let [key, value] of os.wd.getChildren()) {
                if(value.isHidden()) { continue; }
                const color = value instanceof Directory ? '#92AEBE' : '#C4D3B2';
                os.dialog.say(key, {color: color});
            }
        }
        os.next();
    }
};
