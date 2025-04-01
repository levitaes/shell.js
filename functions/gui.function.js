import {WorkingDirectory} from "../filesystem/FileSystem.js";

export default {
    name: 'gui',
    description: 'gui',
    arguments: 0,
    async execute(os, args) {
        const doom = os.dialog.getDom()


        container = document.createElement("div")
        container.classList.add("screen");

        // taskbar
        const bar = document.createElement("div")
        bar.classList.add("bar");
        container.appendChild(bar);

        // Button to Exit the GUI
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close");
        closeBtn.textContent = "Exit GUI";
        closeBtn.onclick = () => {
            closeGui();
        }
        bar.appendChild(closeBtn);


        // CSS Style for the GUI and all children
        const style = document.createElement("style");
        style.innerHTML = `
            .screen {
                background-color: #ccc;
                color: white;
                text-align: center;
                font-size: 18px;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            
            .bar {
                width: 100%;
                height: 30px;
                background-color: #000;
                position: fixed;
                bottom: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            }
            
            img {
                width: 50px;
                height: 50px;
                cursor: pointer;
            }
            
            .con {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px
            }
            
            .filesDiv {
                background-color: #ccc;
                border: 1px solid #000;
                width: 1005;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                
            }
            
            .appHeader {
                width: 100%;
                height: 30px;
                background-color: #000;
                display: flex;
                align-items: center;
                justify-content: space-between;
                align-items: center;
                border-radius: 3px 3px 0 0;
            }
            .appHeader > * {
                margin: 0 10px;
            }
            
            .appBody {
                width: 100%;
                height: calc(100% - 40px);
                background-color: white;
                overflow: auto;
                
            }
            
            .app {
                width:400px;
                height: 400px;
                position: absolute
                background-color: #000;
                border: 1px solid #000;
                border-radius: 5px 5px 0 0;
                resize: both;
            }
            
            .closeBtn {

                
            }
            
            .editorArea {
                color: black;
                // width: 100%;
                // height: 100%;
                resize: none;
                margin: 0;
                border: none;
                flex-grow: 4
            }
            
            .editorArea:focus {
                outline: none !important;
            }
           
            
            .appBody:has(.editorArea) {
                display: flex;
                flex-direction: column;
                }
            
            app-box {
                width:400px;
                // height: 400px;
                position: absolute
                background-color: #000;
                border: 1px solid #000;
                border-radius: 3px 3px 0 0;
                }
             
             .count {
                position: absolute;
                bottom: 3px;
                left: 3px;
                color: black;
             }
             
             
            /* Make responsive for small screens */
            @media (max-width: 768px) {
                .app {
                    width: 90vw;
                    height: 70vh;
                }
            }
            
            @media (max-width: 480px) {
                .app {
                    width: 95vw;
                    height: 80vh;
                }
            
                .appHeader {
                    height: 35px;
                    font-size: 14px;
                }
            }
            
            
            @keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:"";position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}
        `;
        container.appendChild(style);

        // Create a new instance of the file manager
        const file = new Files("Files");
        container.appendChild(file);

        // add the container to the dom
        doom.append(container);

        function closeGui() {
            resolve();
            doom.innerHTML = "";
        }

        // document.addEventListener('contextmenu', contextmenu);


        function contextmenu(e) {
            alert("You've tried to open context menu"); //here you draw your own menu
            e.preventDefault();
        }

        // Important, because otherwise the next input from the terminal would appear, before the GUI is closed
        return new Promise((re, reject) => {
            resolve = re;
        })

    }
};

let resolve = null;
let container = null;

/**
 * The App structure
 * @returns AppBox
 */
class AppBox extends HTMLElement {
    title = ""
    dragable = true

    constructor(title) {
        super();
        this.title = title;
        this.classList.add("app");
        this.createHtml();
    }

    createHtml() {
        const header = document.createElement("div");
        // header.innerText = this.title;
        header.classList.add("appHeader");

        // create the title
        const title = document.createElement("p");
        title.innerText = this.title;
        header.appendChild(title);

        // Div to add custom elements to the header
        const headerContent = document.createElement("div");
        headerContent.classList.add("appHeaderContent");
        header.appendChild(headerContent);
        this.headerContent = headerContent;

        // Close button for a window
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("closeBtn");
        closeBtn.innerText = "x";
        closeBtn.onclick = () => this.onClose();
        header.appendChild(closeBtn);

        // Body of a Window
        const body = document.createElement("div");
        body.classList.add("appBody");

        this.header = header;
        this.body = body;

        this.appendChild(header);
        this.appendChild(body);
        if (this.dragable) this.makeDraggable();
    }

    // can be overridden in a child
    onClose() {
        this.deleteMe()
    }

    deleteMe() {
        this.remove();
    }


    makeDraggable() {
        const element = this;
        let offsetX = 0, offsetY = 0, isDragging = false;

        element.style.position = "absolute"; // Ensure positioning

        this.header.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - element.offsetLeft;
            offsetY = e.clientY - element.offsetTop;
            // element.style.zIndex = 1000; // Bring to front
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        });

        this.header.addEventListener("mouseup", () => {
            isDragging = false;
        });
    }
}


window
    .customElements
    .define('app-box', AppBox);


class Files extends AppBox {
    constructor(title) {
        super(title);

        // create a new working directory
        this.wd = new WorkingDirectory();

        // div to render the files
        this.filesDiv = document.createElement("div");
        this.filesDiv.classList.add("filesDiv");
        this.body.appendChild(this.filesDiv)


        const select = document.createElement("select");
        select.classList.add("filesSelect");
        select.textContent = "New"

        const option = document.createElement("option");
        option.text = "File";
        select.appendChild(option);

        const option2 = document.createElement("option");
        option2.text = "Folder";
        select.appendChild(option2);


        // this.headerContent.appendChild(select);

        this.renderFiles();
    }


    moveDir(dir) {
        this.wd.goDir(dir.name);
        this.renderFiles();
    }


    renderFiles() {
        this.filesDiv.innerHTML = ""

        if (this.wd.current.parent != null) {
            const d = document.createElement("div");
            d.classList.add("con")
            const img = document.createElement("img");
            img.src = fileSvg;

            d.onclick = () => {
                this.wd.goDirUp();
                this.renderFiles();
            }

            d.appendChild(img)

            // Folder/File Name
            const label = document.createElement("span");
            label.innerText = "..";
            label.style.fontSize = "14px";
            label.style.textAlign = "center";
            label.style.color = "#333"; // Adjust text color

            d.appendChild(label);

            this.filesDiv.appendChild(d);
        }


        for (let [key, value] of this.wd.getChildren()) {
            this.createIcon(value)
        }

        const count = document.createElement("div");
        count.innerText = this.wd.getChildren().size + " Entries"
        count.classList.add("count");
        this.filesDiv.appendChild(count);

    }

    createIcon(node) {
        const t = node.getType();
        const d = document.createElement("div");
        d.classList.add("con")


        const img = document.createElement("img");
        if (node.getType() === "directory") {
            img.src = fileSvg;
        } else if (node.getType() === "file") {
            img.src = txtSvg;
        }


        img.onclick = () => {
            if (node.getType() === "directory") {
                this.moveDir(node);
            }
            if (node.getType() === "file") {
                new Editor("Editor", node)
            }
        }

        d.appendChild(img)

        // Folder/File Name
        const label = document.createElement("span");
        label.innerText = node.name;
        label.style.fontSize = "14px";
        label.style.textAlign = "center";
        label.style.color = "#333"; // Adjust text color

        d.appendChild(label);


        this.filesDiv.appendChild(d);
    }
}

window
    .customElements
    .define('app-files', Files);


class Editor extends AppBox {
    constructor(title, node) {
        super(title);
        this.node = node;

        const textArea = document.createElement("textarea");
        textArea.value = node.data;
        textArea.classList.add("editorArea");
        textArea.autocomplete = "on";
        textArea.autocorrect = "on";
        textArea.wrap = "off"
        this.body.appendChild(textArea);
        this.textArea = textArea;

        const editorDiv = document.createElement("div");
        editorDiv.classList.add("editorDiv");
        this.body.appendChild(editorDiv);

        const savebtn = document.createElement("button");
        savebtn.classList.add("savebtn");
        savebtn.innerText = "save";
        savebtn.addEventListener("click", (e) => {
            this.save();
        })
        editorDiv.appendChild(savebtn);

        container.appendChild(this)
    }

    textFormatting() {

    }

    save() {
        this.node.setData(this.textArea.value);
    }
}

window
    .customElements
    .define('app-editor', Editor);


const
    fileSvg = "data:image/png;base64,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"

const
    txtSvg = "data:image/png;base64,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"